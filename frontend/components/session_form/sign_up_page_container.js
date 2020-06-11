import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignUpPage from './sign_up_page';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
  };
};

const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
export default SignUpPageContainer;