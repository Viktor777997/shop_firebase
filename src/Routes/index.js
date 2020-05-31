import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import PricePage from './PricePage';

import { RouteWithMainLayout } from '../Layout';

const App = (props) => {
  return (
    <ReduxProvider store={props.store}>
      <ConnectedRouter history={props.history}>
        <Switch>
          <RouteWithMainLayout path="/" component={HomePage} exact />
          <RouteWithMainLayout path="/home" component={HomePage} exact />
          <RouteWithMainLayout path="/:price" component={PricePage} exact />
          <RouteWithMainLayout path="/contact" component={ContactPage} exact />
        </Switch>
      </ConnectedRouter>
    </ReduxProvider>
  );
};

export default App;
