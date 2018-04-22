import React from 'react'
import "./index.scss"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this._onTouchStart = this._onTouchStart.bind(this)
    this._onTouchMove = this._onTouchMove.bind(this)
    this._onTouchEnd = this._onTouchEnd.bind(this)
    this.state = {
      changedPageX: 0,
      activeIndex: 0,
    }
    
    this.init()
  }

  init() {
    this.pageX = void 0 // 记录触摸点的x坐标
    this.initTranslateX = 0 // 初始化translateX值
    this.direction = 'left'
    this.clientWidth = document.body.clientWidth
    this.touchSlideNext = this.clientWidth / 5
  }

  _onTouchStart(evt) {
    const { pageX } = evt.touches[0]
    this.pageX = pageX
    this.initTranslateX += this.state.changedPageX
  }

  _onTouchMove(evt) {
    const { pageX } = evt.touches[0]
    const changedPageX = pageX - this.pageX
    this.direction = changedPageX > 0 ? 'right' : 'left'

    this.setState({
      changedPageX: changedPageX
    })
  }

  _onTouchEnd() {
    const isLeft =  this.direction === 'left'
    this.changeX = isLeft ? - this.clientWidth : this.clientWidth
    const translateX = this.initTranslateX + this.state.changedPageX

    if (Math.abs(this.state.changedPageX) < this.touchSlideNext || translateX > 0 || translateX < -this.clientWidth * (this.props.data.length - 1)) {
      return this.setState({
        changedPageX: 0,
      })
    }

    this.setState({
      changedPageX: this.changeX,
      activeIndex: isLeft ? this.state.activeIndex + 1 : this.state.activeIndex - 1,
    })
  }

  render() {
    if (!this.props.data || !this.props.data.length) return null
    const translateX = this.initTranslateX + this.state.changedPageX

    return (
      <div className='ui-carousel-ms'>
        <ul className="ul-content"
          onTouchStart={this._onTouchStart}
          onTouchMove={this._onTouchMove}
          onTouchEnd={this._onTouchEnd}
          style={{ transform: `translate3D(${translateX}px, 0, 0)`, height: `${this.clientWidth / 2}px` }}>
          {
            this.props.data.map((item, index) => {
              return <li key={index}><img src={item} /></li>
            })
          }
        </ul>
        <ul className="ul-control">
          {
            this.props.data.map((item, index) => {
              return <li className={index === this.state.activeIndex ? 'active' : ''} key={index}></li>
            })
          }
        </ul>
      </div>
    )
  } 
}