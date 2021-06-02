import React from 'react';
import CardsContainer from '../components/CardsContainer';
import HeadBand from '../components/HeadBand';
import { useParams, useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

import '../styles/pages/Market.scss';

const Market = () => {
  const category = useQuery().get('category');

  return (
    <div className="market-wrapper">
      <HeadBand title={category != null ? `${category}` : 'Productos'} />
      <CardsContainer pagination={true} dark={false} />
    </div>
  );
};

export default Market;
