import { calculateIncomeTaxesActionTypes } from './calculate-income-taxes.action.types';
import { updateAveragePriceAndQuantity, calculateStockOperationResults } from './calculate-income-taxes.utils';

const INITIAL_STATE = {
  stockOperations: { },
}

const calculateIncomeTaxesReducer = (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    case calculateIncomeTaxesActionTypes.UPDATE_AVERAGE_PRICE_AND_QUANTITY:
      return {
        ...currentState,
        stockOperations: updateAveragePriceAndQuantity(action.payload, currentState)
      };
    case calculateIncomeTaxesActionTypes.CALCULATE_OPERATION_RESULTS:
      return {
        ...currentState,
        stockOperations: calculateStockOperationResults(action.payload, currentState)
      };
    
    default:
      return currentState;
  }
}

export default calculateIncomeTaxesReducer;