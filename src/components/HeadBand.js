import React, { useState } from 'react'
import {connect} from 'react-redux'
import FiltersContainer from './FiltersContainer'
import {handleFilterClick} from '../actions'

import '../styles/components/HeadBand.scss'
const HeadBand = ({filterClick, handleFilterClick}) => {
  
  const activeFilterClick = () =>{
    handleFilterClick(!filterClick);
  }

  return (
    <div className="headBand-wrapper">
      <div className="headBand-container">
        <div className="headBand-item">
          <span className="filter" onClick={activeFilterClick}>Filtro</span>
        </div>
        <div className="headBand-item">
          <h1>Productos</h1>
        </div>
        <div className="headBand-item">
          <form action="" className="orderBy">
            <select name="" id="">
              <option value="">Ordenar por los últimos</option>
              <option value="">Ordenar por precio: bajo a alto</option>
              <option value="">Ordenar por precio: alto a bajo</option>
            </select>
              <input type="hidden" value="1" />
          </form>
        </div>
      </div>
      <FiltersContainer click={filterClick}/>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    filterClick: state.filterClick
  }
}

const mapDispatchToProps = {
  handleFilterClick
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadBand);
