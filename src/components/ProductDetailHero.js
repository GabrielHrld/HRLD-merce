import React, { useState,  } from 'react';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

import MonthlyFees from './MonthlyFees';
import '../styles/components/ProductDetailHero.scss';
import Button from './Button';
import {addToCart} from '../actions';

//SWIPER
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard]);

const ProductDetailHero = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('m')

  const productToCart = {
    ...product,
    size: [size],
    quantity
  }
  const handleAddToCart = () => addToCart(productToCart);
  
  const handleSize = (event) => {
    setSize(event.target.value)
  }

  const handleChange= (event) => {
    const value = parseInt(event.target.value);
     setQuantity(value);
  }
  return (
    <div className="main">
      <div className="main-images_carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="swiper-wrapper"
        >
          <SwiperSlide className="swiper-slide">
            <figure className="image-container">
              <img src={product.image} alt="" />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="main-info_container">
        <div className="main-info_title">
          <span>{product.name}</span>
        </div>
        <div className="main-info_price">
          <NumberFormat
            value={product.price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </div>
        <div className="main-info_description">
          <p>{product.description}</p>
        </div>
        <form action="" className="main-info_form">
          <table>
            <tbody>
              <tr>
                <td className="label">
                  <label htmlFor="" className="p_color">
                    Color
                  </label>
                </td>
                <td className="value">
                  <select name="" id="p_color">
                    <option value>Elige una opción</option>
                    <option value={product.color}>{product.color}</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="">Talle</label>
                </td>
                <td className="value">
                  <select name="" id="p_size" onChange={handleSize} defaultValue="m">
                    {product.sizeAvailable.map((size) => {
                      return <option key={size} value={size} onClick={handleSize}>{size}</option>;
                    })}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="addCart-wrapper">
            <div className="addCart-container">
              <label htmlFor="quantity" className="label">
                Cantidad: max {product.stock} unidades
              </label>
              <div>
                <input
                  type="number"
                  className="quantity"
                  id="quantity"
                  min="0"
                  max={product.stock}
                  onChange={handleChange}
                  value={quantity}
                  defaultValue="1"
                />
                <div onClick={handleAddToCart}>
                <Button type="button" text={'añadir al carrito'}  />
                  
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="fees">
          <MonthlyFees fees={12} price={14000} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
}

export default connect(null, mapDispatchToProps)(ProductDetailHero);
