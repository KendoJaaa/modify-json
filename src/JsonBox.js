import './JsonBox.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'

class JsonBox extends Component {

  static propTypes = {
    header: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }

  renderHeader = () => {
    return (
      <div className='json-box__header'>
        {this.props.header}
      </div>
    )
  }

  renderTextField = () => {
    return (
      <input 
        className='json-box__text-field'
        onChange={this.props.onChange} 
      />
    )
  }

  render () {
    return (
      <div className='json-box'>
        {this.renderHeader()}
        {this.renderTextField()}
      </div>
    )
  }
}

export default JsonBox
