import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import boards from './boards';
import dialogs from './dialogs';
import user from './user';

const persistConfig = {
  user: {
    key: 'user',
    storage,
  },
};

export default history => combineReducers({
  boards,
  dialogs,
  router: connectRouter(history),
  user: persistReducer(persistConfig.user, user),
});
