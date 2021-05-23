import React, { useState } from 'react'
import {connect} from 'react-redux'
import {handleCartClick} from '../actions'
import { FaTimes } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
import NumberFormat from 'react-number-format';

import '../styles/components/Cart.scss'

import {productsMock} from '../utils/productsMock';

import {ImBin} from 'react-icons/im'

const Cart = ({cart, cartClick, handleCartClick}) => {
  const [products, setProducts] = useState(productsMock)
  console.log(cart)
  const activeCartClick =()=> {
    handleCartClick(!cartClick)
  }

  return (
    <div className={cartClick ? "side-cart_wrapper active" : "side-cart_wrapper"}>
      <div className="side-cart_container">
        <header>
          <a title="Close" className="close-icon_container" onClick={activeCartClick}>
            <FaTimes className="icon" />
          </a>
          <span><h3>Carrito de compras</h3></span>
        </header>
        <div className="cart-titles">
          <div className="cart-titles_container">
            <span className="cart-titles_item">producto</span>
          </div>
        </div>
        {
          cart.map((product) => {
            return(
              <div className="products-wrapper">
          <div className="products-container">
            <div className="product-card">
              <div className="product-card_image">
                <figure>
                  <img src={product.images[0]} alt={product.name} />
                </figure>
              </div>
              <div className="product-card_info">
                <div className="product-card_info_title">
                  <a href="">
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
                  <button> <HiMinus className="product-card_icon minus"/></button>
                  <div className="input_quantity"><input type="number" defaultValue={product.quantity} readOnly/></div>
                  <button> <HiPlus className="product-card_icon plus"/></button>
                </div>
              </div>
              <div className="quantity">
                <h3>x{product.quantity}</h3>
              </div>
              <div className="icon-container">
                <ImBin className="icon"/>
              </div>
            </div>
          </div>
        </div>
            )
          })
        }
        {/* <div className="products-wrapper">
          <div className="products-container">
            <div className="product-card">
              <div className="product-card_image">
                <figure>
                  <img src={products[0].images[0]} alt={products[0].name} />
                </figure>
              </div>
              <div className="product-card_info">
                <div className="product-card_info_title">
                  <a href="">
                    {products[0].name}
                  </a>
                </div>
                <div className="product-card_info_recap">
                  <span>{`(${products[0].sizeAvailable[3]}, ${products[0].color})`}</span>
                </div>
                <div className="product-card_info_price">
                  <NumberFormat
                    value={products[0].price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </div>
                <div className="product-card_info_quantity">
                  <button> <HiMinus className="product-card_icon minus"/></button>
                  <div className="input_quantity"><input type="number" defaultValue="1" readOnly/></div>
                  <button> <HiPlus className="product-card_icon plus"/></button>
                </div>
              </div>
              <div className="icon-container">
                <ImBin className="icon"/>
              </div>
            </div>
          </div>
        </div> */}
        <div className="cart-titles">
          <div className="cart-titles_container">
            <span className="cart-titles_item">subtotal :</span>
            <span className="cart-titles_item">
              <NumberFormat
                value={products[0].price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
          </div>
        </div>
        <div className="cart-titles">
          <div className="cart-titles_container">
            <span className="cart-titles_item">total :</span>
            <span className="cart-titles_item">
              <NumberFormat
                value={products[0].price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    cartClick: state.cartClick,
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  handleCartClick
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
