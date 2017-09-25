import React, {Component} from 'react'
import UserProfile from './UserProfile'
import PropTypes from 'prop-types'
import InjectSheet from 'react-jss'
import * as AppPropTypes from '../../../lib/propTypes'
import {withRouter} from 'react-router-dom'

class UserProfileContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super()
    console.log(props.domainData)
    if (props.domainData.user) {
      this.state = {
        email: props.domainData.user.local.email,
        firstName: props.domainData.user.local.firstName,
        lastName: props.domainData.user.local.lastName
      }
    } else {
      props.history.push('/')
    }
  }

  render () {
    return (
      <UserProfile
        {...this.state}
      />
    )
  }
}

export default withRouter(UserProfileContainer)
