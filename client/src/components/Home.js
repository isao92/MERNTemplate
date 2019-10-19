import React, { Component } from 'react';
import ActionCall from '../components/ActionCall'

import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <ActionCall />
        </Container>
      </div>
    )
  }
}

export default Home;
