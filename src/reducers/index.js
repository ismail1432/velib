import bookingReducer from './booking';
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    bookingReducer
})

export default allReducer;
