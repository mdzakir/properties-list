import { combineReducers } from 'redux';

import productsReducer from './propertyReducer';

export default combineReducers({
  properties: productsReducer
})