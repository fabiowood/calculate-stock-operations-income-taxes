import { createSelector } from 'reselect';

export const selectIncomeTaxes = state => state.calculateIncomeTaxes;

export const selectAllStockOperations = createSelector(
  [selectIncomeTaxes],
  calculateIncomeTaxes => calculateIncomeTaxes.stockOperations
);

export const selectAllInfoByStockTitle = (stockTitle) => createSelector(
  [selectIncomeTaxes],
  calculateIncomeTaxes => calculateIncomeTaxes.stockOperations[`${stockTitle}`]
);

export const selectAllOperationsByStockTitle = (stockTitle) => createSelector(
  [selectIncomeTaxes],
  calculateIncomeTaxes => calculateIncomeTaxes.stockOperations[`${stockTitle}`].operations
);


