import './JsonBox.css'

import React, { Component } from 'react'

import PropTypes from 'prop-types'
import cn from 'classnames'

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

  renderTextArea = () => {
    return (
      <textarea
        className={cn('json-box__text-area', { '--disabled': !this.props.onChange })}
        onChange={this.props.onChange} 
        disabled={!this.props.onChange}
        value={this.props.value}
      />
    )
  }

  render () {
    return (
      <div className='json-box'>
        {this.renderHeader()}
        {this.renderTextArea()}
      </div>
    )
  }
}

export default JsonBox
