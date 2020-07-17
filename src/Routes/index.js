import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithMainLayout } from '../Layout';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import PricePage from './PricePage';
import LoginPage from './loginPage';
import ItemCreatePage from './itemCreatePage'
import ItemEditPage from './itemEditPage';
import CategoriesCreatePage from './categoriesCreatePage';
import AllCategoriesPage from './allCategoriesPage';
import ItemInfoPage from './itemInfoPage';
import AdminPage from './adminPage';
import AllItemsPage from './allItemsPage';
import CategoryEditPage from './categoryEditPage';
import CtdSerchedItems from './ctdSerchedItems';
import ErrorPage from './errorPage';
import SearchedItems from './searchedItems/searchedItems';


const App = (props) => {
  return (
    <ReduxProvider store={props.store}>
      <Router history={props.history}>
        <Switch>
          <RouteWithMainLayout path="/" component={HomePage} exact />
          <RouteWithMainLayout path="/home" component={HomePage} exact />
          <RouteWithMainLayout path="/price" component={PricePage} exact />
          <RouteWithMainLayout path="/contact" component={ContactPage} exact />
          <RouteWithMainLayout path="/card/:id" component={ItemInfoPage} exact />
          <RouteWithMainLayout path="/ctd/:id" component={CtdSerchedItems} exact />
          <RouteWithMainLayout path="/search_query=:query" component={SearchedItems} exact />
          <RouteWithMainLayout path="/admin" component={AdminPage} exact />
          <RouteWithMainLayout path="/admin/login" component={LoginPage} exact />
          <RouteWithMainLayout path="/admin/allItems" component={AllItemsPage} exact />
          <RouteWithMainLayout path="/admin/itemCreate" component={ItemCreatePage} exact />
          <RouteWithMainLayout path="/admin/itemEdit/:id" component={ItemEditPage} exact />
          <RouteWithMainLayout path="/admin/categoryEdit/:id" component={CategoryEditPage} exact />
          <RouteWithMainLayout path="/admin/categoriesCreate" component={CategoriesCreatePage} exact />
          <RouteWithMainLayout path="/admin/allcategories" component={AllCategoriesPage} exact />
          <RouteWithMainLayout component={ErrorPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
};

export default App;
