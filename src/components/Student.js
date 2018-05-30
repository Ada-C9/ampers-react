import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
  }

  isTopStudent = () => {
    if (this.props.name === 'Hermione Granger') {
      return 'top-student';
    }

    return 'student';
  }

  onClickPresentButton = () => {
    console.log(this);
    this.props.onStudentPresentChange( this.props.index );
  }

  onNameChange = (event) => {
    console.log(event.target.value);
    console.log(this.props.name);

    this.setState({
      name: event.target.value,
    });
  }

  render() {
    console.log('In Student\'s render, logging props');
    console.log(this.props);
    const studentEmail = this.props.email;
    return (
      <article
        className={ this.isTopStudent() }>
        <h3>
          {this.state.name}
        </h3>
        <label>Change this name: </label>
        <input onChange={ this.onNameChange }
          type="text"
          name="name"
        />
        <p>email: {studentEmail}</p>
        <button
          onClick={ this.onClickPresentButton }>
          Click to mark that {this.state.name} is present
        </button>

      </article>
    );
  }

}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onStudentPresentChange: PropTypes.func,
  index: PropTypes.number.isRequired,
};








export default Student;
