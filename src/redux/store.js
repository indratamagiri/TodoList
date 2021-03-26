import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import immutablePersistenceTransform from '../utils/ImmutablePersistenceTransform';

// import logger from 'redux-logger';

import reducer from './reducers';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  blacklist: [
    'home'
  ],
  whiteList: [
    'Name'
  ],
  transforms: [immutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default () => ({ store, persistor });
