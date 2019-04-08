import {
  BOARDS_FETCHED,
} from 'Constants';

import boardData from 'data/boards';

// NOTE: This will be unnecessary in the actual product as board list will be determined by Back-End
const getBoardListByUser = (user) => {
  if (!user.access) return boardData.filter(b => b.access === 'public');

  const { access, type } = user;
  if (type === 'referee') return boardData;

  return boardData.filter(b => access.indexOf(b.id) !== -1);
};

// NOTE: This will be replaced with an API fetch in the actual product
export const fetchBoards = () => (dispatch, getState) => {
  const { user } = getState();
  return dispatch({
    type: BOARDS_FETCHED,
    boards: getBoardListByUser(user),
  });
};
