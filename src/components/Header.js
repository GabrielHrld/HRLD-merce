import React, { useState } from 'react';
import '../styles/components/Header.scss';
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/logo.png';

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => setDropdown(!dropdown);
  const handleClick = () => setClick(!click);
  
  return (
    <>
      <header className="Header">
        <nav className="Navbar">
          <div className={click? 'menu-btn active' : 'menu-btn'} onClick={handleClick}>
            <div className="menu-btn_burger">
            </div>
          </div>
          <div className="logoContainer">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="leftSection">
            
            <ul className="leftSection-links">
              <li>
                <a href="/">
                  <span>
                    Productos
                    <IoIosArrowDown />
                  </span>
                  
                </a>
                <ul className="dropdown-links">
                    <li className="dropdown-item"><a href="/">1</a></li>
                    <li className="dropdown-item"><a href="/">2</a></li>
                    <li className="dropdown-item"><a href="/">3/</a></li>
                    <li className="dropdown-item"><a href="/">4</a></li>
                </ul>
              </li>
              <li ><a href="/">SALE 🔥</a></li>
            </ul>
          </div>
          <div className="middleSection">
            <form action="" className="search-area">
              <input type="text" id="q" className="search-area_input" placeholder="Buscar"/>
              <button className="search-area_button"><MdSearch className="search-icon"/></button>
            </form>
          </div>
          <div className="rightSection">
            <ul ul className="rightSection-links">
              <div>
                <li><a href="/">Ingresar</a></li>
                <li><a href="/">Registrarse</a></li>
              </div>
              <div>
                <li id="cart"><a href="/">
                  <AiOutlineShoppingCart className="cart-icon"/>
                  <span>1</span>
                </a></li>
              </div>
            </ul>
          </div>
        </nav>
        <div className={click ? "mobile-menu active-mobile" : "mobile-menu"}>
          <div>
            <ul className="mobile-menu_primary">
              <li><a href="">Inicio</a></li>
              <li ><a href="/">
                  Productos 
              </a>
              </li>
              <li><a href="">Sale 🔥</a></li>
            </ul>
            <ul className="mobile-menu_secondary">
              <li><a href="">Ingresar</a></li>
              <li><a href="">Registrarse</a></li>
            </ul>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
