import React from 'react'
import {connect} from 'react-redux'

import HeadBand from '../components/HeadBand';
import CardsContainer from '../components/CardsContainer';
import { useParams, useLocation } from 'react-router-dom';

const MarketCategories = ({products}) => {

  const productsOnSale = products.filter((product) => product.sale == true)

  return (
    <div className="market-wrapper">
      <HeadBand title={'Sale'}/>
      <CardsContainer filteredProducts={ productsOnSale} pagination={true}/>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, null)(MarketCategories)
