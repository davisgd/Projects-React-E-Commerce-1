import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cart: {},
    address: {
      'billing': {},
      'shipping': {}
    }
  }

  methods = {
    getAllProducts: () =>
      ServerApi.getAllProducts()
        .then(products =>
          this.setState({
            isLoaded: true,
            products: products
          })),

    addProduct: (product) =>
      ServerApi.addProduct(product)
        .then(this.methods.getAllProducts),

    deleteProduct: (product) =>
      ServerApi.deleteProduct(product)
        .then(this.methods.getAllProducts),

    updateProduct: (product) =>
      ServerApi.updateProduct(product)
        .then(this.methods.getAllProducts),

    findProductById: (productId) => this.state.products.find(p => p._id === productId),

    signUpUser: (user) =>
      ServerApi.signUpUser(user)
        .then((savedUser) => this.setState({
          user: savedUser
        })),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then((loggedInUser) => {
          this.setState({
            user: loggedInUser
          })
          return loggedInUser
        }),

    logoutUser: () =>
      ServerApi.logoutUser()
        .then(() => this.setState({ user: null })),

    getUser: () =>
      ServerApi.getUser()
        .then(user => {
          this.setState({ user })
          return user
        }),

    addToCart: (productId) => {
      if (!this.state.cart[productId]) {
        this.state.cart[productId] = 0
      }
      this.state.cart[productId] += 1
    },

    setQuantityInCart: (productId, quantity) => {
      const cart = this.state.cart
      if (quantity > 0) {
        cart[productId] = quantity
      } else {
        delete cart[productId]
      }
      this.setState({cart})
    },

    emptyCart: () => {
      const cartItems = this.state.cart
      cartItems.splice(0, cartItems.length)
      this.setState({cartItems})
    },

    totalCart: () => {
      const products = this.state.products
      const cart = this.state.cart
      return products.filter((product) => cart[product._id])
        .reduce((sum, product) => sum + (product.price * cart[product._id]), 0)
    },

    updateAddressField: (value, field, type) => {
      /* value = whatever user typed into field */
      /* field = current field user is typing in */
      /* type = type of data (string, number, etc.) */
      const address = this.state.address
      address[type][field] = value
      this.setState({address})
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
    ServerApi.getUser()
      .then(user =>
        this.setState({
          user: user
        }))
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null,
      isAdmin: this.state.user != null && this.state.user.local.isAdmin
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
