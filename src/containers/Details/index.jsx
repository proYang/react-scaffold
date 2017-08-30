import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Theme extends Component {
  render() {
    return (
      <div>
        <p style={{ color: 'red' }}>Details:{this.props.match.params.id}</p>
      </div>
    )
  }
}

Theme.propTypes = {
  match: PropTypes.object.isRequired
}

export default Theme