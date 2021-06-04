import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import HeadBand from '../components/HeadBand';
import CardsContainer from '../components/CardsContainer';

const MarketCategories = ({ products }) => {
  const productsOnSale = products.filter((product) => product.sale == true);

  return (
    <div className="market-wrapper">
      <Helmet>
        <title>Sale 🔥 | HRLD-merce</title>
        <meta
          name="description"
          content="Sección de productos en descuento. HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
        />
      </Helmet>
      <HeadBand title={'Sale'} />
      <CardsContainer filteredProducts={productsOnSale} pagination={true} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(MarketCategories);
