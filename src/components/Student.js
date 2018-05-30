import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPresent: true,
      name: props.name,
    };
  }

  isTopStudent = () => {
    if (this.props.name === 'Hermione Granger') {
      return 'top-student';
    }

    return 'student';
  }

  onToggleButton = () => {
    const isPresent = !this.state.isPresent
    this.setState({
      isPresent,
    });
  }

  onNameChange = (event) => {
    console.log(event.target.value);
    console.log(this.props.name);

    this.setState({
      name: event.target.value,
    })
  }

  render() {
    const studentAge = this.props.studentData.age;
    const studentEmail = this.props.email;
    return (
      <article
        className={ this.isTopStudent() }>
        <h3>
          {this.state.name}
        </h3>
        <input onChange={ this.onNameChange }
          type="text"
          name="name"
        />
        <h4>
          {this.state.isPresent ? "In class": "Absent"}
        </h4>
        <p>Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
        <button
          onClick={ this.onToggleButton }>
          Toggle Present
        </button>

      </article>
    );
  }

}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
};








export default Student;
