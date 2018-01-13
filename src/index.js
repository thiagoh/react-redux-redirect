import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { App } from './components/app';
import reducers from './reducers';
import { createMiddlewares } from './middleware';

const redirector = redirectTo => {
  // location.href = redirectTo;
  console.log('redirected to ', redirectTo);
};
const createStoreWithMiddleware = applyMiddleware(...createMiddlewares(redirector))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
