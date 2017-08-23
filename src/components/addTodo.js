import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  constructor() {
    super()
    this.$ref
  }

  render() {
    return (
      <div>
        <input type='text' ref={(el) => this.$ref = el} />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick() {
    const node = this.$ref
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}