import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currUser = Object.assign({}, user);
    props.signup(currUser);
  };

  const update = (field) => {
    return (e) => {
      const newVal = e.currentTarget.value;
      setUser((prevUser) => {
        return {
          ...prevUser,
          [field]: newVal,
        };
      });
    };
  };

  const login = () => {
    props.login({ username: "guestuser1", password: "1234567890" });
  };

  const getErrors = (keyword) => {
    return props.errors.filter((error) => error.includes(keyword));
  };

  // const loginErr = getErrors("username/password");

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
        <form className="signup-form-box">
          <div className="signup-form">
            <div className="signup-heading">
              <img className="nav-img" src={window.logo_png} alt="logo" />
              <h3>Make Your Money Move</h3>
            </div>
            <h4 className="sub-heading">Become a Greentrade Member today</h4>
            <input
              onChange={update("username")}
              type="text"
              value={user.username}
              placeholder="username"
              className="form-input signup-input"
            />

            <input
              onChange={update("email")}
              type="text"
              value={user.username}
              placeholder="email address"
              className="form-input signup-input"
            />

            <input
              onChange={update("password")}
              type="password"
              value={user.password}
              placeholder="password"
              className="form-input signup-input"
            />

            <div className="btn-container">
              <button onClick={handleSubmit} className="form-button">
                Sign Up
              </button>
              <button onClick={login} className="form-button">
                Demo Login
              </button>
            </div>

            <p className="redirect">
              Already have an account?{" "}
              <Link className="inner-link" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
