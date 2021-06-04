import React, { useState } from 'react';
import { connect } from 'react-redux';
import BannerService from '../components/BannerService';
import { productsMock } from '../utils/productsMock';

import '../styles/components/ProductDetail.scss';

import Promo from '../components/Promo';
import ProductDetailHero from '../components/ProductDetailHero';
import CardsContainer from '../components/CardsContainer';

const ProductDetail = () => {
  return (
    <div className="product-detail_container">
      <ProductDetailHero />
      <Promo text="Pagá en cuotas sin interés" />
      <BannerService />
      <Promo text="Productos relacionados" />
      <CardsContainer quantity={4} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductDetail);
