import React, { Component } from 'react';

class Student extends Component {

  render() {
    const studentName = 'Hermine Granger';
    const studentAge = 18;
    const studentEmail = 'hermine@hogwarts.edu'
    return (
      <article>
        <h3>{studentName}</h3>
        <p>Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
      </article>
    );
  }

}

export default Student;
