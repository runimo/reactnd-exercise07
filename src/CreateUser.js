import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateUser extends Component {
  
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      topFiveGames: []
    },
    userExists: false,
    showSuccess: false
  }

  updateUserExists = currentUserName => {
    const users = this.props.users
    for (let user of users) {
      if (user.userName === currentUserName) {
        this.setState(() => ({
          showSuccess: false
        }))
        return true;
      }
    }
    
    this.setState(() => ({
      showSuccess: true
    }))
    return false;
  };
  
  createUser = event => {
    event.preventDefault();
    const userExists = this.updateUserExists(this.state.user.userName);

    if (!userExists) {
      this.props.onCreateUser(this.state.user);
    }

    this.setState(() => ({
      userExists,
    }));
    this.setState(() => ({
      user: {
      firstName: '',
      lastName: '',
      userName: '',
      topFiveGames: []
    }
    }))
  }

  updateUser = event => {
    const { name, value } = event.target;
    const users = this.props.users
    
    this.setState((currentState) => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value,
        id: parseInt(users.length, 10) + 1
      },
    }))
  }

  disabled = () => {
      const { firstName, lastName, username } = this.state.user;
      return firstName === '' || lastName === '' || username === '';
    };

  render () {
    const { firstName, lastName, userName } = this.state.user;

    return (
      <div className="form">
        <form onSubmit={this.createUser}>
        {this.state.userExists && (
          <p className="error">A user with that username already exists.</p>
        )}
		{this.state.showSuccess && (
          <p className="success">User has been created!</p>
        )}
          <div className="input__container">
            <label
              className="input_label"
              htmlFor="userName">
              User name
            </label>
            <input
             className="input__field"
             id="userName"
			 name="userName"
             value={userName}
             onChange={this.updateUser}
             type="text" />
          </div>
          <div className="input__container">
            <label
             htmlFor="firstName">
             First name
            </label>
            <input
             className="input__field"
             value={firstName}
             onChange={this.updateUser}
             id="firstName"
			 name="firstName"
             type="text" />
          </div>
          <div className="input__container">
            <label
             htmlFor="lastName">
             Last name
            </label>
            <input
             className="input__field"
             value={lastName}
             id="lastName"
			 name="lastName"
             onChange={this.updateUser}
             type="text" />
          </div>
          <button className="btn" disabled={this.disabled()}>
            Add
          </button>
        </form>
      </div>
    )
  }
}

CreateUser.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};


export default CreateUser