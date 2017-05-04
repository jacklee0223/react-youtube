import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import SearchBar from './components/search_bar'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyBWDm6PrY1szVMjkcxv2ruYC_flXh3inPA';

ReactDOM.render(
  <div class="container">
	  <Provider store={createStoreWithMiddleware(reducers)}>
	    <App />
	  </Provider>
    <SearchBar />
  </div>
  , document.querySelector('.container'));
