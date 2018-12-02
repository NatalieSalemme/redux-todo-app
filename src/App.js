import React, { Component } from 'react';
import './App.css';
import store from './store/';
import TodosList from './TodosList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosList store={store} />
      </div>
    );
  }
}

export default App;
