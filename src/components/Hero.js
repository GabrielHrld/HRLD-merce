import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination,} from 'swiper';

//SLIDES
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/components/Hero.scss'
//IMAGES SLIDE
import Slide1 from '../../assets/1.jpg'
import Slide2 from '../../assets/2.jpg'

SwiperCore.use([Autoplay, Navigation, Pagination])
const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, }}
        navigation={true}
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
