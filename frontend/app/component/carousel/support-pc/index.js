import React from 'react'
import './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      activeIndex: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        activeIndex: (this.state.activeIndex + 1) % this.props.data.length
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { data } = this.props

    return (
      <div className='ui-carousel'>
        <ul className='content'>
          {
            data.map((item, index) => {
              return (
                <li class={this.state.activeIndex === index ? 'active' : null}>
                  <img src={item} />
                </li>
              )
            })
          }
        </ul>
        <ul className='control'>
          {
            data.map((item) => {
              return <li></li>
            })
          }
        </ul>
      </div>
    )
  }
}