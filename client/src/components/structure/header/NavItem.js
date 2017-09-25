import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

const defaultProps = {
  exact: false
}

const styles = {
  navItem: {
    backgroundColor: 'lightGreen',
    borderRadius: 20,
    padding: 10,
    textDecoration: 'none'
  }
}

const enhancer = injectSheet(styles)

const NavItem = (props) =>
  <NavLink
    to={props.to}
    exact={props.exact}
    className={props.classes.navItem}
  >
    {props.children}
  </NavLink>

NavItem.propTypes = propTypes

NavItem.defaultProps = defaultProps

export default enhancer(NavItem)
