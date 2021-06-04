import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './routes/App';

import Logo from '../assets/favicon.png';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

//Initial State
import { initialState } from './utils/InitialState';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <link rel="icon" type="image/png" href={Logo} />
    </Helmet>
    <App />
  </Provider>,
  document.getElementById('app')
);
