import React from 'react';
import { connect } from 'react-redux';
import ListItem  from './ListItem';
import {
  Header,
  Container,
} from 'semantic-ui-react';

const todosList = (props) => {
  const mappedtodosList = props.todosList.map((todo, index) => {
    return (
      <Container className="item-container"
        key={index}>

        <ListItem
          id={todo.toString()}
          index={index}
          todo={todo}
        />
    </Container>
    );
  });

  return (
    <div className="center todos-list-container">
       <Header as='h1' className="header">Redux Todos List</Header>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.item}
          onChange={props.onInputChange}/>
      </form>
      <h4>I have {props.todosList.length} {props.todosList.length === 1 ? 'thing' : 'things'} left to do!</h4>
      <ol>
        {mappedtodosList}
      </ol>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    todosList: state.todosList,
    item: state.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      const action = {type: 'INPUT_CHANGE', item: e.target.value};
      dispatch(action);
    },
    onSubmit: (e) => {
      e.preventDefault();
      const action = {type: 'ADD_ITEM'};
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(todosList);
