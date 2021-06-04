import React from 'react';
import CardsContainer from '../components/CardsContainer';
import HeadBand from '../components/HeadBand';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

import '../styles/pages/Market.scss';

const Market = () => {
  const category = useQuery().get('category');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let title;
  if (category.length > 0) title = capitalizeFirstLetter(category);

  return (
    <div className="market-wrapper">
      <Helmet>
        <title>{category.length > 0 ? title : Productos} | HRLD-merce</title>
        <meta
          name="description"
          content="Sección de productos. HRLD-merce es un fake e-commerce diseñado y desarrollado por @HeraldHRLD (github), espero que lo disfrutes."
        />
      </Helmet>
      <HeadBand title={category != null ? `${category}` : 'Productos'} />
      <CardsContainer pagination={true} dark={false} />
    </div>
  );
};

export default Market;
