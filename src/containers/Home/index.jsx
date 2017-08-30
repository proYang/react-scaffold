import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './style.less'
import HomeHeader from '@/components/HomeHeader/index'
import Content from '@/components/Content/index'
import Sidebar from '@/components/Sidebar/index'

class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <HomeHeader />
        <Sidebar />
        <Content id={this.props.match.params.id}/>
      </div>
    )
  }
}

Home.propTypes = {
  match: PropTypes.object
}

export default Home
