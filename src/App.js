import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {

  render() {
    const students = [
      {
        name: 'Hermione Granger',
        age: 18,
        email: 'Hermione@hogwarts.edu'
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
        <header>
          <h1 className="App-title">Student Classroom App!</h1>
        </header>
        <ul>
          {studentComponents}
        </ul>
      </div>
    );
  }

}

export default App;
