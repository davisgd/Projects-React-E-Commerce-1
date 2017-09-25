import React from 'react'
import PropTypes from 'prop-types'
import InjectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

const styles = {
  userProfileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: [1, 'solid', 'red']
  }
}

const enhancer = InjectSheet(styles)

const UserProfile = (props) => {
  return (
    <div className={props.classes.userProfileCard}>
      First Name: {props.firstName}
      Last Name: {props.lastName}
      Email: {props.email}
    </div>
  )
}

UserProfile.propTypes = propTypes

export default enhancer(UserProfile)
