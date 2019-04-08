import {
  BOARDS_FETCHED,
} from 'Constants';

import boardData from 'data/boards';

// NOTE: This will be unnecessary in the actual product as board list will be determined by Back-End
const getBoardListByUser = (user) => {
  if (!user.access && user.type !== 'referee') return boardData.filter(b => b.access === 'public');

  const { access, type } = user;
  if (type === 'referee') return boardData;

  return [
    ...boardData.filter(b => (b.access === 'private') && (access.indexOf(b.id) !== -1)),
    ...boardData.filter(b => b.access === 'public'),
  ];
};

// NOTE: This will be replaced with an API fetch in the actual product
export const fetchBoards = () => (dispatch, getState) => {
  const { user } = getState();
  return dispatch({
    type: BOARDS_FETCHED,
    boards: getBoardListByUser(user),
  });
};
