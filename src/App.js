import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {

  render() {
    const students = [
      {
        name: 'Hermine Granger',
        age: 18,
        email: 'Hermine@hogwarts.edu'
      },
      {
        name: 'Ada Lovelace',
        age: 18,
        email: 'ada@adadev.org',
      }
    ];

    const studentComponents = students.map((student) => {
      return (
        <li key={student.email}>
        <Student
           studentData={student}
           name={student.name}
           email={student.email}
        />
    </li>
      );
    });



    return (
      <div className={"appClassName"}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ada is totally awesome!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {2 + 2}
        </p>
        <ul>
          {studentComponents}
        </ul>







      </div>
    );
  }

}

export default App;
