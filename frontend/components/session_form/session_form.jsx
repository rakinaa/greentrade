import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FormInput from './form_input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { sample } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  demoLogin(e) {
    e.preventDefault();
    const logins = ['guestuser1', 'guestuser2', 'guestuser3', 'guestuser4', 'guestuser5']
    const randUser = sample(logins)
    const pass = '1234567890';

    let c = 0;
    let p = 0

    
    const userInt = setInterval(() => {
      if (c > randUser.length) {
        const passInt = setInterval(() => {
          if (p > pass.length) {
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(this.props.closeModal);
            clearInterval(passInt);
          } else {
            this.setState({
              password: pass.slice(0, p) 
            })
          }
          p++;
        }, 50)
        clearInterval(userInt);
      } else {
        this.setState({
          username: randUser.slice(0, c) 
        })
      }
      c++;
    }, 50)


  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  getErrors(keyword) {
    return this.props.errors.filter((error) => error.includes(keyword))
  }

  render() {
    const { errors, heading, formType, message, closeModal, otherForm } = this.props;
    const loginErr = this.getErrors("username/password");
    return (
      <div className="login-form-container">
        <form className="login-form-box">
          <h3>{heading}</h3>
          <FontAwesomeIcon icon={faTimes} className="close-x" onClick={this.props.closeModal} />
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          {loginErr.length > 0 ? <p className="form-error">{loginErr}</p> : null}
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <FormInput val={this.state.username} errors={this.getErrors('Username')} label={"Userame"} update={this.update('username')} type={'text'} />
            {this.props.hasEmail ? <FormInput errors={this.getErrors('Email')} label={"Email"} update={this.update('email')} type={'text'} /> : null}
            <FormInput val={this.state.password} errors={this.getErrors('Password')} label={"Password"} update={this.update('password')} type={'password'} />
            <input onClick={this.handleSubmit} className="blue-button form-submit" type="submit" value={this.props.btnText} />
            <button onClick={this.demoLogin.bind(this)} className="blue-button form-submit demo">Demo User Login</button>
          </div>
          <p className="redirect-message">{message}{otherForm}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
