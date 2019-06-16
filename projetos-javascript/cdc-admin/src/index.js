import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'reducers/reducer.js'
import App from './App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
      <Route path='/path' />
    </Router>
  </Provider>,
  document.getElementById('root')
)