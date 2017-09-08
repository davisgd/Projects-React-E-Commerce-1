import PropTypes from 'prop-types'
import React, { Component } from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import EditProductForm from './EditProductForm'

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }


  constructor (props) {
    super()
    const productId = props.match.params.productId // get id from url
    const product = props.domainData.findProductById(productId) // get product object from domain data

    this.state = { // copy product into state
      _id: product._id,
      name: product.name,
      category: product.category,
      image: product.image,
      price: product.price
    }
  }

  onNameChanged = (event) => this.setState({name: event.target.value})

  onCategoryChanged = (event) => this.setState({ category: event.target.value })

  onImageChanged = (event) => this.setState({ image: event.target.value })

  onPriceChanged = (event) => this.setState({ price: event.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.updateProduct(this.state)
    console.log('Form Submitted')
    this.props.history.push('/product')
  }

  render () {
    return <EditProductForm 
      />
  }
}

export default EditProductContainer