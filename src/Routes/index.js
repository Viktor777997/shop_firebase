import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import PricePage from './PricePage';
import LoginPage from './loginPage';
import ItemCreatePage from './itemCreatePage'
import ItemChangePage from './itemChangePage'
import CategoriesCreatePage from './categoriesCreatePage';
import CategoriesChangePage from './categoriesChangePage';
import ItemInfoPage from './itemInfoPage';
import AdminPage from './adminPage';

import { RouteWithMainLayout } from '../Layout';

const App = (props) => {
  return (
    <ReduxProvider store={props.store}>
      <ConnectedRouter history={props.history}>
        <Switch>
          <RouteWithMainLayout path="/" component={HomePage} exact />
          <RouteWithMainLayout path="/home" component={HomePage} exact />
          <RouteWithMainLayout path="/price" component={PricePage} exact />
          <RouteWithMainLayout path="/contact" component={ContactPage} exact />
          <RouteWithMainLayout path="/card/:id" component={ItemInfoPage} exact />
          <RouteWithMainLayout path="/admin" component={AdminPage} exact />
          <RouteWithMainLayout path="/admin/login" component={LoginPage} exact />
          <RouteWithMainLayout path="/admin/itemCreate" component={ItemCreatePage} exact />
          <RouteWithMainLayout path="/admin/itemChange" component={ItemChangePage} exact />
          <RouteWithMainLayout path="/admin/categoriesCreate" component={CategoriesCreatePage} exact />
          <RouteWithMainLayout path="/admin/categoriesChange" component={CategoriesChangePage} exact />
        </Switch>
      </ConnectedRouter>
    </ReduxProvider>
  );
};

export default App;
