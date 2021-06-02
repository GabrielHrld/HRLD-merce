import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import FiltersContainer from './FiltersContainer';
import { handleFilterClick, orderByPrice } from '../actions';
import { minToMaxType, maxToMinType, restoreType } from '../utils/actionTypes';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

import '../styles/components/HeadBand.scss';
const HeadBand = ({ title, filterClick, handleFilterClick, orderByPrice }) => {
  const category = useQuery().get('category');
  const history = useHistory();
  const path = useLocation().pathname.toLowerCase();
  const handleOrderByPrice = (e) => {
    if (e.target.value == '0') history.push(`${path}?`);
    if (e.target.value == '1') history.push(`${path}?minToMax=true`);
    if (e.target.value == '2') history.push(`${path}?maxToMin=true`);
  };

  const activeFilterClick = () => {
    handleFilterClick(!filterClick);
  };

  return (
    <div className="headBand-wrapper">
      <div className="headBand-container">
        <div className="headBand-item">
          <span className="filter" onClick={activeFilterClick}>
            Filtro
          </span>
        </div>
        <div className="headBand-item">
          <h1>{title == 'Sale' ? 'Sale 🔥' : title}</h1>
        </div>
        <div className="headBand-item">
          <form action="" className="orderBy">
            <select name="orderByPrice" id="" onChange={handleOrderByPrice}>
              <option value="0">Reestablecer</option>
              <option value="1">Ordenar por precio: bajo a alto</option>
              <option value="2">Ordenar por precio: alto a bajo</option>
            </select>
            <input type="hidden" value="1" />
          </form>
        </div>
      </div>
      <FiltersContainer click={filterClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterClick: state.filterClick,
  };
};

const mapDispatchToProps = {
  handleFilterClick,
  orderByPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadBand);
