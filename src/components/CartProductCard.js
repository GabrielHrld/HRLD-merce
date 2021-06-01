import React from 'react'
import {connect} from 'react-redux'

import NumberFormat from 'react-number-format';
import {ImBin} from 'react-icons/im'
import { HiMinus, HiPlus } from "react-icons/hi";

import {deleteToCart, handleQuantity} from '../actions'
import '../styles/components/CartProductCard.scss'

const CartProductCard = ({product, deleteToCart, handleQuantity}) => {

  const handleDeleteToCart = () => deleteToCart(product);

  const handleProductSum = () => handleQuantity(product, 1)
  const handleProductLess = () => handleQuantity(product, 0)

  return (
      <div className="products-wrapper">
        <div className="products-container">
          <div className="product-card">
            <div className="product-card_image">
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
            </div>
            <div className="product-card_info">
              <div className="product-card_info_title">
                <a href={`/products/${product.id}`}>
                  {product.name}
                </a>
              </div>
              <div className="product-card_info_recap">
                <span>{`(${product.size[0]}, ${product.color})`}</span>
              </div>
              <div className="product-card_info_price">
                <NumberFormat
                  value={product.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
              <div className="product-card_info_quantity">
                <button onClick={handleProductLess}> <HiMinus className="product-card_icon minus"/></button>
                <div className="input_quantity"><input type="number" value={product.quantity} readOnly/></div>
                <button onClick={handleProductSum}> <HiPlus className="product-card_icon plus"/></button>
              </div>
            </div>
            <div className="quantity">
              <h3>x{product.quantity}</h3>
            </div>
            <div className="icon-container " >
              <ImBin className="icon" onClick={handleDeleteToCart}/>
            </div>
          </div>
        </div>
      </div>
  )
}

const mapDispatchToProps = {
  deleteToCart,
  handleQuantity
}

export default connect(null, mapDispatchToProps)(CartProductCard);
