import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Student Classroom App!</h1>
        </header>
        <StudentCollection />
      </div>
    );
  }

}

export default App;
