import React from 'react';
import NumberFormat from 'react-number-format';

import '../styles/components/Card.scss'
const Card = ({product}) => {
  return (
    <div>
      <ul className="card-container">
        <li>
          <div className="card-image_container">
            <a href="/">
              <figure>
                <img src={product.images[0]} alt={product.title} />
              </figure>
            </a>
          </div>
          <div className="card-title">
            <a href="/">
              <span>{product.title}</span>
            </a>
          </div>
          <div className="card-price">
            <NumberFormat
              value={product.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </div>
          <div className="card-cuotes">
            <div>
              <strong>6</strong> cuotas sin interés de{' '}
              <strong>
                <NumberFormat
                  value={product.price / 6}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                />
              </strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Card;
