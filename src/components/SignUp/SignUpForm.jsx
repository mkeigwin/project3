import React, { Component } from 'react';
import style from './SignUpForm.css';

// create a React Component called _App_
class SignUpForm extends Component {

  render(){
    return (
      <div className={this.props.signUpFormDisplay}>
        <input
          type="text"
          placeholder="username"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <div className="formbutton" onClick={this.props.handleFormSubmit}>
          register
        </div>
      </div>
    );
  }
}

export default SignUpForm;