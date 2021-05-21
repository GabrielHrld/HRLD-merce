import React from 'react'
import {AiOutlinePhone, AiOutlineCopyright, AiFillGithub} from 'react-icons/ai'
import { GoLocation } from "react-icons/go";

import '../styles/components/Footer.scss'

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <span className="footer-section_title">Productos</span>
        <ul className="footer-products_container">
          <li><a href="/">PRODUCTO 1</a></li>
          <li><a href="/">PRODUCTO 2</a></li>
          <li><a href="/">PRODUCTO 3</a></li>
          <li><a href="/">PRODUCTO 4</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <span className="footer-section_title">Medios de pago</span>
        <ul className="footer-payship_container"> 
          <div className="footer_image"><img src="https://i.imgur.com/AXx1LrP.png" alt="Visa" /></div>
          <div className="footer_image"><img src="https://i.imgur.com/7ExrMxF.png" alt="Master Card" /></div>
          <div className="footer_image"><img src="https://i.imgur.com/fMl9mJM.png" alt="Pago Fácil" /></div>
        </ul>
      </div>
      <div className="footer-section">
        <span className="footer-section_title">Formas de envío</span>
        <ul className="footer-deliver_container">
          <div className="footer_image"><img src="https://i.imgur.com/QZyc9Nm.png" alt="" /></div>
        </ul>
      </div>
      <div className="footer-section">
        <span className="footer-section_title">Contactanos</span>
        <ul className="footer-contact_container">
          <li> <AiOutlinePhone className="footer-contact_icon"/>{' '}+54 1112345678</li>
          <li><AiOutlineCopyright className="footer-contact_icon"/>{' '}www.dev-gabriel.tech</li>
          <li><GoLocation className="footer-contact_icon"/>{' '}Buenos Aires, Argentina.</li>
        </ul>
      </div>
      <div className="footer-section">
        <span className="footer-section_title">Redes sociales</span>
        <ul className="footer-contact_container">
          <li><AiFillGithub className="footer-contact_icon"/>{' '}@HeraldHRLD </li>
        </ul>
      </div>
      <div className="footer-section">
        <span className="footer-section_title">Aviso importante</span>
        <ul>
          <li>Esto es un fake e-commerce. Disfrutalo!</li>
        </ul>
      </div>
    </div>
  </div>
  )

export default Footer
