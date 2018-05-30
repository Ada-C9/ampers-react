import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCollection from './components/StudentCollection';

class App extends Component {

  render() {
    return (
      <div className={"appClassName"}>
        <header>
          <h1 className="App-title">Student Classroom App!</h1>
        </header>
        <StudentCollection />
      </div>
    );
  }

}

export default App;
