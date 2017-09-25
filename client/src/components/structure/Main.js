import React from 'react'
import { Route } from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/products/Products'
import SignUpFormContainer from '../pages/auth/SignUpFormContainer'
import LoginContainer from '../pages/auth/LoginContainer'
import UserProfileContainer from '../pages/userProfile/UserProfileContainer'
import ShoppingCart from '../pages/shoppingCart/ShoppingCart'
import Checkout from '../pages/checkout/Checkout'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    position: 'fixed',
    top: 50,
    bottom: 25,
    left: 0,
    right: 0,
    backgroundColor: 'grey',
    overflow: 'scroll'
  }
}

const Main = (props) =>
  <main style={styles.main}>
    <h3>Hello from Main</h3>

    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />

    //Can delcare props and dumb component inside this tag to render correct prop
    //Router props are available if you need them
    <Route path='/products' render={() => <Products domainData={props.domainData} />} />
    <Route path='/signup' render={() => <SignUpFormContainer domainData={props.domainData} />} />
    <Route path='/login' render={() => <LoginContainer domainData={props.domainData} />} />
    <Route path='/user-profile' render={() => <UserProfileContainer domainData={props.domainData} />} />
    <Route path='/shopping-cart' render={() => <ShoppingCart domainData={props.domainData} />} />
    <Route path='/checkout' render={() => <Checkout domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes

export default Main
