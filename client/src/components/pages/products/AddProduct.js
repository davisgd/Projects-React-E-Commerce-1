import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const AddProduct = (props) =>
  <form>
    Name: <input type='text'
      onChange={props.onNameChanged} />
    Category: <input type='text'
      onChange={ props.onCategoryChanged } />
    Image: <input type='text'
      onChange={ props.onImageChanged } />
    Price: <input type='number'
      onChange={ props.onPriceChanged } />
  </form>

AddProduct.propTypes = propTypes

export default AddProduct
