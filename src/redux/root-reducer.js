import { combineReducers } from 'redux';
import calculateIncomeTaxesReducer from './calculate-income-taxes.reducer';

// We need to import all the Reducers to the Root Reducer:

const rootReducer = combineReducers({
  calculateIncomeTaxes: calculateIncomeTaxesReducer,
});

export default rootReducer;