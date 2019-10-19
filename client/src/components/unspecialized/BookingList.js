import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux'
import Moment from 'react-moment'
import { getBookingItems, deleteBookingItem } from '../../actions/bookingItemActions'
import PropTypes from 'prop-types'
import './RentingList.css'

class BookingList extends Component {
  
  static propTypes = {
    getBookingItems: PropTypes.func.isRequired,
    bookingItem: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  }

  // Lifecycle method
  componentDidMount() {
    this.props.getBookingItems()
  }

  onDeleteClick = (id) => {
    this.props.deleteBookingItem(id)
  }

  render() {
    const { bookingItems } = this.props.bookingItem
    return (
      <Container>
      <h3>Booking List</h3>
        <ListGroup>
          <TransitionGroup className="booking-list">
            { bookingItems.map(({ _id, name, requestedDate }) => (
              <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                <ListGroupItem id="dark-mode">
                  { this.props.isAuthenticated ? <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    Cancel Booking Request &times;
                  </Button> : ''}
                  { name }
                  <h6>
                    Requested Date: &nbsp;
                    <Moment format="LL">
                      { requestedDate }
                    </Moment>
                  </h6>
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
  bookingItem: state.bookingItem,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getBookingItems, deleteBookingItem })(BookingList)