import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Container extends Component {
  componentWillReceiveProps(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.object
}

export default Container