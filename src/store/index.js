import { createStore } from 'redux';

const initialState = {
  todosList: [],
  item: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {item: action.item});
      break;
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        todosList: state.todosList.concat(state.item),
        item: ''
      });
      break;
    case 'DELETE_ITEM':
      const copy = state.todosList.slice();
      copy.splice(action.index, 1);
      return Object.assign({}, state, {todosList: copy});
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
