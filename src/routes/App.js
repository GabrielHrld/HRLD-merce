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
import AdminProfile from '../pages/AdminProfile';
import AdminProfileCategories from '../pages/AdminProfileCategories';
import PrivateRoute from '../utils/PrivateRoute'
import PrivateAdminRoute from '../utils/PrivateAdminRoute'
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
        <Route exact path="/admin/profile" component={AdminProfile} />
        <Route exact path="/admin/profile/categories/:category" component={AdminProfileCategories} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
