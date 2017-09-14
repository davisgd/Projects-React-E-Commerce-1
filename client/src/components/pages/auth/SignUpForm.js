import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const SignUpForm = (props) =>
  <div>
    <h1>Sign Up</h1>
    <form onSubmit={props.onSubmit}>
      First Name: <input type='text'
        value={props.firstName}
        onChange={props.onFirstNameChanged} />
      Last Name: <input type='text'
        value={props.lastName}
        onChange={props.onLastNameChanged} />
      Email: <input type='text'
        value={props.email}
        onChange={props.onEmailChanged} />
      Password: <input type='text'
        value={props.password}
        onChange={props.onPasswordChanged} />

      <input
        type='submit'
        value='Submit Form'
      />

    </form>
  </div>

SignUpForm.propTypes = propTypes

export default SignUpForm
