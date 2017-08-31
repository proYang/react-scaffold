import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class HomeContent extends Component {
  render() {
    return (
      <div>
        <p>COnten</p>
        <p>The list page id is
          <b style={{ color: 'red' }}>{this.props.id}</b>
          <b style={{ color: 'green' }}>{this.props.match.params.id}</b>
          <button onClick={()=>this.props.history.go(-1)}>back</button>
        </p>
      </div>
    )
  }
}

HomeContent.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default withRouter(HomeContent)