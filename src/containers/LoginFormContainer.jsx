import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'actions/user';
import LoginForm from 'components/LoginForm';

const LoginFormContainer = props => <LoginForm {...props} />;

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(loginUser(username, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginFormContainer);
