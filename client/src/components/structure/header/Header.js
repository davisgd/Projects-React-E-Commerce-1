import React from 'react'
import NavItem from './NavItem'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'darkGreen'
    },
    '& a': {
      border: '2px solid black',
      backgroundColor: 'lightGreen',
      borderRadius: 20,
      padding: 10,
      textDecoration: 'none',
      margin: 5
    }
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  link: {
  },
  h3: {
    color: 'white'
  }
}

const enhancer = injectSheet(styles)

const Header = (props) =>
  <header className={props.classes.header}>
    <nav className={props.classes.nav}>
      <NavItem exact to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/products'>Products</NavItem>
      <NavItem to='/user-profile'>User Profile</NavItem>
      {props.domainData.loggedOut ? <NavItem to='/signup'>Sign Up New User</NavItem> : null}
      {props.domainData.loggedOut ? <NavItem to='/login'>Login</NavItem> : null}
      {props.domainData.loggedIn ? <button onClick={props.domainData.logoutUser}>Log Out</button> : null}
      <NavItem to='/shopping-cart'>Shopping Cart</NavItem>
    </nav>
  </header>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  domainData: AppPropTypes.domainData
}

export default enhancer(Header)
