import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Container,
  Checkbox } from 'semantic-ui-react';

const TodosList = (props) => {
  const mappedTodos = props.todos.map((todo, index) => {
    return (
      <Container className="item-container">

      <div
        className="row"
        key={index}>

        <li
          id={todo.toString()}
          className="list-item"
          >
            <Checkbox
              className="check-box"/>
            {todo}</li>
           <Button
             color='red'
             compact
             className="delete-btn"
             onClick={() => props.onDelete(index)}
             >Delete</Button>

      </div>
    </Container>
    );
  });



  return (
    <div className="center todos-list-container">
       <Header as='h1' className="header">Redux Todos</Header>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.item}
          onChange={props.onInputChange}/>
      </form>
      <h4>I have {props.todos.length} {props.todos.length === 1 ? 'thing' : 'things'} left to do!</h4>
      <ol>
        {mappedTodos}
      </ol>
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
      e.preventDefault();
      const action = {type: 'ADD_ITEM'};
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
