import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'containers/LayoutContainer/_LayoutContainer.scss';

import layoutHoc from 'containers/LayoutContainer/layoutHoc';
import productsProviderHoc from 'containers/ProductsContainer/productsProviderHoc';
import HeaderComponent from 'components/Header/HeaderComponent';
import FooterComponent from 'components/Footer/FooterComponent';
import TopnavbarComponent from 'components/Topnavbar/TopnavbarComponent';
import CartDropdownComponent from 'components/CartDropdown/CartDropdownComponent';
import CartDropdownItemComponent from 'components/CartDropdownItem/CartDropdownItemComponent';
import HeaderActionsComponent from 'components/HeaderActions/HeaderActionsComponent';
import SearchComponent from 'components/Search/SearchComponent';
import flow from 'lodash/flow';

const LayoutContainer = ({ ui, toggleCartDropdown, getSearchedProductsRequest, children, cartPosition, location }) =>
  <div styleName="block">
    <div styleName="component">
      <div styleName="component-header">
        <HeaderComponent>
          <HeaderActionsComponent toggleCartDropdown={toggleCartDropdown} />
          <SearchComponent
            getSearchedProductsRequest={getSearchedProductsRequest}
          />
        </HeaderComponent>
        <CartDropdownComponent cartPosition={cartPosition} isVisible={ui.cartDropdownIsVisible}>
          <CartDropdownItemComponent />
        </CartDropdownComponent>
      </div>
      <div styleName="component-topnavbar">
        <TopnavbarComponent pathname={location.pathname} />
      </div>
      <div styleName="component-block">
        {children}
      </div>
      <div styleName="component-footer">
        <FooterComponent />
      </div>
    </div>
  </div>;

export const propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  cartPosition: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  ui: PropTypes.shape({}).isRequired,
  toggleCartDropdown: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired,
  getSearchedProductsRequest: PropTypes.func.isRequired,
};

LayoutContainer.propTypes = propTypes;
export const init = flow([layoutHoc, productsProviderHoc]);
export default init(css(LayoutContainer, styles));
