import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {handleCartClick,} from '../actions'

import { FaTimes } from "react-icons/fa";
import NumberFormat from 'react-number-format';

import Button from './Button'
import '../styles/components/Cart.scss'
import CartProductCard from './CartProductCard';

const Cart = ({cart, cartClick, handleCartClick, }) => {
  let sum = 0
  cart.forEach(element => sum += element.quantity * element.price );

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
          sum != 0 ?
          cart.map((product) => {
            return(
              <CartProductCard product={product} />
            )
          }) : 
          <div><h3>No hay productos añadidos al carrito</h3></div>
        }
        <div className="cart-titles">
          <div className="cart-titles_container">
            <span className="cart-titles_item">subtotal :</span>
            <span className="cart-titles_item">
              <NumberFormat
                value={sum}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
          </div>
        </div>
        <div className="cart-titles">
          <div className="cart-titles_container">
            <span className="cart-titles_item">total (con envío) :</span>
            <span className="cart-titles_item">
              <NumberFormat
                value={sum == 0 ? 0 : sum + 300}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
          </div>
        </div>
        {
          sum != 0 ?
          <div className="button-container"> 
            <Link to="/checkout">
              <Button text={'Realizar pedido'}/>
            </Link>
          </div> : <div></div>
        }
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
  handleCartClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
