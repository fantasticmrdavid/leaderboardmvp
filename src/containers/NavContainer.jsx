import React from 'react';
import { connect } from 'react-redux';
import Nav from 'components/Nav';
import { showLoginDialog } from 'actions/dialogs';

const NavContainer = (props) => {
  return <Nav {...props} />;
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user: user.id ? user : undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLogin: () => dispatch(showLoginDialog()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavContainer);
