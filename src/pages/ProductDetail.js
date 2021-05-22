import React, {useState} from 'react'
import BannerService from '../components/BannerService';
import {productsMock} from '../utils/productsMock'

import '../styles/components/ProductDetail.scss'

import Promo from '../components/Promo';
import ProductDetailHero from '../components/ProductDetailMain';
import CardsContainer from '../components/CardsContainer';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const [products, setProducts] = useState(productsMock)
 
  const {id} = useParams()

  const product =  productsMock.filter((product) => product.id == id);
  console.log(product)
  return (
    <div className="product-detail_container">
      <ProductDetailHero product={product[0]}/> 
      <Promo text="Pagá en cuotas sin interés"/>
      <BannerService />
      <Promo text="Productos relacionados"/> 
      <CardsContainer quantity={4}/> 
    </div>
  )
}

export default ProductDetail
