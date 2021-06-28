import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleCartClick, handleSideMenuClick } from '../actions';
import { MdSearch } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import '../styles/components/Header.scss';
import SpinnerDark from './SpinnerDark';
import axios from 'axios';
import { config } from '../utils/config';

const Header = ({
  user,
  products,
  sideMenu,
  cart,
  cartClick,
  handleCartClick,
  handleSideMenuClick,
}) => {
  const path = useLocation().pathname;
  if (path === '/sign-up') return null;
  if (path === '/sign-in') return null;

  const history = useHistory();
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);
  const handleLogOut = () => {
    localStorage.removeItem('user');
    history.push('/');
    window.location.reload();
  };

  const switchSideMenuClick = () => {
    handleSideMenuClick(!sideMenu);
  };

  //función para switchear el cart menu
  const switchCartClick = (e) => {
    e.preventDefault();
    handleCartClick(!cartClick);
  };

  //Buscador
  const handleSearch = useCallback(() => {
    setQuery(searchInputRef.current.value);
  }, []);
  const filteredProducts = queryResult.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    if (query == '') return null;
    setLoading(true);
    const fetchAPI = () => {
      axios.get(`${config.api_url}/products`).then((res) => {
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
                        <Link to={`/products?&category=${category}`}>
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
                  <SpinnerDark />
                </div>
              ) : query == '' ? null : ( //BUSCADOR
                filteredProducts.map((product, index) => {
                  return (
                    <li className="searchList-item" key={product + index}>
                      <Link to={`/products/${product._id}`} className="link">
                        <div className="searchList-image_container">
                          <img
                            src={product != undefined ? product.image : ''}
                            alt={product.name}
                          />
                        </div>
                        <div className="searchList-title_container">
                          <h3 className="searchList-title">{product.name}</h3>
                        </div>
                      </Link>
                    </li>
                  );
                })
              )}
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
                        <li
                          className="profile-dropdown_link"
                          onClick={handleLogOut}
                        >
                          <Link to="/">Cerrar sesión</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="profile-dropdown">
                        <li className="profile-dropdown_link">
                          <Link to="/user/profile">Mis datos</Link>
                        </li>
                        <li
                          className="profile-dropdown_link"
                          onClick={handleLogOut}
                        >
                          <Link to="/">Cerrar sesión</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </div>
                <div>
                  <li id="cart">
                    <Link
                      to="/"
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
                    <Link to="/" onClick={switchCartClick}>
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
                <Link to="/products">Productos</Link>
              </li>
              <li>
                <Link to="/sale">Sale 🔥</Link>
              </li>
            </ul>
            {user.name != null ? (
              user.role == 'admin' ? (
                <ul className="mobile-menu_secondary">
                  <li>
                    <Link to="/admin/profile">Panel de control</Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <Link to="/">Cerrar sesión</Link>
                  </li>
                </ul>
              ) : (
                <ul className="mobile-menu_secondary">
                  <li>
                    <Link to="/user/profile">Mis datos</Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <Link to="/">Cerrar sesión</Link>
                  </li>
                </ul>
              )
            ) : (
              <ul className="mobile-menu_secondary">
                <li>
                  <Link to="/sign-in" onClick={switchSideMenuClick}>
                    Ingresar
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up" onClick={switchSideMenuClick}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            )}
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
