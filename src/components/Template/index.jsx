import React from 'react';
import PropTypes from 'prop-types';
import DialogsContainer from 'containers/DialogsContainer';
import NavContainer from 'containers/NavContainer';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;
  return (
    <Container>
      <NavContainer />
      <Content>
        {children}
      </Content>
      <DialogsContainer />
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
