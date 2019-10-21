import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AppNavbar from './components/AppNavbar'
import Booking from './components/guest/Booking'
import Renting from './components/guest/Renting'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Router>
          <Provider store={store}>
            <div className="App">
              <AppNavbar />
              <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/booking" component={ Booking } />
              <Route path="/renting" component={ Renting } />
              </Switch>
            </div>
          </Provider>
      </Router>
    )
  }
}

export default App;
