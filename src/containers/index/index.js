import React, { Component } from 'react'
// import Footer from '@/components/footer'
import style from './style.less'

class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.title} >
          <div>hello Home</div>
        </div>
        <div className="title2" styleName="title2">大家好</div>
        {/* <Footer></Footer> */}
      </div>
    )
  }
}

export default Home