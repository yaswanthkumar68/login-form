import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import './index.css'

const store = configureStore()

// console.log(store.getState())

store.subscribe(() => {
  console.log('state get updated', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


