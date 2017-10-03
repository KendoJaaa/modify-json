import './App.css'

import React, { Component } from 'react'

import JsonBox from './JsonBox'
import modify from './modify'

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
          value={JSON.stringify(modify(this.state.value), null, 2)}
        />
      </div>
    )
  }
}

export default App
