import React from 'react'
import './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      activeIndex: 0,
    }
    this.initConfig()
  }

  initConfig() {
    const { interval, height, width } = this.props
    this.interval = interval && Number.isInteger(interval) ? interval : 4000
    this.height = height && Number.isInteger(height) ? height : 200
    this.width = width ? `${width}px`: '100%'
  }

  getStyle() {
    const aStyle = {
      height: `${this.height}px`,
      width: this.width,
    }

    return aStyle
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.doChangActiveIndex(this.state.activeIndex)
    }, this.interval)
  }

  doChangActiveIndex(index) {
    this.setState({
      activeIndex: (index + 1) % this.props.data.length
    })
  }

  _changActiveIndex(index) {
    this.doChangActiveIndex(index - 1)
    this.doClearInterval()
    this.timer = setInterval(() => {
      this.doChangActiveIndex(this.state.activeIndex)
    }, this.interval)
  }

  doClearInterval() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    this.doClearInterval()
  }

  render() {
    const { data } = this.props

    return (
      <div className='ui-carousel-pc' style={this.getStyle()}>
        <ul className='content'>
          {
            data.map((item, index) => {
              return (
                <li className={this.state.activeIndex === index ? 'active' : null} style={{ transition: `all ease ${this.interval}ms` }} key={index}>
                  <img src={item} />
                </li>
              )
            })
          }
        </ul>
        <ul className='control'>
          {
            data.map((item, index) => {
              return <li className={this.state.activeIndex === index ? 'active' : null}onMouseOver={this._changActiveIndex.bind(this, index)} key={index}></li>
            })
          }
        </ul>
      </div>
    )
  }
}