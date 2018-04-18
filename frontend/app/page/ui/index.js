import React from 'react'
import { Button, Carousel } from 'component'
import { isPC } from 'util'
import './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      'http://images.esgcc.com.cn/images/ec_ad_info/0000018462/IMG_URL/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg',
      'http://img04.taobaocdn.com/imgextra/i4/85394294/T2uFl9XkNXXXXXXXXX_!!85394294.png',
    ]
  }

  renderButton() {
    return (
      <div class='ui-btns-box'>
        <Button type={'primary'} size={'large'} />
        <Button type={'info'} size={'large'} />
      </div>
    )
  }

  renderCarousel() {
    return isPC() ? <Carousel.PC data={this.images} width={1200} height={430} /> : <Carousel.MS />
  }

  render() {
    return (
      <div>
        { this.renderButton() }
        { this.renderCarousel() }
      </div>
    )
  }
}