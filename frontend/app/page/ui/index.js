import React from 'react'
import { Button, Carousel } from 'component'
import './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.images = [
      'https://img.shop.hisense.com/2018/04/13/1f9f3a36-03c2-475b-8cb7-33c984a6899e.jpg',
      'https://img.shop.hisense.com/2018/04/13/7d3ab79a-6ce7-4cc9-a782-6527ec6c2c6b.jpg',
      'https://img.shop.hisense.com/2018/04/13/4b9b6e6e-f3e7-4570-a301-c139237f38c9.jpg',
      'https://img.shop.hisense.com/2018/04/13/7d3ab79a-6ce7-4cc9-a782-6527ec6c2c6b.jpg',
      'https://img.shop.hisense.com/2018/04/13/1f9f3a36-03c2-475b-8cb7-33c984a6899e.jpg',
    ]
  }

  render() {
    return (
      <div>
        <Button className={'btn-extend-class'} type={'primary'} size={'large'}/>
        <Carousel.PC data={this.images}/>
        <Carousel.MS />
      </div>
    )
  }
}