import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired
}

const LoginForm = (props) =>
  <div>
    <form onSubmit={props.onSubmit}>
      Email: <input type='text'
        value={props.email}
        onChange={props.onEmailChanged} />
      Password: <input type='password'
        value={props.password}
        onChange={props.onPasswordChanged} />
      <input type='submit' value='Submit' />
    </form>
  </div>

LoginForm.propTypes = propTypes

export default LoginForm
