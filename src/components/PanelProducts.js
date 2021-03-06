import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import {
  orderByPrice,
  handleFilterClick,
  handleModal,
  handleModalAddProduct,
} from '../actions';
import { minToMaxType, maxToMinType, restoreType } from '../utils/actionTypes';
import FiltersContainer from './FiltersContainer';
import CardsContainer from './CardsContainer';

import '../styles/components/PanelProducts.scss';
import ModalAddProduct from './ModalAddProduct';

const PanelProducts = ({
  orderByPrice,
  filteredProducts,
  filterClick,
  handleFilterClick,
  handleModalAddProduct,
  dark,
}) => {
  const history = useHistory();
  const path = useLocation().pathname.toLowerCase();
  const restore = () => orderByPrice(restoreType);
  const minToMaxPrice = () => orderByPrice(minToMaxType);
  const maxToMinPrice = () => orderByPrice(maxToMinType);
  const handleOrderByPrice = (e) => {
    if (e.target.value == '0') history.push('/admin/profile?');
    if (e.target.value == '1') history.push('/admin/profile?minToMax=true');
    if (e.target.value == '2') history.push('/admin/profile?maxToMin=true');
  };

  const activeModalAddProduct = () => handleModalAddProduct();
  const activeFilterClick = () => handleFilterClick(!filterClick);

  return (
    <div className="panelProducts-wrapper">
      <div className="panelProducts-container">
        <header>
          <h2>Panel de control de productos</h2>
          <form action="" className="orderBy">
            <div>
              <h3>filtrar por precio</h3>
              <h3 onClick={activeModalAddProduct}>Añadir producto</h3>
              <h3 onClick={activeFilterClick}>filtros</h3>
            </div>
            <select name="" id="" onChange={handleOrderByPrice}>
              <option value="0">Reestablecer</option>
              <option value="1">Ordenar por precio: bajo a alto</option>
              <option value="2">Ordenar por precio: alto a bajo</option>
            </select>
            <input type="hidden" value="1" />
          </form>
        </header>
        <CardsContainer
          pagination={true}
          mini={true}
          className="container-cards_wrapper"
          dark={dark}
          admin={true}
          filteredProducts={filteredProducts}
        />
        <FiltersContainer admin={true} />
        <ModalAddProduct />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterClick: state.filterClick,
  };
};

const mapDispatchToProps = {
  orderByPrice,
  handleFilterClick,
  handleModal,
  handleModalAddProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelProducts);
