import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Books from './components/Books/Books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    )
  }
}

export default App;
