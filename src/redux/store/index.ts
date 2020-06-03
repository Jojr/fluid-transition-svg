import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'; //Dispatch after async done

//import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['main'], // Reducers que serão persisitidos
  //blacklist: [], // Reducers que NÃO serão persisitidos
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, compose(middleware));
const persistor = persistStore(store);

export { store, persistor };
