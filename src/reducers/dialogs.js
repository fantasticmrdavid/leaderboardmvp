import {
  DIALOGS_RESET,
  LOGIN_DIALOG_SHOWN,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  login: false,
};

const reducers = {
  [DIALOGS_RESET]: () => initialState,
  [LOGIN_DIALOG_SHOWN]: (state) => {
    return {
      ...state,
      login: true,
    };
  },
};

export default createReducer(initialState, reducers);
