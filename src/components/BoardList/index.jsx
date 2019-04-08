import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from 'components/Board';
import * as styles from './styles';

class BoardList extends Component {
  constructor(props) {
    super(props);

    const { loaded, loadBoards } = props;
    if (!loaded) loadBoards();
  }

  render() {
    const { Container } = styles;
    const { boards } = this.props;
    return (
      <Container>
        { boards.map(b => <Board key={`board_${b.id}`} {...b} />) }
      </Container>
    );
  }
}

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  loaded: PropTypes.bool,
  loadBoards: PropTypes.func.isRequired,
};

export default BoardList;
