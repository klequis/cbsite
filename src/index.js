import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './ui/App'
import './base.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)