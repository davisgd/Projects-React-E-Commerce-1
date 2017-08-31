import React from 'react'

class Products extends Component {
  //Gives text field the value of an empty string, makes it so you can't type in it
  state = {
    textField: ''
  }

  //Sets the state of the text field to whatever you type in it
  textFieldChanged = (event) => this.setState({
    textField: event.state.value
  })

  //Declares function to reset text field state back to an empty string
  clearTextField = () => this.setState({
    textField: ''
  })

  render () {
    return (
      <div>
        //Text fields remember their own state(it knows what you type in it), but won't sync up with React state
        //Declaring 'this' makes text field value sync up with React state; the value of the text field is equal to the state above
        //Putting onChange lets you type in text field, and value with sync with React state
        <input type='text' value={ this.state.textField } onChange={ this.textFieldChanged } />

        //Creates the actual button and causes it to call the clearTextField function written above
        <button onClick={ this.clearTextField }>Clear</button>
      </div>
    )
  }
}

//This closed loop pattern is called a "controlled component", the 'input' tag is a slave of the state

export default Products
