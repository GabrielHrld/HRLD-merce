import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { States } from '../utils/States';
import { expresiones } from '../utils/regex';
import Button from '../components/Button';
import '../styles/pages/Checkout.scss';
import InputCheckout from '../components/InputCheckout';
import { config } from '../utils/config';

const Checkout = ({ cart, user }) => {
  const history = useHistory();
  const [modalSuccess, setModalSuccess] = useState(false);
  const [formError, setFormError] = useState(null);
  const [name, setName] = useState({ field: '', valid: null });
  const [lastName, setLastname] = useState({ field: '', valid: null });
  const [dni, setDni] = useState({ field: '', valid: null });
  const [state, setState] = useState({ field: 'Buenos Aires', valid: null });
  const [address, setAddress] = useState({ field: '', valid: null });
  const [postal, setPostal] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [phone, setPhone] = useState({ field: '', valid: null });
  const order = {
    customer: user._id,
    name: name.field,
    lastname: lastName.field,
    DNI: dni.field,
    state: state.field,
    address: address.field,
    postal: postal.field,
    email: email.field,
    phone: phone.field,
    products: [],
    status: 'pending',
    date: moment().format('LLL'),
  };

  const handleModalSuccess = () => {
    setModalSuccess(true);
    setTimeout(() => setModalSuccess(false), 2200);
  };

  const handleSubmit = () => {
    if (
      name.valid &&
      lastName.valid &&
      dni.valid &&
      address.valid &&
      postal.valid &&
      email.valid &&
      phone.valid
    ) {
      if (user.name != null) {
        cart.map((item) => {
          const { name, price, quantity, size, color } = item;
          const size_ = size[0];
          order.products.push({ name, price, quantity, size: size_, color });
        });
        console.log(order);
        axios
          .post(`${config.api_url}/orders`, order, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.access_token}`,
            },
          })
          .then((res) => {
            handleModalSuccess();
            console.log(res.data);
            localStorage.removeItem('cart');
            setName({ field: '', valid: null });
            setLastname({ field: '', valid: null });
            setDni({ field: '', valid: null });
            setState({ field: 'Buenos Aires', valid: null });
            setAddress({ field: '', valid: null });
            setPostal({ field: '', valid: null });
            setEmail({ field: '', valid: null });
            setPhone({ field: '', valid: null });
            setTimeout(() => {
              history.push('/');
              window.location.reload(true);
            }, 3000);
          })
          .catch((error) => console.log({ error }));
        //   setFormError(false)
      } else {
        alert('Para realizar una órden necesitas estar registrado');
      }
    } else {
      console.log(' no valido');
      setFormError(true);
    }
  };

  let sum = 0;
  cart.forEach((element) => (sum += element.quantity * element.price));

  const handleSelect = (e) => setState({ ...state, field: e.target.value });

  return (
    <div className="checkout-wrapper">
      <Helmet>
        <title>Checkout | HRLD-merce</title>
        <meta name="description" content="Órdenes." />
      </Helmet>
      <div className="checkout-container">
        <div className="billing">
          <div className="billing-title">
            <h3>Facturación y envío</h3>
          </div>
          <div className="billing-subtitle">
            <h4>
              País <strong>Argentina</strong>
            </h4>
          </div>
          <div className="billing-data">
            <InputCheckout
              state={name}
              setState={setName}
              label={'Nombre Completo'}
              type={'text'}
              placeholder={
                user.name != null ? `${user.name}` : 'Ingrese su nombre'
              }
              name={'name'}
              regex={expresiones.nombre}
            />
            <InputCheckout
              state={lastName}
              setState={setLastname}
              label={'Apellido'}
              type={'text'}
              placeholder={
                user.name != null ? `${user.lastname}` : 'Ingrese su apellido'
              }
              name={'lastname'}
              regex={expresiones.nombre}
            />
            <InputCheckout
              state={dni}
              setState={setDni}
              label={'DNI'}
              type={'text'}
              placeholder="Ingrese su DNI"
              name={'dni'}
              regex={expresiones.dni}
            />
            <p>
              <label htmlFor="state">Estado/Provincia</label>
              <select name="state" id="state" onChange={handleSelect}>
                {States.map((state, index) => (
                  <option key={index + state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </p>
            <InputCheckout
              state={address}
              setState={setAddress}
              label={'Domicilio'}
              type={'text'}
              placeholder="Ingrese su domicilio"
              name={'address'}
              regex={expresiones.address}
            />
            <InputCheckout
              state={postal}
              setState={setPostal}
              label={'Código postal'}
              type={'text'}
              placeholder="Código postal"
              name={'postal'}
              regex={expresiones.postal}
            />
            <InputCheckout
              state={email}
              setState={setEmail}
              label={'Dirección de correo electrónico'}
              type={'email'}
              placeholder={
                user.name != null ? `${user.email}` : 'example@example.com'
              }
              name={'email'}
              regex={expresiones.correo}
            />
            <InputCheckout
              state={phone}
              setState={setPhone}
              label={'Teléfono'}
              type={'text'}
              placeholder={user.name != null ? `${user.phone}` : '11 00001111 '}
              name={'phone'}
              regex={expresiones.telefono}
            />
          </div>
          {formError ? (
            <p style={{ color: 'red' }}>
              Completa todos los campos antes de enviar la órden
            </p>
          ) : null}
        </div>
        <div className="order-resume">
          <div className="order-resume_title">
            <h3>Su pedido</h3>
          </div>
          <div className="order">
            <div className="order-product order-box">
              <span>Producto</span>
            </div>
            {cart.map((product, index) => {
              return (
                <div
                  className="order-card_product order-box"
                  key={product + index}
                >
                  <span>
                    {product.name} <strong>x{product.quantity}</strong>
                  </span>
                  <NumberFormat
                    value={product.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </div>
              );
            })}
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
            {sum != 0 ? (
              <div onClick={handleSubmit}>
                <Button text={'Finalizar compra'} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div
          className={
            modalSuccess
              ? 'modalSuccess-wrapper active'
              : 'modalSuccess-wrapper'
          }
        >
          <div className="modalSuccess">
            <h3>Gracias por tu compra</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Checkout);
