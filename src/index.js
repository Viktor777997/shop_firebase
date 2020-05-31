import React from 'react';

// import './assets/styles/style.scss';

import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

// import ErrorBoundary from './components/error-boundary';

import App from './Routes';

import createStore, { history } from './config/redux-store';

// import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
