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



  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   isPresent: PropTypes.bool,
  // }

  // isTopStudent() {
  //   return this.props.name === 'Hermine Granger';
  // }

  isTopStudent = () => {
    if (this.props.name === 'Hermine Granger') {
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
    // const name = event.target.value;
    // this.setState({
    //   name,
    // });

    this.setState({
      name: event.target.value,
    })
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
