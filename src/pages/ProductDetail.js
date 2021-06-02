import React, { useState } from 'react';
import { connect } from 'react-redux';
import BannerService from '../components/BannerService';
import { productsMock } from '../utils/productsMock';

import '../styles/components/ProductDetail.scss';

import Promo from '../components/Promo';
import ProductDetailHero from '../components/ProductDetailHero';
import CardsContainer from '../components/CardsContainer';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  const product = products.filter((product) => product._id == id);

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
