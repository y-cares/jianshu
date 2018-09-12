import Loadable from 'react-loadable'
import React from 'react'

const HomeleComponent = Loadable({
  loader: () => import('./'),
  loading: () => {
      return <div>正在加载...</div>
  }
})

export default () => <HomeleComponent />
