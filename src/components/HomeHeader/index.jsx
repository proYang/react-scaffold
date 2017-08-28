import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { toggleSideBar } from '@/actions/sidebar'
import style from './style.less'

class HomeHeader extends Component {
  componentDidMount() {
    let porop = this.props
    debugger
    console.log(porop)
  }
  handleToggleSideBar() {
    let { dispatch } = this.props
    dispatch(toggleSideBar())
  }
  render() {
    return (
      <div className={style.header}>
        <Icon className={style.icon} onClick={() => this.handleToggleSideBar()} type="menu-fold" />
        <h2 className={style.title}>首页</h2>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  
})
export default HomeHeader