import React, { useState } from 'react'
import FiltersContainer from './FiltersContainer'

import '../styles/components/HeadBand.scss'
const HeadBand = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  console.log(click)
  return (
    <div className="headBand-wrapper">
      <div className="headBand-container">
        <div className="headBand-item">
          <span className="filter" onClick={handleClick}>Filtro</span>
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
      <FiltersContainer click={click}/>

    </div>
  )
}

export default HeadBand
