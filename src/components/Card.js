import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import ModalProduct from './ModalProduct'
import {chargeTheModal} from '../actions'
import '../styles/components/Card.scss';
import MonthlyFees from './MonthlyFees';

const Card = ({ product, admin = false, chargeTheModal }) => {

  const handleModal = () => chargeTheModal(product)

  return (
    <div>
      <ul className="card-container" onClick={handleModal}>
        <li>
          <div className="card-image_container">
            <Link to={admin ? './profile' : `/products/${product.id}`}>
              <figure>
                <img src={product.images[0]} alt={product.name} />
              </figure>
            </Link>
          </div>
          <div className="card-title">
            <Link to={admin ? './profile' : `/products/${product.id}`}>
              <span>{product.name}</span>
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
          {admin ? (
            <div className="icon-container" onClick={handleModal}>
              <BsBoxArrowUpRight className="icon" />
            </div>
          ) : (
            <MonthlyFees fees={6} price={product.price} />
          )}
        </li>
      </ul>
      <ModalProduct />
    </div>
  );
};

const mapDispatchToProps = {
  chargeTheModal
}

export default connect(null, mapDispatchToProps)(Card);
