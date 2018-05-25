import React, { Component } from 'react';

class Student extends Component {

  render() {
    const studentAge = this.props.studentData.age;
    const studentEmail = this.props.studentData.email;
    return (
      <article>
        <h3>{this.props.studentData.name}</h3>
        <p>Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
      </article>
    );
  }

}

export default Student;
