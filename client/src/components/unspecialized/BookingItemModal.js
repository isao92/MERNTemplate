import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { connect } from 'react-redux'
import { addBookingItem } from '../../actions/bookingItemActions'
import PropTypes from 'prop-types'

class BookingItemModal extends Component {
  state = {
    modal: false,
    name: '',
    requestedDate: ''
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    const newBookingItem = {
      name: this.state.name,
      requestedDate: this.state.requestedDate
    }

    // Add booking item via addBookingItem action
    this.props.addBookingItem(newBookingItem)

    // Close modal
    this.toggle()
  } 

  render() {
    return(
      <div>
        { this.props.isAuthenticated ? <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={ this.toggle }
        >Add Booking Item</Button> : '' }

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
        >
          <ModalHeader toggle={ this.toggle }>Manage Your Booking List</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label for="item">Booking</Label>
                <Input 
                  type="text"
                  name="name"
                  id="booking-item"
                  placeholder="Add booking"
                  onChange={ this.onChange }
                />
                <Input 
                  type="date"
                  name="requestedDate"
                  id="booking-date"
                  placeholder="Starting Date"
                  onChange={ this.onChange }
                />
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                >Add Booking</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bookingItem: state.bookingItem,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addBookingItem })(BookingItemModal)