import React from 'react'
import {connect} from 'react-redux'

import Header from './Header'
import Footer from './Footer'

import '../styles/app.scss'
import Cart from './Cart'

const Layout = ({children, overlay, cartClick}) =>(
  <div className="App">
    <Header />
    <Cart click={cartClick}/>
    <div className={overlay ? 'overlay' : ''}></div>
    {children}
    <Footer />
  </div>
);

const mapStateToProps = (state) => {
  return {
    overlay: state.overlay,
    cartClick: state.cartClick
  }
}

export default connect(mapStateToProps, null)(Layout)