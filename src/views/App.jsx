import React, { Component } from 'react'

import '@/assets/style/reset.css'

import Clock from '@/components/Clock'

class App extends Component {
  render() {
    // Injected by connect() call:
    return (
      <div>
        <Clock/>
      </div>
    )
  }
}

export default App