import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './pages/Header'
import HeaderDropDown from './pages/HeaderDropDown'
import PlayersPage from './pages/PlayersPage'
import Homepage from './pages/Homepage'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/headerDropDown" component={headerDropDown} />
          <Route exact path="/homepage" component={Homepage} />
        </Switch>
      </Router>
    )
    }
  }
