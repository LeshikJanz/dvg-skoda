import React from 'react';
import _ from 'lodash';

import productsMock from 'mocks/products';
import ProductComponent from 'components/product/ProductComponent';

const ProductsContainer = () =>
  <div className="ProductsContainerBlock">
    {_.map(productsMock, (product, key) =>
      <div key={key}><ProductComponent product={product} /></div>
    )}
  </div>;

ProductsContainer.propTypes = {
};

export default ProductsContainer;