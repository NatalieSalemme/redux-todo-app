import React from 'react';
import { connect } from 'react-redux';

const TodosList = (props) => {
  return (
    <div>
      <h1>TodosList</h1>
      <form>
        <input
          onChange={props.onInputChange}/>
      </form>
      <ul>
        {props.todos}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: []
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
      const action = {type: 'ON_SUBMIT'};
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
