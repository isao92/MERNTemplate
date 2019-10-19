import { GET_BOOKING_ITEMS, ADD_BOOKING_ITEM, DELETE_BOOKING_ITEM, BOOKING_ITEMS_LOADING } from '../actions/types'

const initialState = {
  bookingItems: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKING_ITEMS:
      return {
        ...state,
        bookingItems: action.payload,
        loading: false
      }
    case DELETE_BOOKING_ITEM:
      return {
        ...state,
        bookingItems: state.bookinItems.filter(bookingItem => bookingItem._id !== action.payload)
      }
    case ADD_BOOKING_ITEM:
      return {
        ...state,
        bookingItems: [action.payload, ...state.bookingItems]
      }
    case BOOKING_ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}