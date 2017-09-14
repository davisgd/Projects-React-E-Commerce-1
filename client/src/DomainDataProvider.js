import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    email: '',
    password: ''
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products: products
        }))

  addProduct = (product) =>
    ServerApi.addProduct(product)
      .then(this.getAllProducts)

  deleteProduct = (product) =>
    ServerApi.deleteProduct(product)
      .then(this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product)
      .then(this.getAllProducts)

  findProductById = (productId) => this.state.products.find(p => p._id === productId)

  signUpUser = (user) =>
    ServerApi.signUpUser(user)
      .then((savedUser) => this.setState({
        user: savedUser
      }))

  loginUser = (email, password) =>
    ServerApi.loginUser(email, password)
      .then((loggedInUser) => this.setState({
        user: loggedInUser
      }))

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      updateProduct: this.updateProduct,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      findProductById: this.findProductById,
      signUpUser: this.signUpUser,
      loginUser: this.loginUser
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
