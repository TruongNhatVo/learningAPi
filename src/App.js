import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Menu from './components/menu';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
