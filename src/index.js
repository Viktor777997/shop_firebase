import React from 'react';

import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './Routes';

import createStore, { history } from './config/redux-store';

import './index.scss'

const store = createStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App history={history} store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./Routes', () => render());
}