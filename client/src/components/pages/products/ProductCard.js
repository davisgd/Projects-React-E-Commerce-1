import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import { Link } from 'react-router-dom'

const propTypes = {
  product: AppPropTypes.product
}

const ProductCard = (props) =>
  <div>
    <h1>{ props.product.name }</h1>
    <h3>{ props.product.price }</h3>
    <Link to={ `/products/edit/${ props.product._id } ` }>Edit The Friggin' Product</Link>
    <button type='button' onClick={ () => props.onDelete(props.product) }>Delete</button>
  </div>

ProductCard.propTypes = propTypes

export /*the friggin'*/ default ProductCard
