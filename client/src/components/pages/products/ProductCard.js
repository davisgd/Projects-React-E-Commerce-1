import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

const ProductCard = (props) =>
  <div>
    <h1>{props.product.name}</h1>
    <h3>{props.product.price}</h3>
    <div className='button-container'>
      <button type='button' onClick={props.onAddToCart} >Add Product to Cart</button>
      {
        props.isAdmin
          ? (
            <div>
              <button type='button' onClick={props.onEdit}>Edit Product</button>
              <button type='button' onClick={props.onDelete}>Delete</button>
            </div>
          )
          : null
      }
    </div>
  </div>

ProductCard.propTypes = propTypes

export /*the friggin'*/ default ProductCard
