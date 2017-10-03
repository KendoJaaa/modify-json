import './App.css'

import React, { Component } from 'react'

import JsonBox from './JsonBox'

class App extends Component {
  state = {
    value: ''
  }
  
  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className='app-container'>
        <JsonBox 
          header='Input (editable field)'
          value={this.state.value}
          onChange={this.onChange}
        />
        <JsonBox 
          header='Output'
          value={modify(this.state.value)}
        />
      </div>
    )
  }
}

function modify () {
  console.log('modify function')
}

export default App
