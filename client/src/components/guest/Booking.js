import React, { Component } from 'react';
// import RentingList from './components/RentingList'
// import AppNavbar from './components/AppNavbar'
// import ItemModal from './components/ItemModal'
// import ActionCall from './components/ActionCall'
// import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

import { Provider } from 'react-redux'
import store from '../../store'
// import { loadUser } from './actions/authActions'


class Booking extends Component {
  componentDidMount() {
    // store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="Booking">
          Booking
        </div>
      </Provider>
    )
  }
}

export default Booking;
