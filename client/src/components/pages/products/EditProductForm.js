import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func,
  onPriceChanged: PropTypes.func,
  onSubmit: PropTypes.func
}

const EditProductForm = (props) =>
  <form onSubmit={(event) => props.onSubmit(event)}>
    Name: <input type='text' onChange={props.onNameChanged} />
    Category: <input type='text' onChange={props.onCategoryChanged} />
    Image: <input type='text' onChange={props.onImageChanged} />
    Price: <input type='text' onChange={props.onPriceChanged} />
    <button type='submit'>
      Submit
    </button>
  </form>

EditProductForm.propTypes = propTypes

export default EditProductForm
