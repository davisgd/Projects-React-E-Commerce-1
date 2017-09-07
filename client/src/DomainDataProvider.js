import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))

  addProduct = (product) =>
    ServerApi.addProduct(newProduct, this.getAllProducts)

  deleteProduct = (product) =>
    ServerApi.deleteProduct(product, this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product, this.getAllProducts)

  findProductById = (products) => this.state.products.find(p => p._id === productId)

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      findProductById: this.findProductById
    }

    return this.state.isLoaded ? <Layout domainData={ domainData } /> : null
  }
}

export default DomainDataProvider
