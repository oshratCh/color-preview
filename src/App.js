import React, { Component } from "react";

import HomePage from "./containers/HomePage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <header className="App-header">Header</header>
        <HomePage />
        <footer className="App-footer">Footer</footer>
      </div>
    );
  }
}

export default App;
