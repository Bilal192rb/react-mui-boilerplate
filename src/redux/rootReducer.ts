import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import counterReducer from './slices/counterSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export { rootPersistConfig, rootReducer };
