import React from 'react';
import PropTypes from 'prop-types';
import LoginFormContainer from 'containers/LoginFormContainer';
import * as styles from './styles';

const LoginDialog = ({ onClose }) => {
  const {
    CloseButton,
    Container,
  } = styles;

  return (
    <Container>
      <CloseButton onClick={() => onClose()}>X</CloseButton>
      <LoginFormContainer />
    </Container>
  );
};

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginDialog;
