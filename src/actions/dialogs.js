import {
  DIALOGS_RESET,
  LOGIN_DIALOG_SHOWN,
} from 'Constants';

export const showLoginDialog = () => {
  return { type: LOGIN_DIALOG_SHOWN };
};

export const resetDialogs = () => {
  return { type: DIALOGS_RESET };
};
