import React from 'react';
import PropTypes from 'prop-types';
import NavUserContainer from 'containers/NavUserContainer';
import * as styles from './styles';

const Nav = ({ showLogin, user }) => {
  const {
    Container,
    Logo,
    Option,
  } = styles;

  return (
    <Container>
      <Logo>Sisu Leaderboard</Logo>
      { user ? <NavUserContainer /> : <Option onClick={() => showLogin()}>Sign In</Option> }
    </Container>
  );
};

Nav.propTypes = {
  showLogin: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default Nav;
