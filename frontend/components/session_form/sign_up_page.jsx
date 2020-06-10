import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currUser = Object.assign({}, user);
    props.signup(currUser);
  }

  const update = (field) => {
    return e => {
      const newVal = e.currentTarget.value; 
      setUser(prevUser => {
        return {
          ...prevUser,
          [field]: newVal
        }
      });
    } 
  }

  const getErrors = (keyword) => {
    return props.errors.filter((error) => error.includes(keyword))
  }

  // const loginErr = getErrors("username/password");

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
        <form className="signup-form-box">
          <h3 className="signup-heading">Welcome to Greentrade</h3>
          <div className="signup-form">
            <p className="form-label">Username</p>
            <input 
              onChange={update("username")} 
              type="text" 
              value={user.username} 
              className="form-input"
            />

            <p className="form-label">Password</p>
            <input 
              onChange={update("password")} 
              type="password" 
              value={user.password} 
              className="form-input"
            />

            <p className="redirect">
              Already have an account? <Link className="inner-link" to="/login">Sign In</Link>
            </p>

            <div className="btn-container">
              <button onClick={handleSubmit} className="form-button">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage;