import React, { Component } from 'react';
import './LogInForm.css';

// create a React Component called _App_
class LogInForm extends Component {

  render(){
    return (
      <div className={this.props.logInFormDisplay}>
        <input
          type="text"
          placeholder="username"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <div className="formbutton" onClick={this.props.loginFunctions}>
          log in
        </div>
      </div>
    );
  }
}

export default LogInForm;
