import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Competitor = (props) => {
  const {
    Container,
    Firstname,
    Surname,
    Score,
  } = styles;
  const { firstname, surname, score } = props;

  return (
    <Container>
      <Surname>{surname}</Surname>
      <Firstname>{firstname}</Firstname>
      <Score>{score}</Score>
    </Container>
  );
};

Competitor.propTypes = {
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  score: PropTypes.number,
};

export default Competitor;
