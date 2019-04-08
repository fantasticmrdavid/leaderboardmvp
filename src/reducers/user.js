import {
  USER_FETCHED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {};

const reducers = {
  [USER_FETCHED]: (state, action) => action.user,
};

export default createReducer(initialState, reducers);
