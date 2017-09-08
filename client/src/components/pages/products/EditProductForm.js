import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  
}

const EditProductForm = (props) =>
  <form>
    Name: <input type='text' />
    Category: <input type='text' />
    Image: <input type='text' />
    Price: <input type='text' />
  </form>

EditProductForm.propTypes = propTypes
  
  export default EditProductForm