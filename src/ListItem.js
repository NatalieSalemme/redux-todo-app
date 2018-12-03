import React from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Checkbox } from 'semantic-ui-react';

const ListItem = (props) => {
  return (
    <div
      className="row">
      <li
        id={props.id}
        className="list-item">
        <Checkbox
          className="check-box"/>
          {props.todo}
      </li>
         <Button
           color='red'
           compact
           className="delete-btn"
           onClick={() => props.onDelete(props.index)}
           >Delete</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (index) => {
      const action = {type: 'DELETE_ITEM', index: index};
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem);
