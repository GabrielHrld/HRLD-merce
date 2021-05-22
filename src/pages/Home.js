import React from 'react';
import BannerService from '../components/BannerService';
import CardsContainer from '../components/CardsContainer';
import Hero from '../components/Hero';
import Promo from '../components/Promo';

import '../styles/pages/Home.scss';
const Home = () => (
  <div className="Home">
    <div className="container">
      <Hero />
      <BannerService />
      <Promo text="ELIGI, COMPRA Y RECIBÍ NUESTROS BÁSICOS SIN MOVERTE DE TU CASA"/>
      <CardsContainer quantity={10} />
      <BannerService />

    </div>
  </div>
);

export default Home;
