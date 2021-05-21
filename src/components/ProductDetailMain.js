import React from 'react'
import MonthlyFees from '../components/MonthlyFees'

//SWIPER
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import Button from '../components/Button';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard]);

import '../styles/components/ProductDetailHero.scss'
const ProductDetailHero = ({product}) => {
  return (
    <div className="main">
        <div className="main-images_carousel">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={ {clickable: true} }
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-wrapper"
          >
            <SwiperSlide className="swiper-slide">
              <figure className="image-container">
                <img src={product[0].images[0]} alt="" />
              </figure>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <figure className="image-container">
                <img src={product[0].images[1]} alt="" />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="main-info_container">
          <div className="main-info_title">
            <span>TITULO</span>
          </div>
          <div className="main-info_price">
            <span>$3.000,00</span>
          </div>
          <div className="main-info_description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, molestiae.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quae ex odit quia molestiae libero.
            </p>
          </div>
          <form action="" className="main-info_form">
            <table>
              <tr>
                <td className="label">
                  <label htmlFor="" className="p_color">Color</label>
                </td>
                <td className="value">
                  <select name="" id="p_color">
                    <option value>Elige una opción</option>
                    <option value="azul">Azul</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="">Talle</label>
                </td>
                <td className="value">
                  <select name="" id="p_size">
                    <option value="">Elige una opcioón</option>
                    <option value="">38</option>
                    <option value="">40</option>
                    <option value="">42</option>
                    <option value="">44</option>
                  </select>
                </td>
              </tr>
            </table>
            <div class="addCart-wrapper">
              <div className="addCart-container">
                <label htmlFor="quantity" className="label">Cantidad</label>
                <div>
                  <input type="number" className="quantity" id="quantity" min="0" />
                  <Button text={'añadir al carrito'}/>

                </div>
              </div>
            </div>
          </form>
          <div className="fees">
            <MonthlyFees fees={12} price={14000} />
          </div>
        </div>
      </div>
  )
}

export default ProductDetailHero
