import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { toggleSidebar } from '@/actions/sidebar'
import style from './style.less'

const mapStateToProps = () => ({
})

class HomeHeader extends Component {
  componentDidMount() {

  }
  handleToggleSidebar() {
    let { dispatch } = this.props
    dispatch(toggleSidebar())
  }
  render() {
    return (
      <div className={style.header}>
        <Icon className={style.icon} onClick={() => this.handleToggleSidebar()} type="menu-fold" />
        <h2 className={style.title}>首页</h2>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(HomeHeader)