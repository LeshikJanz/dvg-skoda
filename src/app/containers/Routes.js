import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import * as routes from 'constants/routes';
import LayoutContainer from 'containers/LayoutContainer/index';
import LoginContainer from 'containers/LoginContainer/index';
import HomeContainer from 'containers/HomeContainer/index';
import ProductsContainer from 'containers/ProductsContainer/index';
import ProductViewContainer from 'containers/ProductViewContainer/index';
import ProductFormContainer from 'containers/ProductFormContainer/index';
import CheckoutContainer from 'containers/CheckoutContainer/index';
import NotFoundContainer from 'containers/NotFoundContainer/index';
import PagesContainer from 'containers/PagesContainer/index';
import PageViewContainer from 'containers/PageViewContainer/index';
import PageFormContainer from 'containers/PageFormContainer/index';
import ConfigContainer from 'containers/ConfigContainer/index';
import ConfigNavigationContainer from 'containers/ConfigNavigationContainer/index';
import ConfigPageCategoriesContainer from 'containers/ConfigPageCategoriesContainer/index';
import ConfigProductCategoriesContainer from 'containers/ConfigProductCategoriesContainer/index';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path={routes.LOGIN} component={LoginContainer} />
    <Route path={routes.ROOT} component={LayoutContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path={routes.PRODUCTS}>
        <IndexRoute component={ProductsContainer} />
        <Route path={routes.PRODUCTS_CREATE} component={ProductFormContainer} />
        <Route path={routes.PRODUCTS_SHOW} component={ProductViewContainer} />
      </Route>
      <Route path={routes.PAGES}>
        <IndexRoute component={PagesContainer} />
        <Route path={routes.PAGES_CREATE} component={PageFormContainer} />
        <Route path={routes.PAGES_SHOW} component={PageViewContainer} />
      </Route>
      <Route path={routes.CONFIG}>
        <IndexRoute component={ConfigContainer} />
        <Route path={routes.CONFIG_NAVIGATION} component={ConfigNavigationContainer} />
        <Route path={routes.CONFIG_PRODUCT_CATEGORIES} component={ConfigProductCategoriesContainer} />
        <Route path={routes.CONFIG_PAGE_CATEGORIES} component={ConfigPageCategoriesContainer} />
      </Route>
      <Route path={routes.CHECKOUT} component={CheckoutContainer} />
      <Route path={routes.NOTFOUND} component={NotFoundContainer} />
      <Redirect from="*" to={routes.NOTFOUND} />
    </Route>
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;