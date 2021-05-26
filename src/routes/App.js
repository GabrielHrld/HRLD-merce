import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Market from '../pages/Market';
import MarketCategories from '../pages/MarketCategories';
import MarketSale from '../pages/MarketSale';
import ProductDetail from '../pages/ProductDetail';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile';
import ProfileOrders from '../pages/ProfileOrders';
import '../styles/app.scss';

const App = () => (
  <Router>
    <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/products/categories/:category" component={MarketCategories} />
        <Route exact path="/products" component={Market} />
        <Route exact path="/sale" component={MarketSale} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/my-orders" component={ProfileOrders} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
