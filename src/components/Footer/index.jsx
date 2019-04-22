import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import snabbt from 'snabbt.js'

import style from './style.less'
import publishImg from '@/assets/image/publish.png'

const mapStateToProps = () => ({
})

class Footer extends Component {
  constructor() {
    super()
    this.icon = null
    this.iconActive = false
  }
  componentDidMount() {

  }
  handleToggleSidebar() {
    // let { dispatch } = this.props
  }
  render() {
    return <div className={style.footer}>
      <div className={style.icon}>
        <img ref={(img) => { this.icon = img }} className={style.iconImg} src={publishImg} onClick={this.handleClick.bind(this)} />
      </div>
      <h2>首页</h2>
    </div>
  }
  handleClick() {
    if(this.iconActive === true) {
      snabbt(this.icon, {
        fromRotation: [0, 0, -5 / 4 * Math.PI],
        rotation: [0, 0, 0],
        easing: 'ease',
        duration: 500
      })
      this.iconActive = false
    } else {
      snabbt(this.icon, {
        rotation: [0, 0, -5 / 4 * Math.PI],
        easing: 'ease',
        duration: 500
      })
      this.iconActive = true
    }

  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(Footer)
