import React from 'react';
import { connect } from 'react-redux';

const TodosList = (props) => {
  const mappedTodos = props.todos.map((todo, index) => {
    return (

        <li
          className="row"
          id={todo.toString()}
          key={index}
          onClick={() => props.onDelete(index)}
          className="list-item"
          >{todo}</li>
    );
  });
  return (
    <div>
      <h1>TodosList</h1>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.item}
          onChange={props.onInputChange}/>
      </form>
      <ul>
        {mappedTodos}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos,
    item: state.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      const action = {type: 'INPUT_CHANGE', item: e.target.value};
      dispatch(action);
    },
    onDelete: (index) => {
      const action = {type: 'DELETE_ITEM',
      index: index};
      dispatch(action);
    },
    onSubmit: (e) => {
      console.log('submitted');
      e.preventDefault();
      const action = {type: 'ADD_ITEM'};
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
