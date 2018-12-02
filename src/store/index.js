import { createStore } from 'redux';

const initialState = {
  todos: 'testing'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {todos: action.item});
    break;
    case 'ON_SUBMIT':
      return Object.assign({}, state, {todos: action.item});
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
