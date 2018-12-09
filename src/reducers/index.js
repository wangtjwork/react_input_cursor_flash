import { combineReducers } from 'redux';
import { UPDATE_INPUT } from '../actions';

const inputValue = (state = '', action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.value;
    default:
     return state;
  }
}

export default combineReducers({
  inputValue
})
