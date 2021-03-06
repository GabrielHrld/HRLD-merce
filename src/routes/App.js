import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Market from '../pages/Market';
import MarketSale from '../pages/MarketSale';
import ProductDetail from '../pages/ProductDetail';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import AdminProfile from '../pages/AdminProfile';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../utils/PrivateRoute';
import PrivateAdminRoute from '../utils/PrivateAdminRoute';
import AutoScrollToTop from '../components/AutoScrollToTop';
import '../styles/app.scss';
import axios from 'axios';
import { connect } from 'react-redux';

import { chargeProducts } from '../actions/index';
import { config } from '../utils/config';

const App = ({ chargeProducts, user }) => {
  useEffect(() => {
    axios.get(`${config.api_url}/products`).then((res) => {
      console.log('productos cargados');
      chargeProducts(res.data);
    });
  }, []);
  return (
    <Router>
      <AutoScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/products" component={Market} />
          <Route exact path="/sale" component={MarketSale} />
          <Route exact path="/checkout" component={Checkout} />
          <PrivateRoute
            exact
            path="/user/profile"
            component={Profile}
            user={user}
          />
          <PrivateAdminRoute
            exact
            path="/admin/profile"
            component={AdminProfile}
            user={user}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user,
  };
};

const mapDispatchToProps = {
  chargeProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
