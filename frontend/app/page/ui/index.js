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
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1106007789,1634881763&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3965449651,1308881456&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=684945823,3798775927&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1178237420,4250894565&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=533955153,3306180285&fm=27&gp=0.jpg'
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