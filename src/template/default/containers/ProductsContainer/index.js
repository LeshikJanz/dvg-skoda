import React from 'react';
import 'containers/ProductsContainer/_ProductsContainer.scss';
import 'template/containers/ProductsContainer/_ProductsContainer.scss';

import { init, propTypes } from 'containers/ProductsContainer/index';
import ProductComponent from 'components/Products/ProductComponent';
import ProductFiltersComponent from 'components/ProductFilters/ProductFiltersComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import isEmpty from 'lodash/isEmpty';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    const { categoryId, subCategoryId } = this.props.location.query;
    this.props.getDistinctProductOptionsRequest();
    this.props.getProductsRequest({ categoryId, subCategoryId });
  }

  componentWillUnmount() {
    this.props.getDistinctProductOptionsIdle();
    this.props.getProductsIdle();
  }

  render() {
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">Products</div>
        {!isEmpty(this.props.distinctProductOptions.data) ?
          <div className="ProductsContainerBlock-filters">
            <ProductFiltersComponent
              distinctProductOptions={this.props.distinctProductOptions}
              getFilteredProductsRequest={this.props.getFilteredProductsRequest}
            />
          </div>
        : null}

        <div className="ProductsContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductsContainer-products">
                {this.props.products.data && this.props.products.data.map((product) =>
                  <div key={product.id}><ProductComponent product={product} height={this.props.maxHeight} /></div>
                )}
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

ProductsContainer.propTypes = propTypes;
export default init(ProductsContainer);
