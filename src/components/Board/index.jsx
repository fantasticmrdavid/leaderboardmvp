import React from 'react';
import PropTypes from 'prop-types';
import Competitor from 'components/Competitor';
import * as styles from './styles';

const Board = (props) => {
  const { Container } = styles;
  const { competitors } = props;
  return (
    <Container>
      { competitors.map((c, i) => <Competitor key={`c_${c.id}`} {...c} leader={i === 0} />) }
    </Container>
  );
};

Board.propTypes = {
  competitors: PropTypes.array,
};

export default Board;
