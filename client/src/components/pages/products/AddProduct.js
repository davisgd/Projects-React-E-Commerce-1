import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const enhancer = injectSheet(styles)

const styles = {
  form: {

  }
}

const propTypes = {
  domainData: AppPropTypes.domainData,
  classes: PropTypes.classes.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired
}

const AddProduct = (props) =>
  <form className={props.classes.form}>
    Name: <input type='text'
      onChange={props.onNameChanged} />
    Category: <input type='text'
      onChange={props.onCategoryChanged} />
    Image: <input type='text'
      onChange={props.onImageChanged} />
    Price: <input type='number'
      onChange={props.onPriceChanged} />
  </form>

AddProduct.propTypes = propTypes

export default enhancer(AddProduct)
