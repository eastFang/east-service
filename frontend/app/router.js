import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * 异步加载组件
 * @param load 组件加载函数，load 函数会返回一个 Promise，在文件加载完成时 resolve
 * @returns {AsyncComponent} 返回一个高阶组件用于封装需要异步加载的组件
 */
function Loadable({ loader, loading }) {
  return class AsyncComponent extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        error: null,
      }
    }

    componentDidMount() {
      // 在高阶组件 DidMount 时才去执行网络加载步骤
      loader()
      .then(({default: component}) => {
        // 代码加载成功，获取到了代码导出的值，调用 setState 通知高阶组件重新渲染子组件
        this.setState({
          component,
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
    }

    render() {
      const { component, error } = this.state || {};
      // component 是 React.Component 类型，需要通过 React.createElement 生产一个组件实例
      if (error) return loading({ error })
      return component ? React.createElement(component) : loading({ isLoading: true });
    }
  }
}

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading</div>
  } else if (error) {
    return <div>出错啦</div>
  } else {
    return null
  }
}

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'page-index' */'./page/home/index/connect'),
  loading: MyLoadingComponent
})

const UI = Loadable({
  loader: () => import(/* webpackChunkName: 'page-ui' */'./page/ui'),
  loading: MyLoadingComponent
})

const About = Loadable({
  loader: () => import(/* webpackChunkName: 'page-about' */'./page/about'),
  loading: MyLoadingComponent
})

const Error = Loadable({
  loader: () => import(/* webpackChunkName: 'page-error' */'./page/error'),
  loading: MyLoadingComponent
})

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About} />
        <Route path='/ui' component={UI} />
        <Route path='*' component={Error} />
      </Switch>
    </Router>
  )
}
