import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux'
import { getItems, deleteItem } from '../../actions/itemActions'
import PropTypes from 'prop-types'
import './RentingList.css'

class RentingList extends Component {
  
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  // Lifecycle method
  componentDidMount() {
    this.props.getItems()
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id)
  }

  render() {
    const { items } = this.props.item
    return (
      <Container>
      <h3>Renting List</h3>
        <ListGroup>
          <TransitionGroup className="renting-list">
            { items.map(({ _id, name }) => (
              <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                <ListGroupItem id="dark-mode">
                  { this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    Cancel Item Request &times;
                  </Button> : ''}
                  { name }
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getItems, deleteItem })(RentingList)