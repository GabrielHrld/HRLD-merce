import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import '../styles/app.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
