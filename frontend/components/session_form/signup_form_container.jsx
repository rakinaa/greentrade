import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    initialState: {
      username: '',
      email: '',
      password: ''
    },
    errors: errors.session,
    formType: 'signup',
    heading: 'Sign up for Pictr',
    message: 'Already a Pictr member? ',
    btnText: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <span className="redirect-link" onClick={() => dispatch(openModal('login'))}>
        Log in here
      </span>
    ),
    hasEmail: true,
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);