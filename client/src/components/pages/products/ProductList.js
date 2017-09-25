import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const ProductList = (props) =>
  <div>
    <h3>Product List</h3>

    <Link to='/products/add'>Add a New Product</Link>

    { props.domainData.products.map(product =>
      <ProductCard
        key={product._id}
        product={product}
        onDelete={() => props.domainData.deleteProduct(product._id)}
        onEdit={() => props.history.push(`/products/edit/${product._id}`)}
        onAddToCart={() => props.domainData.addToCart(product._id)}
        isAdmin={props.domainData.isAdmin}
        loggedIn={props.domainData.loggedIn}
      />) }
  </div>

ProductList.propTypes = propTypes

export default withRouter(ProductList)
