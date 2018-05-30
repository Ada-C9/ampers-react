import React, { Component } from 'react';
import '../App.css';
import Student from './Student';

class StudentCollection extends Component {

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
      <ul>
        {studentComponents}
      </ul>
    );
  }
}

export default StudentCollection;
