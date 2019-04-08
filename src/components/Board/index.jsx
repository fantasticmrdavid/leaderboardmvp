import React from 'react';
import PropTypes from 'prop-types';
import Competitor from 'components/Competitor';
import * as styles from './styles';

const Board = (props) => {
  const { Access, Container, Title } = styles;
  const { access, competitors, title } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Access>{`${access} Board`}</Access>
      { competitors.map((c, i) => <Competitor key={`c_${c.id}`} {...c} position={i} />) }
    </Container>
  );
};

Board.propTypes = {
  access: PropTypes.string,
  competitors: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default Board;
