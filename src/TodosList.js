import React from 'react';
import { connect } from 'react-redux';

const TodosList = (props) => {
  return (
    <div>
      <h1>TodosList</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
