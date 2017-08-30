import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  link: {
  },
  h3: {
    color: 'white',
  },
  active: {
    backgroundColor: 'lightGreen',
    borderRadius: 20,
    padding: 10,
    textDecoration: 'none',
  }
}

const Header = () =>
  <header style={ styles.header }>
    <h3 style={ styles.h3 }>Hello from Header!</h3>
    <nav>
      &nbsp;&nbsp;
      <NavLink to='/' exact style={ styles.active }>Home</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to='/about' style={ styles.active }>About</NavLink>
    </nav>
  </header>

export default Header
