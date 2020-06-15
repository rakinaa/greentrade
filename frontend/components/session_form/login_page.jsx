import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { sample } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/session_actions";

const LoginPage = (props) => {
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const currUser = Object.assign({}, user);
    dispatch(login(currUser));
  });

  const update = useCallback((field) => {
    return (e) => {
      const newVal = e.currentTarget.value;
      setUser((prevUser) => {
        return {
          ...prevUser,
          [field]: newVal,
        };
      });
    };
  });

  const demoLogin = useCallback((e) => {
    e.preventDefault();
    const logins = [
      "guestuser1",
      "guestuser2",
      "guestuser3",
      "guestuser4",
      "guestuser5",
    ];
    const randUser = sample(logins);
    const pass = "1234567890";

    let c = 0;
    let p = 0;

    const userInt = setInterval(() => {
      if (c > randUser.length) {
        const passInt = setInterval(() => {
          if (p > pass.length) {
            const currUser = Object.assign({}, user);
            dispatch(login(currUser));
            clearInterval(passInt);
          } else {
            setUser((prevUser) => {
              return {
                ...prevUser,
                password: pass.slice(0, p),
              };
            });
          }
          p++;
        }, 50);
        clearInterval(userInt);
      } else {
        setUser((prevUser) => {
          return {
            ...prevUser,
            username: randUser.slice(0, c),
          };
        });
      }
      c++;
    }, 50);
  });

  const getErrors = useCallback((keyword) => {
    return errors.filter((error) => error.includes(keyword));
  });

  const loginErr = getErrors("username/password");

  return (
    <div className="login-page-container">
      <img
        className="login-bg"
        src={window.signin_background_png}
        alt="login_bg"
      />
      <div className="login-form-container">
        <form className="login-form-box">
          <h3 className="login-heading">Welcome to Greentrade</h3>
          {loginErr.length > 0 ? (
            <p className="form-error">{loginErr}</p>
          ) : null}
          <div className="login-form">
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
              Not a Greentrade member?{" "}
              <Link className="inner-link" to="/signup">
                Sign Up
              </Link>
            </p>

            <div className="btn-container">
              <button onClick={handleSubmit} className="form-button">
                Sign In
              </button>
              <button onClick={demoLogin} className="form-button">
                Demo User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
