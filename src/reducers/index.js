import { combineReducers } from 'redux';
import { MainReducer } from './main';

const rootReducer = combineReducers({
  mainReducer: MainReducer
});

export default rootReducer;
