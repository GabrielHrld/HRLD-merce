import React from 'react'
import {connect} from 'react-redux'

import HeadBand from '../components/HeadBand';
import CardsContainer from '../components/CardsContainer';
import { useParams, useLocation } from 'react-router-dom';

const MarketCategories = ({products}) => {
  
  
  const {category} = useParams()
  
  const productsByCategory = products.filter((product) => product.category[0].toLowerCase() == category.toLowerCase())

  return (
    <div className="market-wrapper">
      <HeadBand title={category}/>
      <CardsContainer filteredProducts={ productsByCategory} pagination={true}/>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null)(MarketCategories)
