import React, { useState } from 'react'
import {productsMock} from '../utils/productsMock'

import '../styles/components/CardsContainer.scss'
import Card from './Card'
const CardsContainer = ({quantity}) => {
  const [products, setProducts] = useState(productsMock)


  return (
    <div className="container-cards">
      {
        quantity ? 
          products.slice(0, quantity).map((product)=>{
            return(
              <Card product={product} />
            )
          }) :
          products.map((product) => {
            return(
              <Card product={product} />
            )
          }) 
      }
    </div>
  )
}

export default CardsContainer
