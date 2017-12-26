
import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null
  }
}



Loading.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

export default Loading