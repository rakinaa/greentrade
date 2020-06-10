import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpPage from './sign_up_page';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
export default SignUpPageContainer;