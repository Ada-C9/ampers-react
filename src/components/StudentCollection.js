import React, { Component } from 'react';
import '../App.css';
import Student from './Student';
import NewStudentForm from './NewStudentForm';

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

  addStudent = (student) => {
    const students = this.state.students;
    students.push(student);
    this.setState({
      students,
    });
  }

  changeName = (value, index) => {
    const students = this.state.students;
    students[index].name = value;

    this.setState({
      students,
    });
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
             index={index}
             changeName={this.changeName}
          />
        </li>
      );
    });

    return (
      <section>
        <h2>Student Collection</h2>
        <NewStudentForm
          addStudent={this.addStudent}
          />
        <ul>
          {studentComponents}
        </ul>
      </section>
    );
  }
}

export default StudentCollection;
