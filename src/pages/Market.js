import React from 'react'
import CardsContainer from '../components/CardsContainer'
import HeadBand from '../components/HeadBand'

import '../styles/pages/Market.scss'
const Market = () => {
  return (
    <div className="market-wrapper">
      <HeadBand />
      <CardsContainer />
    </div>
  )
}

export default Market
