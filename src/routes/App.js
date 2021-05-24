import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Market from '../pages/Market';
import ProductDetail from '../pages/ProductDetail';
import Profile from '../pages/Profile';
import '../styles/app.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/products" component={Market} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
