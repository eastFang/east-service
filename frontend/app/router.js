import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * 异步加载组件
 * @param load 组件加载函数，load 函数会返回一个 Promise，在文件加载完成时 resolve
 * @returns {AsyncComponent} 返回一个高阶组件用于封装需要异步加载的组件
 */
function getAsyncComponent(load) {
  return class AsyncComponent extends React.PureComponent {

    componentDidMount() {
      // 在高阶组件 DidMount 时才去执行网络加载步骤
      load()
      .then(({default: component}) => {
        // 代码加载成功，获取到了代码导出的值，调用 setState 通知高阶组件重新渲染子组件
        this.setState({
          component,
        })
      }, (error) => {
        console.log(error)
      })
      .catch((error) => {
        console.log(error)
      });
    }

    render() {
      const {component} = this.state || {};
      // component 是 React.Component 类型，需要通过 React.createElement 生产一个组件实例
      return component ? React.createElement(component) : null;
    }
  }
}

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={getAsyncComponent(
          () => import(/* webpackChunkName: "page-index" */'./page/home/index/connect')
        )}></Route>
        <Route path='/about' component={getAsyncComponent(
          () => import(/* webpackChunkName: "page-about" */'./page/about')
        )} />
        <Route path='/ui' component={getAsyncComponent(
          () => import(/* webpackChunkName: "page-ui" */'./page/ui')
        )} />
        <Route path='*' component={getAsyncComponent(
          () => import(/* webpackChunkName: "page-error" */'./page/error')
        )} />
      </Switch>
    </Router>
  )
}