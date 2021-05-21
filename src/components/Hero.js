import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';

import 'swiper/swiper.scss';
import '../styles/components/Hero.scss'
import Slide1 from '../../assets/1.jpg'
import Slide2 from '../../assets/2.jpg'

SwiperCore.use([Autoplay])
const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay
      >
        <SwiperSlide><img src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
