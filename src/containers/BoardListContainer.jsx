import React from 'react';
import { connect } from 'react-redux';
import BoardList from 'components/BoardList';
import { fetchBoards } from 'actions/boards';

const BoardListContainer = (props) => {
  return <BoardList {...props} />;
};

const mapStateToProps = (state) => {
  const { boards } = state;
  const { loaded, listing } = boards;
  return {
    boards: listing,
    loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBoards: () => dispatch(fetchBoards()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardListContainer);
