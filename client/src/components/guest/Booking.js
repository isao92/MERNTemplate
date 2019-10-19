import React, { Component } from 'react';
import BookingList from '../unspecialized/BookingList'
// import AppNavbar from './components/AppNavbar'
import BookingItemModal from '../unspecialized/BookingItemModal'
// import ActionCall from './components/ActionCall'
import { Container } from 'reactstrap'

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
          <Container>
            <BookingItemModal />
            <BookingList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default Booking;
