import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'

const enhancer = injectSheet(styles)

const styles = {
  form: {
    textDecoration: 'none',
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  }
}

const propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const AddProductForm = (props) =>
  <form className={props.classes.form} onSubmit={props.onSubmit}>
    Product Name: <input type='text' onChange={props.onNameChanged} />
    Product Category: <input type='text' onChange={props.onCategoryChanged} />
    Product Image URL: <input type='text' onChange={props.onImageChanged} />
    Price: <input type='number' onChange={props.onPriceChanged} />

    <input type='submit' value='Add New Product' />
    <button onClick={props.onCancel} >Cancel</button>
  </form>

AddProductForm.propTypes = propTypes

export default enhancer(AddProductForm)
