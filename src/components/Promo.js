import React from 'react';
import '../styles/components/Promo.scss';

const Promo = ({ text }) => {
  return (
    <div className="promo">
      <div className="promo-container">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Promo;
