import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './css/style'
import './static/iconfont/iconfont'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
