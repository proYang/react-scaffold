import React, { Component } from 'react'

import style from './style.less'
import HomeHeader from '@/components/HomeHeader/index'
import SideBar from '@/components/SideBar/index'

class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <HomeHeader />
        <SideBar />
      </div>
    )
  }
}

export default Home