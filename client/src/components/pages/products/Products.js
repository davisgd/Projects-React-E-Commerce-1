import React from 'react'
import { Route } from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Products = (props) =>
  <div>
    <h3>Products</h3>

    <Route 
      path='/products' exact 
      render={ () => <ProductList domainData={ props.domainData } /> } 
    />
    <Route
      path='/products/add' exact 
      render={ () => <AddProductContainer domainData={ props.domainData } /> } 
    />
    <Route 
      path='/products/edit/:productId' 
      render={ (routeProps) => 
        <EditProductContainer 
          domainData={ props.domainData } 
          history={ routeProps.history } 
          match={ routeProps.match } /> }
    />
  </div>

Products.propTypes = propTypes

export default Products
