import React, { Component } from 'react';
import RentingList from '../components/RentingList'
import ActionCall from '../components/ActionCall'
import ItemModal from '../components/ItemModal'

import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <ActionCall />
          <br/>
          <ItemModal />
          <RentingList />
        </Container>
      </div>
    )
  }
}

export default Home;
