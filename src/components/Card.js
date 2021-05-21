import React from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import '../styles/components/Card.scss'
import MonthlyFees from './MonthlyFees';
const Card = ({product}) => {
  return (
    <div>
      <ul className="card-container">
        <li>
          <div className="card-image_container">
            <Link to="/products">
              <figure>
                <img src={product.images[0]} alt={product.title} />
              </figure>
            </Link>
          </div>
          <div className="card-title">
            <Link to="/products">
              <span>{product.title}</span>
            </Link>
          </div>
          <div className="card-price">
            <NumberFormat
              value={product.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </div>
          <MonthlyFees fees={6} price={product.price}/>
        </li>
      </ul>
    </div>
  )
};

export default Card;
