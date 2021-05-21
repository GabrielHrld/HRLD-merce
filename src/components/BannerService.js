import React from 'react'
import {GrDeliver, GrLock} from 'react-icons/gr'
import {BiLock} from 'react-icons/bi'
import {BsCreditCard} from 'react-icons/bs'

import '../styles/components/BannerServices.scss'
const BannerService = () => {
  return (
    <div className="banner-services">
      <div className="banner-container">
        <div className="banner-items">
          <div>
            <GrDeliver className="banner-icon"/>
          </div>
          <div>
            <span>Envios gratis</span>
            <span>Para compras a partir de $5000</span>
          </div>
        </div>
        <div className="banner-items">
          <div>
            <BsCreditCard className="banner-icon" />
          </div>
          <div>
            <span>pagá como quieras</span>
            <span>Tarjetas de crédito o efectivo</span>
          </div>
        </div>
        <div className="banner-items">
          <div>
            <BiLock className="banner-icon"/>
          </div>
          <div>
            <span>comprá con seguridad</span>
            <span>Tus datos siempre protegidos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerService
