import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomeContent extends Component {
  render() {
    return (
      <div>
        <p>COnten</p>
        <p>The list page id is
          <b style={{ color: 'red' }}>{this.props.id}</b>
        </p>
      </div>
    )
  }
}

HomeContent.propTypes = {
  id: PropTypes.number
}
export default HomeContent