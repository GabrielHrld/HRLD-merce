import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import '../styles/components/CardsContainer.scss';
import Card from './Card';
import Pagination from './Pagination';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CardsContainer = ({
  quantity,
  pagination,
  filteredProducts,
  mini,
  dark,
  admin,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([]);
  const category = useQuery().get('category');
  const minPrice = useQuery().get('minPrice');
  const maxPrice = useQuery().get('maxPrice');
  const minToMax = useQuery().get('minToMax');
  const maxToMin = useQuery().get('maxToMin');
  const color = useQuery().get('color');
  let products;
  if (filteredProducts) {
    products = filteredProducts;
  }
  console.log(
    `http://localhost:3000/products?${
      category != null ? `&category=${category}` : ''
    }${color != null ? `&color=${color}` : ''}${
      minToMax != null ? `&minToMax=${true}` : ''
    }${maxToMin != null ? `&maxToMin=${true}` : ''}${
      minPrice != null ? `&minPrice=${minPrice}` : ''
    }${maxPrice != null ? `&maxPrice=${maxPrice}` : ''}`
  );
  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `http://localhost:3000/products?${
          category != null ? `&category=${category}` : ''
        }${color != null ? `&color=${color}` : ''}${
          minToMax != null ? `&minToMax=${true}` : ''
        }${maxToMin != null ? `&maxToMin=${true}` : ''}${
          minPrice != null ? `&minPrice=${minPrice}` : ''
        }${maxPrice != null ? `&maxPrice=${maxPrice}` : ''}`
      )
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  products = productos;

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-cards_wrapper">
      <div className={mini ? 'container-cards mini' : 'container-cards'}>
        {loading ? (
          <div className="spiner-wrapper">
            <div className="spinner-container">
              <Spinner />
            </div>
          </div>
        ) : quantity ? (
          products.slice(0, quantity).map((product) => {
            return <Card product={product} key={product.id} admin={admin} />;
          })
        ) : (
          currentProducts.map((product) => {
            return <Card product={product} key={product.id} admin={admin} />;
          })
        )}
      </div>
      {pagination ? (
        <div className="pagination-wrapper">
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            dark={dark}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(CardsContainer);
