import { connect } from 'react-redux';

import Greeting from './greeting';
import { logout } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default GreetingContainer;