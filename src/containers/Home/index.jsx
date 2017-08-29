import React, { Component } from 'react'

import style from './style.less'
import HomeHeader from '@/components/HomeHeader/index'
import Sidebar from '@/components/Sidebar/index'

class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <HomeHeader />
        <Sidebar />
      </div>
    )
  }
}

export default Home