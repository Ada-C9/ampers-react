import React, { Component } from 'react';
import './NewStudentForm.css';
import PropTypes from 'prop-types';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };
  }

  static propTypes = {
    addStudent: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    const updatedState = {}
    updatedState[key] = value;

    // this.onFieldChange('name', 'Dumbledore')

    this.setState(updatedState);
    console.log(`Updated = ${key}`);
  }

  emailValid = () => {
    return this.state.email.match(/\S+@\S+/);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.emailValid()) {
      this.props.addStudent({
        name: this.state.name,
        email: this.state.email,
      });

      this.setState({
        name: '',
        email: '',
      });
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={ this.onSubmit  }
          className="new-student-form"
          >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={(event) => { this.onFieldChange('name', event.target.value) }}
              value={this.state.name}
              />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={(event) => { this.onFieldChange('email', event.target.value) }}
              value={this.state.email}
              className={this.emailValid() ? 'valid': 'invalid'}
              />
          </div>
          <input
            className="button success"
            type="submit"
            value="Add Student"
            />
        </form>
      </div>
    );
  }
}

export default NewStudentForm;
