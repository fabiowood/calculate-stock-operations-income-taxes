import { calculateIncomeTaxesActionTypes } from './calculate-income-taxes.action.types';

export const updateAveragePriceAndQuantity = (operationData) => {
  return ({
    type: calculateIncomeTaxesActionTypes.UPDATE_AVERAGE_PRICE_AND_QUANTITY,
    payload: operationData
  })
};

export const calculateStockOperationResults = (operationData) => {
  return ({
    type: calculateIncomeTaxesActionTypes.CALCULATE_OPERATION_RESULTS,
    payload: operationData
  })
};



