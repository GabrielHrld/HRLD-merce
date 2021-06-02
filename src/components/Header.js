import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleCartClick, handleSideMenuClick } from '../actions';
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import '../styles/components/Header.scss';
import Spinner from './Spinner';
import axios from 'axios';

const Header = ({
  user,
  products,
  sideMenu,
  cart,
  cartClick,
  handleCartClick,
  handleSideMenuClick,
}) => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);

  const switchSideMenuClick = () => {
    handleSideMenuClick(!sideMenu);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setQuery(e.target.value);
  // };

  //función para switchear el cart menu
  const switchCartClick = () => handleCartClick(!cartClick);

  //Buscador
  const handleSearch = useCallback(() => {
    setQuery(searchInputRef.current.value);
  }, []);
  const filteredProducts = queryResult.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    setLoading(true);
    const fetchAPI = () => {
      axios.get('http://localhost:3000/products').then((res) => {
        setQueryResult(res.data);
        setLoading(false);
      });
    };
    fetchAPI();
  }, [query]);

  //categories
  const categories = [];
  for (let i = 0; i < products.length; i++) {
    const category = products[i].category;
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  console.log(filteredProducts);

  return (
    <>
      <header className="Header">
        <nav className="Navbar">
          <div
            className={sideMenu ? 'menu-btn active' : 'menu-btn'}
            onClick={switchSideMenuClick}
          >
            <div className="menu-btn_burger"></div>
          </div>
          <div className="logoContainer">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="leftSection">
            <ul className="leftSection-links">
              <li>
                <Link to="/products">
                  <span>
                    Productos
                    <IoIosArrowDown />
                  </span>
                </Link>
                <ul className="dropdown-links">
                  {categories.map((category, index) => {
                    return (
                      <li className="dropdown-item " key={category + index}>
                        <Link to={`/products/categories/${category}`}>
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link to="/sale">SALE 🔥</Link>
              </li>
            </ul>
          </div>
          <div className="middleSection">
            <form
              action=""
              className="search-area"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                ref={searchInputRef}
                onChange={handleSearch}
                value={query}
                type="text"
                id="q"
                className="search-area_input"
                placeholder="Buscar"
              />
              <button className="search-area_button">
                <MdSearch className="search-icon" />
              </button>
            </form>
            <ul
              className={
                query == ''
                  ? 'searchList-container empty'
                  : 'searchList-container'
              }
            >
              {loading ? (
                <div className="spinnerContainer">
                  {' '}
                  <Spinner />
                </div>
              ) : query == '' ? null : (
                filteredProducts.map((product) => {
                  return (
                    <li className="searchList-item">
                      <a href={`/products/${product._id}`} className="link">
                        <div className="searchList-image_container">
                          <img
                            src={product != undefined ? product.image : ''}
                            alt={product.name}
                          />
                        </div>
                        <div className="searchList-title_container">
                          <h3 className="searchList-title">{product.name}</h3>
                        </div>
                      </a>
                    </li>
                  );
                })
              )}

              {/* <li className="searchList-item">Producto 2</li>
              <li className="searchList-item">Producto 3</li> */}
            </ul>
          </div>
          {user.name != null ? (
            <div className="rightSection">
              <ul className="rightSection-links">
                <div>
                  <li className="profile">
                    <Link to="/sign-in" className="underline_effect">
                      Perfil
                    </Link>
                    {user.role == 'admin' ? (
                      <ul className="profile-dropdown">
                        <li className="profile-dropdown_link">
                          <Link to="/admin/profile">Panel de control</Link>
                        </li>
                        <li className="profile-dropdown_link">
                          <Link to="/">Cerrar sesión</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="profile-dropdown">
                        <li className="profile-dropdown_link">
                          <Link to="/profile">Mis datos</Link>
                        </li>
                        <li className="profile-dropdown_link">
                          <Link to="/">Cerrar sesión</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </div>
                <div>
                  <li id="cart">
                    <Link
                      onClick={switchCartClick}
                      className="underline_effect"
                    >
                      <AiOutlineShoppingCart className="cart-icon " />
                      <span>{cart.length}</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          ) : (
            <div className="rightSection">
              <ul className="rightSection-links">
                <div>
                  <li>
                    <Link to="/sign-in" className="underline_effect">
                      Ingresar
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" className="underline_effect">
                      Registrarse
                    </Link>
                  </li>
                </div>
                <div>
                  <li id="cart">
                    <Link onClick={switchCartClick}>
                      <AiOutlineShoppingCart className="cart-icon" />
                      <span>{cart.length}</span>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          )}
        </nav>
        <div className={sideMenu ? 'mobile-menu active-mobile' : 'mobile-menu'}>
          <div>
            <ul className="mobile-menu_primary">
              <li>
                <Link to="">Inicio</Link>
              </li>
              <li>
                <Link to="/">Productos</Link>
              </li>
              <li>
                <Link to="">Sale 🔥</Link>
              </li>
            </ul>
            <ul className="mobile-menu_secondary">
              <li>
                <Link to="/sign-in">Ingresar</Link>
              </li>
              <li>
                <Link to="/sign-up">Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartClick: state.cartClick,
    sideMenu: state.sideMenu,
    cart: state.cart,
    products: state.products,
    user: state.user,
  };
};

const mapDispatchToProps = {
  handleCartClick,
  handleSideMenuClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
