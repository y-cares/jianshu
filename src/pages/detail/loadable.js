// react-loadable 用于路由的异步加载
import Loadable from 'react-loadable'
import React from 'react'

// loading 为函数，当页面还未加载完成时的一个过度组件
const DetailComponent = Loadable({
  loader: () => import('./'),
  // loading: Loading
  loading: () => {
    return <div>正在加载...</div>
  }
})

// 可以为一个无状态组件
export default () => <DetailComponent/>

// 也可以为一个功能性组件
// export default class App extends React.Component {
//   render() {
//     return <DetailComponent/>;
//   }
// }
