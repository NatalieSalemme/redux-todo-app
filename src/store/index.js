import { createStore } from 'redux';

const initialState = {
  todos: [],
  item: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {item: action.item});
    break;
    case 'ON_SUBMIT':
      return Object.assign({}, state, {
        todos: state.todos.concat(state.item),
        item: ''
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
