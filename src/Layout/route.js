import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './layout';

const RouteWithMainLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

export default RouteWithMainLayout;
