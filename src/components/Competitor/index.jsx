import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Competitor = (props) => {
  const {
    Container,
    Firstname,
    Position,
    Surname,
    Score,
  } = styles;
  const {
    firstname,
    position,
    surname,
    score,
  } = props;

  return (
    <Container leader={position === 0}>
      <Position>{position + 1}</Position>
      <Surname>{surname}</Surname>
      <Firstname>{firstname}</Firstname>
      <Score>{score}</Score>
    </Container>
  );
};

Competitor.propTypes = {
  firstname: PropTypes.string.isRequired,
  position: PropTypes.number,
  surname: PropTypes.string.isRequired,
  score: PropTypes.number,
};

export default Competitor;
