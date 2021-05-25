import React from 'react'
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format';

import {States} from '../utils/States';

import Button from '../components/Button'
import '../styles/pages/Checkout.scss'

const Checkout = ({cart}) => {
  
  let sum = 0
  cart.forEach(element => sum += element.quantity * element.price );

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <div className="billing">
          <div className="billing-title"><h3>Facturación y envío</h3></div>
          <div className="billing-subtitle"><h4>País <strong>Argentina</strong></h4></div>
          <div className="billing-data">
            <p>
              <label htmlFor="name">Nombre Completo</label>
              <span>
                <input type="text" placeholder="Ingrese su nombre" id="name" />
              </span>
            </p>
            <p>
              <label htmlFor="lastname">Apellido</label>
              <span>
                <input type="text" placeholder="Ingrese su apellido" id="lastname"/>
              </span>
            </p>
            <p>
              <label htmlFor="dni">DNI</label>
              <span>
                <input type="number" placeholder="DNI" id="dni"/>
              </span>
            </p>
            <p>
              <label htmlFor="state">Estado/Provincia</label>
              <select name="" id="state">
                {
                  States.map((state, index) => <option key={index + state} value={state}>{state}</option>)
                }
              </select>
            </p>
            <p>
              <label htmlFor="postal">Código postal</label>
              <span>
                <input type="number" placeholder="Código postal" id="postal"/>
              </span>
            </p>
            <p>
              <label htmlFor="email">Dirección de correo electrónico</label>
              <span>
                <input type="email" placeholder="Ingrese su correo electrónico" id="email"/>
              </span>
            </p>
            <p>
              <label htmlFor="phone">Teléfono</label>
              <span>
                <input type="number" placeholder="Teléfono" id="phone"/>
              </span>
            </p>
          </div>
        </div>
        <div className="order-resume">
          <div className="order-resume_title"><h3>Su pedido</h3></div>
          <div className="order">
            <div className="order-product order-box">
              <span>Producto</span>
            </div>
            {
              cart.map((product, index)=>{
                return (
                  <div className="order-card_product order-box">
                    <span>{product.name} <strong>x{product.quantity}</strong></span>
                    <NumberFormat
                      value={product.price}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </div>
                )
              })
            }
            <div className="order-subtotal order-box">
              <span>Subtotal</span>
              <NumberFormat
                value={sum}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
            <div className="order-total order-box">
              <span>Total</span>
              <NumberFormat
                value={sum == 0 ? sum : sum + 300}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </div>
            {sum != 0 ? <Button text={'Finalizar compra'}/> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout)
