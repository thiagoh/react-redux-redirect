import { combineReducers } from 'redux';
import { MainReducer } from './main';

const combinedReducer = combineReducers({
  mainReducer: MainReducer
});
const rootReducer = (state, action) => {
  console.log('Hello from rootReducer');
  return combinedReducer(state, action);
};

export default rootReducer;
