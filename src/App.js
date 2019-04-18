import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './pages/Header'
import Players from './pages/Players'
import Homepage from './pages/Homepage'
import About from './pages/About'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header className="playerContainer" />
        <div className="bg-image">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/players/:year" component={Players} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}
