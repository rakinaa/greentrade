import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup, login, clearErrors } from "../../actions/session_actions";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "./form_input";

const SignUpPage = (props) => {
  const errors = useSelector((state) => state.errors.session);
  const currUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (currUser !== null) {
      props.history.push("/show/AAPL");
    }
  }, [currUser]);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signup(user));
    },
    [user]
  );

  const update = useCallback(
    (field) => {
      return (e) => {
        const newVal = e.currentTarget.value;
        setUser((prevUser) => {
          return {
            ...prevUser,
            [field]: newVal,
          };
        });
      };
    },
    [user]
  );

  const loginUser = useCallback(() => {
    dispatch(login({ username: "guestuser1", password: "1234567890" }));
  }, [dispatch]);

  const getErrors = useCallback(
    (keyword) => {
      return errors.filter((error) => error.includes(keyword));
    },
    [errors]
  );

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
            <FormInput
              update={update("username")}
              type="text"
              val={user.username}
              label="username"
              errors={getErrors("Username")}
              className="signup-input"
            />

            <FormInput
              update={update("email")}
              type="text"
              val={user.email}
              label="email address"
              errors={getErrors("Email")}
              className="signup-input"
            />

            <FormInput
              update={update("password")}
              type="password"
              val={user.password}
              label="password"
              errors={getErrors("Password")}
              className="signup-input"
            />

            <div className="btn-container">
              <button onClick={handleSubmit} className="form-button">
                Sign Up
              </button>
              <button onClick={loginUser} className="form-button">
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
