import React, { Component } from 'react'
import {
  Container, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import PropTypes from 'prop-types'

class ActionCall extends Component {
  
  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  render() {
    return (
      <Container>
        <h2>Action Call</h2>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default ActionCall