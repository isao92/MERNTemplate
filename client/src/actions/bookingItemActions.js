import axios from 'axios'
import {
  GET_BOOKING_ITEMS,
  ADD_BOOKING_ITEM,
  DELETE_BOOKING_ITEM,
  BOOKING_ITEMS_LOADING,
} from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

// BOOKING ITEMS SECTION

export const getBookingItems = () => dispatch => {
  dispatch(setBookingItemsLoading())
  axios
    .get('/api/booking-items')
    .then(res => dispatch({
      type: GET_BOOKING_ITEMS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)) )
}

export const addBookingItem = bookingItem => (dispatch, getState) => {
  axios
    .post('/api/booking-items', bookingItem, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_BOOKING_ITEM,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)) )
}

export const deleteBookingItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/booking-items/${id}`, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: DELETE_BOOKING_ITEM,
        payload: id
      }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)) )
}

export const setBookingItemsLoading = () => {
  return {
    type: BOOKING_ITEMS_LOADING
  }
}

// END OF BOOKING SECTION