import { combineReducers } from 'redux';
import { UPDATE_INPUT, SLOW_UPDATE_INPUT } from '../actions';

const jumpingInput = (state = '', action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.value;
    default:
     return state;
  }
}

const slowJumpingInput = (state = '', action) => {
  switch (action.type) {
    case SLOW_UPDATE_INPUT:
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  jumpingInput,
  slowJumpingInput
})
