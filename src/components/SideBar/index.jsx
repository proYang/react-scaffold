import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store, routerActions } from '../../store.js'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

import { toggleSidebar, fetchThemeList } from '../../actions/sidebar'
import style from './style.less'

const mapStateToProps = (state, ownProps) => ({
  list: state.sidebar.list,
  active: state.sidebar.active,
  router: ownProps
})

class Sidebar extends Component {
  componentWillMount() {
    let { dispatch } = this.props
    dispatch(fetchThemeList())
  }

  render() {
    return (
      <div>
        <div className={`${style.sidebarBox} ${this.props.active ? style.showSidebar : ''}`}>
          <div className={style.tittle}>
            <Icon type="appstore-o" />
          </div>
          <ul>
            <li onClick={() => this.handleItemClick()}>首页</li>
            {this.props.list.map((item, index) =>
              <li key={index} onClick={() => this.handleItemClick(item.id)}>
                {item.name}
              </li>
            )}
          </ul>
        </div>
        <div className={this.props.active ? style.sidebarMask : ''} onClick={() => this.handleToggleSidebar()}></div>
      </div>
    )
  }

  handleToggleSidebar() {
    let { dispatch } = this.props
    dispatch(toggleSidebar())
  }

  handleItemClick(id) {
    if (id) {
      store.dispatch(routerActions.push(`/theme/${id}`))
    } else {
      store.dispatch(routerActions.push('/'))
      this.handleToggleSidebar()
    }
  }
}

Sidebar.propTypes = {
  list: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Sidebar)