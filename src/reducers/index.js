import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import boards from './boards';
import user from './user';

export default history => combineReducers({
  boards,
  router: connectRouter(history),
  user,
});
