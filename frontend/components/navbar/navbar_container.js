import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = ({ session }, ownProps) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;