/**
 * 主页
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { list } from '../mock'
import "./index.scss"

export default class extends React.Component {

  renderItemLi(item) {
    return (
      <li key={item.id}>
        <img src={item.imgUrl} alt=""/>
        <p className="below-img-row">
          <span className="sub-title">{item.subTitle}</span>
          <span className="start">{item.start}</span>
        </p>
        <p className="cutwords title-row">{item.title}</p>
        <div className="bottom-row">
          <div className="user-info">{item.publisher}</div>
          <div className="num">
            <span>{item.viewNum}</span>
            <span>{item.countNum}</span>
            <span>{item.favoriteNum}</span>
          </div>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div className="wrap">
        <ul className="bis-card-list">
          {
            list && list.map(item => this.renderItemLi(item))
          }
        </ul>
      </div>
    )
  }
}