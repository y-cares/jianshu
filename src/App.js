import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import store from './store'
import Header from './components/header'
import Home from './pages/home/loadable'
import Detail from './pages/detail/loadable'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
          <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
