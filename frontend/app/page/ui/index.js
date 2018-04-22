import React from 'react'
import { Button, Carousel } from 'component'
import { isPC } from 'util'
import './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.PCImages = [
      'http://images.esgcc.com.cn/images/ec_ad_info/0000018462/IMG_URL/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg',
      'http://img04.taobaocdn.com/imgextra/i4/85394294/T2uFl9XkNXXXXXXXXX_!!85394294.png',
    ]
    this.MSImages = [
      'http://img.shop.hisense.com/2018/04/20/1699d609-bf23-4521-a962-610654bd11fa.jpg?x-oss-process=image/resize,m_fixed,h_661/format,webp/quality,q_100',
      'http://img.shop.hisense.com/2018/04/20/04739cbe-0fd1-41cd-91f0-7035de015d3d.jpg?x-oss-process=image/resize,m_fixed,h_661/format,webp/quality,q_100',
      'http://img.shop.hisense.com/2018/04/20/38b0eb06-0065-4276-80ed-2932f691d1ce.jpg?x-oss-process=image/resize,m_fixed,h_661/format,webp/quality,q_100',
      'http://img.shop.hisense.com/2018/03/26/f9302a6e-df6d-4b4c-b268-774715c4a135.jpg?x-oss-process=image/resize,m_fixed,h_661/format,webp/quality,q_100',
      'http://img.shop.hisense.com/2018/03/26/2efd92aa-ce9b-47b2-b1eb-712f7a2dbf9b.jpg?x-oss-process=image/resize,m_fixed,h_661/format,webp/quality,q_100'
    ]
  }

  renderButton() {
    return (
      <div className='ui-btns-box'>
        <Button type={'primary'} size={'large'} />
        <Button type={'info'} size={'large'} />
      </div>
    )
  }

  renderCarousel() {
    if (isPC()) return  <Carousel.PC data={this.PCImages} width={1200} height={430} />
    return <Carousel.MS data={this.MSImages} />
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