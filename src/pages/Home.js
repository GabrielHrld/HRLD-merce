import React from 'react';
import BannerService from '../components/BannerService';
import CardsContainer from '../components/CardsContainer';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import { Helmet } from 'react-helmet';

import '../styles/pages/Home.scss';
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Helmet>
          <title>HRLD-merce</title>
          <meta
            name="description"
            content="HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
          />
        </Helmet>
        <Hero />
        <BannerService />
        <Promo text="ELEGI, COMPRA Y RECIBÍ NUESTROS BÁSICOS SIN MOVERTE DE TU CASA" />
        <CardsContainer quantity={10} />
        <BannerService />
      </div>
    </div>
  );
};
export default Home;
