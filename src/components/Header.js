import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {handleCartClick, handleSideMenuClick} from '../actions'
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import '../styles/components/Header.scss';

const Header = ({products, sideMenu, cart, cartClick, handleCartClick, handleSideMenuClick}) => {

  const data = localStorage.getItem('cart')
  console.log(JSON.parse(data))
  const switchSideMenuClick = () => {
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
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="leftSection">
            
            <ul className="leftSection-links">
              <li>
                <Link to="/">
                  <span>
                    Productos
                    <IoIosArrowDown />
                  </span>
                  
                </Link>
                <ul className="dropdown-links">
                    {
                      categories.map((category, index)=><li className="dropdown-item " key={category+index}><Link to="/">{category}</Link></li>)
                    }
                </ul>
              </li>
              <li ><Link to="/" >SALE 🔥</Link></li>
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
                <li><Link to="/">Ingresar</Link></li>
                <li><Link to="/">Registrarse</Link></li>
              </div>
              <div>
                <li id="cart"><Link onClick={switchCartClick}>
                  <AiOutlineShoppingCart className="cart-icon"/>
                  <span>{cart.length}</span>
                </Link></li>
              </div>
            </ul>
          </div>
        </nav>
        <div className={sideMenu ? "mobile-menu active-mobile" : "mobile-menu"}>
          <div>
            <ul className="mobile-menu_primary">
              <li><Link to="">Inicio</Link></li>
              <li ><Link to="/">
                  Productos 
              </Link>
              </li>
              <li><Link to="">Sale 🔥</Link></li>
            </ul>
            <ul className="mobile-menu_secondary">
              <li><Link to="">Ingresar</Link></li>
              <li><Link to="">Registrarse</Link></li>
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
    cart: state.cart,
    products: state.products
  }
}

const mapDispatchToProps = {
  handleCartClick,
  handleSideMenuClick
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
