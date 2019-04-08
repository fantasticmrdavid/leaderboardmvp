import {
  USER_FETCHED,
  USER_AUTH_REQUESTED,
  USER_AUTH_SUCCEEDED,
  USER_AUTH_FAILED,
  USER_LOGGED_OUT,
  USER_RESET,
} from 'Constants';

import { fetchBoards } from 'actions/boards';
import { resetDialogs } from 'actions/dialogs';
import users from 'data/users';

// NOTE: User authentication should be handled by Back End in actual product.
export const loginUser = values => (dispatch) => {
  const { username, password } = values;
  const foundUser = users.find(u => (username === u.username) && (password === u.password));

  dispatch({ type: USER_AUTH_REQUESTED });

  if (!foundUser) return dispatch({ type: USER_AUTH_FAILED });

  dispatch({
    type: USER_FETCHED,
    user: foundUser,
  });
  dispatch(resetDialogs());
  dispatch(fetchBoards());
  return dispatch({
    type: USER_AUTH_SUCCEEDED,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: USER_RESET });
  dispatch(fetchBoards());
  return dispatch({ type: USER_LOGGED_OUT });
};
