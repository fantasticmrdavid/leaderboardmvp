import {
  USER_FETCHED,
  USER_RESET,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {};

const reducers = {
  [USER_FETCHED]: (state, action) => action.user,
  [USER_RESET]: () => initialState,
};

export default createReducer(initialState, reducers);
