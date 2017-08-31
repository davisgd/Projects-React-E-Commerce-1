import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    backgroundColor: 'lightGreen',
    borderRadius: 20,
    padding: 10,
    textDecoration: 'none',
  }
}

const propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.string.isRequired
}

const NavItem = (props) =>
  <NavLink to={ props.to } style={ styles.active }>{ props.children }</NavLink>

NavItem.propTypes = propTypes

export default NavItem
