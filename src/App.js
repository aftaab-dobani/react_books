import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import Books from './components/Books/Books';
// import Bookcard from './components/Bookcard/Bookcard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
        {/* <Bookcard /> */}
      </div>
    )
  }
}

export default App;
