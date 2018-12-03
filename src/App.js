import React, { Component } from 'react';
import './App.css';
import store from './store/';
import TodosList from './TodosList';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Provider store={store}>
          <TodosList />
        </Provider>
      </div>
    );
  }
}

export default App;
