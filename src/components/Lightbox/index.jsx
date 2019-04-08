import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Lightbox = ({ active, onClick }) => {
  const { Container } = styles;
  return <Container active={active} onClick={() => onClick()} />;
};

Lightbox.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Lightbox;
