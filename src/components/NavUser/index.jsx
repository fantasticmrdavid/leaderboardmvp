import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const NavUser = ({ logout, user }) => {
  const {
    Container,
    Name,
    Action,
  } = styles;

  const { username } = user;

  return (
    <Container>
      <Name>{`Hi ${username}`}</Name>
      <Action onClick={() => logout()}>Log Out</Action>
    </Container>
  );
};

NavUser.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default NavUser;
