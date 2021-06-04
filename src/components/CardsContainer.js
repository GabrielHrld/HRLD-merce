import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Spinner from '../components/Spinner';
import SpinnerDark from '../components/SpinnerDark';
import '../styles/components/CardsContainer.scss';
import Card from './Card';
import Pagination from './Pagination';
import ModalProduct from './ModalProduct';
import { config } from '../utils/config';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CardsContainer = ({
  quantity,
  pagination,
  filteredProducts,
  mini,
  dark,
  admin,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
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

  //Llamada a la API
  useEffect(() => {
    setLoading(true);
    const fetchApi = () => {
      axios
        .get(
          `${config.api_url}/products?${
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
    };
    fetchApi();
  }, [category, minPrice, maxPrice, minToMax, maxToMin, color]);

  //
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
              {dark ? <Spinner /> : <SpinnerDark />}
            </div>
          </div>
        ) : quantity ? (
          products.slice(0, quantity).map((product) => {
            return <Card product={product} key={product.name} admin={admin} />;
          })
        ) : (
          currentProducts.map((product) => {
            return <Card product={product} key={product.name} admin={admin} />;
          })
        )}
      </div>
      <ModalProduct />

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
