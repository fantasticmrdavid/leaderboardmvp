import React from 'react';
import { connect } from 'react-redux';
import NavUser from 'components/NavUser';
import { logoutUser } from 'actions/user';

const NavUserContainer = (props) => {
  return <NavUser {...props} />;
};

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavUserContainer);
