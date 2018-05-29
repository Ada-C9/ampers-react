import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {

  

  // isTopStudent() {
  //   return this.props.name === 'Hermine Granger';
  // }

  isTopStudent = () => {
    if (this.props.name === 'Hermine Granger') {
      return 'top-student';
    }

    return 'student';
  }

  render() {
    // const studentStyle = {
    //   color: 'purple',
    //   fontSize: '20pt',
    // };

    const studentAge = this.props.studentData.age;
    const studentEmail = this.props.email;
    return (
      <article
        className={ this.isTopStudent() }>
        <h3>{this.props.name}</h3>
        <p>Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
      </article>
    );
  }

}

export default Student;
