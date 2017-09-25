import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddressFields from './AddressFields'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Checkout = (props) => {
  return (
    <div>
      <h1>Hello from Checkout</h1>
      <form className='checkout-form'>
        <AddressFields
          domainData={props.domainData}
          addressType={'billing'}
        />
        <AddressFields
          domainData={props.domainData}
          addressType={'shipping'}
        />
        <button type='submit'>Finalize Order</button>
      </form>

      <div>
        Order Total: ${props.domainData.totalCart()}
      </div>

    </div>
  )
}

Checkout.propTypes = propTypes

export default Checkout
