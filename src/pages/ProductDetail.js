import React, {useState} from 'react'
import BannerService from '../components/BannerService';
import {productsMock} from '../utils/productsMock'

import '../styles/components/ProductDetail.scss'

import Promo from '../components/Promo';
import ProductDetailHero from '../components/ProductDetailMain';
import CardsContainer from '../components/CardsContainer';

const ProductDetail = (props) => {
  const [products, setProducts] = useState(productsMock)
  
  return (
    <div className="product-detail_container">
      <ProductDetailHero product={products}/>
      <Promo text="Pagá en cuotas sin interés"/>
      <BannerService />
      <Promo text="Productos relacionados"/>
      <CardsContainer quantity={4}/>
    </div>
  )
}

export default ProductDetail
