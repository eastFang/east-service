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
    const { interval, height } = this.props
    this.interval = interval && Number.isInteger(interval) ? interval : 4000
    this.height = height && Number.isInteger(height) ? height : 200
  }

  getStyle() {
    const aStyle = {
      transition: `all ease ${this.interval}ms`,
      height: `${this.height}px`
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
      <div className='ui-carousel'>
        <ul className='content' style={{ height: `${this.height}px` }}>
          {
            data.map((item, index) => {
              return (
                <li class={this.state.activeIndex === index ? 'active' : null} style={this.getStyle()} >
                  <img src={item} />
                </li>
              )
            })
          }
        </ul>
        <ul className='control'>
          {
            data.map((item, index) => {
              return <li class={this.state.activeIndex === index ? 'active' : null} onMouseOver={this._changActiveIndex.bind(this, index)}></li>
            })
          }
        </ul>
      </div>
    )
  }
}