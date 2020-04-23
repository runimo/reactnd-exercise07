import React, { Component } from 'react';

class CreateUser extends Component {
  render () {
    return (
      <div className="form">
        <div className="input__container">
      	  <label
            className="input_label"
            for="userName">
            User name
          </label>
          <input
           className="input__field"
           id="userName"
           type="text" />
        </div>
        <div className="input__container">
      	  <label
           for="firstName">
           First name
          </label>
          <input
           className="input__field"
           id="firstName"
           type="text" />
        </div>
        <div className="input__container">
      	  <label
           for="lastName">
           Last name
          </label>
          <input
      	   className="input__field"
           id="lastName"
           type="text" />
        </div>
        <button className="btn">
          Add
        </button>
      </div>
    )
  }
}


export default CreateUser