import React from 'react'

import '../styles/components/HeadBand.scss'
const HeadBand = () => {
  return (
    <div className="headBand-wrapper">
      <div className="headBand-container">
        <div className="headBand-item">
          <span className="filter">Filtro</span>
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
              <input type="hidden" value="1" />
            </select>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HeadBand
