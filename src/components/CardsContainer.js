import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { useLocation } from 'react-router';

import '../styles/components/CardsContainer.scss'
import Card from './Card'
import Pagination from './Pagination';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CardsContainer = ({products, quantity, pagination, filteredProducts, mini, dark, admin}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const min = useQuery().get('min') 
  const max = useQuery().get('max') 

  if(filteredProducts) {
    products = filteredProducts
  }
  if(min && max != null) {
    const filterByPrice = products.filter((product)=> product.price >= min && product.price <= max)
    products = filterByPrice
  }
  if(useQuery().get('color') != null) {
    const filterByColor = products.filter((product)=> product.color.toLowerCase() == useQuery().get('color').toLowerCase())
    products = filterByColor
  }

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container-cards_wrapper">
      <div className={mini ? "container-cards mini" : "container-cards"}>
        {
          quantity ? 
            products.slice(0, quantity).map((product)=>{
              return(
                <Card product={product} key={product.id} admin={admin}/>
              )
            }) :
            currentProducts.map((product) => {
              return(
                <Card product={product} key={product.id} admin={admin}/>
              )
            }) 
        }
      </div>
      {
        pagination ? 
        <div className="pagination-wrapper">
          <Pagination 
            productsPerPage={productsPerPage} 
            totalProducts={products.length} 
            paginate={paginate}
            dark={dark}
          />
        </div> : 
        <div></div>
      }
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(CardsContainer);
