import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    initialState: {
      username: '',
      password: ''
    },
    errors: errors.session,
    formType: 'login',
    heading: 'Log in to Pictr',
    message: 'Not a Pictr member? ',
    btnText: 'Log In'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <span className="redirect-link" onClick={() => dispatch(openModal('signup'))}>
        Sign up here
      </span>
    ),
    hasEmail: false,
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
