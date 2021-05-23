import React, { useState } from 'react';
import '../styles/components/Header.scss';
import {connect} from 'react-redux';
import {handleCartClick, handleSideMenuClick} from '../actions'
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import {productsMock} from '../utils/productsMock';
import Cart from './Cart'

const Header = ({sideMenu, cart, cartClick, handleCartClick, handleSideMenuClick}) => {
  const [click, setClick] = useState(false);
  
  const [products, setProducts] = useState(productsMock);

  // const handleClick = () => setClick(!click);

  const switchSideMenuClick = () => {
    // setClick(!click);
    handleSideMenuClick(!sideMenu);
  }

  //función para switchear el cart menu
  const switchCartClick =()=> handleCartClick(!cartClick)
  
  //categories
  const categories = []
  for (let i = 0; i < products.length; i++) {
    const category = products[i].category[0];
    if(!categories.includes(category)){
      categories.push(category)
    }
  }

  return (
    <>
      <header className="Header">
        <nav className="Navbar">
          <div className={sideMenu? 'menu-btn active' : 'menu-btn'} onClick={switchSideMenuClick}>
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
                    {
                      categories.map((category, index)=><li className="dropdown-item " key={category+index}><a href="/">{category}</a></li>)
                    }
                </ul>
              </li>
              <li ><a href="/" >SALE 🔥</a></li>
            </ul>
          </div>
          <div className="middleSection">
            <form action="" className="search-area">
              <input type="text" id="q" className="search-area_input" placeholder="Buscar"/>
              <button className="search-area_button"><MdSearch className="search-icon"/></button>
            </form>
          </div>
          <div className="rightSection">
            <ul className="rightSection-links">
              <div>
                <li><a href="/">Ingresar</a></li>
                <li><a href="/">Registrarse</a></li>
              </div>
              <div>
                <li id="cart"><a onClick={switchCartClick}>
                  <AiOutlineShoppingCart className="cart-icon"/>
                  <span>{cart.length}</span>
                </a></li>
              </div>
            </ul>
          </div>
        </nav>
        <div className={sideMenu ? "mobile-menu active-mobile" : "mobile-menu"}>
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
        {/* <Cart click={cartClick}/> */}
      </header>
    </>
  );
};

const mapStateToProps = state =>{
  return{
    cartClick: state.cartClick,
    sideMenu: state.sideMenu,
    cart: state.cart
  }
}

const mapDispatchToProps = {
  handleCartClick,
  handleSideMenuClick
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
