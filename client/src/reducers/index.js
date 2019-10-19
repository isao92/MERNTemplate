import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import bookingItemReducer from './bookingItemReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'


export default combineReducers({
  item: itemReducer,
  bookingItem: bookingItemReducer,
  error: errorReducer,
  auth: authReducer
})