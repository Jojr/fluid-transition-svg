import { combineReducers } from 'redux';

import main from './main';

/*export default combineReducers({
  main,
});*/

export const rootReducer = combineReducers({
  main,
});

export type RootState = ReturnType<typeof rootReducer>;
