import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/Products/_ProductsComponent.scss';
import ProductItemComponent from 'components/Products/ProductItemComponent';

const ProductsComponent = ({ products, maxHeight }) =>
  <div styleName="block">
    <div styleName="component">
      {products.data && products.data.map((product) =>
        <div styleName="component-item" key={product.id}><ProductItemComponent product={product} height={maxHeight} /></div>
      )}
    </div>
  </div>;

ProductsComponent.propTypes = {
  products: PropTypes.shape({
  }).isRequired,
  maxHeight: PropTypes.number.isRequired,
};

export default css(ProductsComponent, styles);
