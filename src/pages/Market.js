import React from 'react'
import CardsContainer from '../components/CardsContainer'
import FiltersContainer from '../components/FiltersContainer'
import HeadBand from '../components/HeadBand'

import '../styles/pages/Market.scss'
const Market = () => {
  return (
    <div className="market-wrapper">
      <HeadBand />
      <CardsContainer pagination={true}/>
    </div>
  )
}

export default Market
