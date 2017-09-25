import React from 'react'
import ShoppingCartCard from './ShoppingCartCard'
import * as AppPropTypes from '../../../lib/propTypes'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const enhancer = injectSheet(styles)

const styles = {
  
}

const ShoppingCart = (props) => {
  console.log(props.domainData)
  const cartKeys = Object.keys(props.domainData.cart)
  return (
    <div>
      {
        cartKeys.length
          ? <div>
            {
              cartKeys.map((productId, i) =>
                <ShoppingCartCard
                  key={i}
                  product={props.domainData.findProductById(productId)}
                  quantity={props.domainData.cart[productId]}
                  onDelete={() => props.domainData.setQuantityInCart(productId, 0)}
                  onSetQuantity={(quantity) => props.domainData.setQuantityInCart(productId, quantity)}
                />
              )
            } <h3>Total: {props.domainData.totalCart()}</h3>
            <Link to='/checkout'>Checkout</Link>
          </div> : <h1>Shopping Cart is empty.</h1>
      }
    </div>
  )
}

ShoppingCart.propTypes = propTypes

export default enhancer(ShoppingCart)
