import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';

import '../styles/components/CardsContainer.scss'
import Card from './Card'
import Pagination from './Pagination';

const CardsContainer = ({products, quantity, pagination}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // Call to API
  // useEffect((params) => {
  // },[])

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="container-cards_wrapper">
      <div className="container-cards">
        {
          quantity ? 
            products.slice(0, quantity).map((product)=>{
              return(
                <Card product={product} key={product.id}/>
              )
            }) :
            currentProducts.map((product) => {
              return(
                <Card product={product} key={product.id}/>
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
