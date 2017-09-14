import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import LoginForm from './LoginForm'
import {withRouter} from 'react-router-dom'

class LoginContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('domain data:', this.props.domainData)
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/products'))
      .then(() => alert("You're logged in now!"))
  }

  render () {
    return (
      <LoginForm
        email={this.state.email}
        password={this.state.password}
        onEmailChanged={this.onEmailChanged}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(LoginContainer)
