import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Works from './views/works'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Works} exact path="/works" />
        <Route component={About} exact path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
