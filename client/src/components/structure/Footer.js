import React from 'react'

const styles = {
  footer: {
    alignItems: 'center',
    backgroundColor: 'blue',
    bottom: 0,
    display: 'flex',
    height: 25,
    left: 0,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'fixed',
    right: 0,
  },
  h3: {
    color: 'white'
  }
}

const Footer = () =>
  <footer style={ styles.footer }>
    <h3 style={ styles.h3 }>Hello from Footer</h3>
  </footer>

export default Footer
