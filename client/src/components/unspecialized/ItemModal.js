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
import { addItem } from '../../actions/itemActions'
import PropTypes from 'prop-types'

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    requestedDate: '',
    requestedDays: ''
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
    const newItem = {
      name: this.state.name,
      requestedDate: this.state.requestedDate,
      requestedDays: this.state.requestedDays
    }

    // Add item via additem action
    this.props.addItem(newItem)

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
        >Add Item</Button> : '' }

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
        >
          <ModalHeader toggle={ this.toggle }>Add To Renting List</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input 
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add renting item"
                  onChange={ this.onChange }
                /><Input 
                  type="date"
                  name="requestedDate"
                  id="renting-date"
                  placeholder="Starting Date"
                  onChange={ this.onChange }
                />
                <Input 
                  type="number"
                  name="requestedDays"
                  id="renting-days"
                  placeholder="Number of Days"
                  onChange={ this.onChange }
                />
                <Button
                  color="dark"
                  style={{ marginTop: '2rem' }}
                >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addItem })(ItemModal)