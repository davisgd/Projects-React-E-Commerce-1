import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  active: {
    backgroundColor: 'lightGreen',
    borderRadius: 20,
    padding: 10,
    textDecoration: 'none'
  }
}

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const NavItem = (props) =>
  <NavLink to={props.to} style={styles.active}>{props.children}</NavLink>

NavItem.propTypes = propTypes

export default NavItem
