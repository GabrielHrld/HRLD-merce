import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers';

const initialState = {
  "filterClick": false,
  "cartClick": false 
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app'));
