import React, { Component } from 'react';
import '../App.css';
import Student from './Student';

class StudentCollection extends Component {

  constructor() {
    super();

    this.state = {
      students: [
        {
          name: 'Hermione Granger',
          email: 'Hermione@hogwarts.edu',
          present: false,
        },
        {
          name: 'Ada Lovelace',
          email: 'ada@adadev.org',
          present: false,
        }
      ]
    };
  }

  onStudentPresentChange = ( studentIndex ) => {
    let updatedStudents = this.state.students;
    updatedStudents[ studentIndex ].present = true;

    this.setState( {
      students: updatedStudents
    } );
  }

  render() {
    console.log("In render function, this is the student data on StudentCollection's state");
    console.log(this.state.students);

    const studentComponents = this.state.students.map((student, index) => {
      return (
        <li key={student.email}>
          <Student
             name={student.name}
             email={student.email}
             onStudentPresentChange = { this.onStudentPresentChange }
             index = { index }
          />
        </li>
      );
    });

    return (
      <section>
        <h2>Student Collection</h2>
        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }
}

export default StudentCollection;
