import { createSelector } from 'reselect';

export const selectIncomeTaxes = state => state.calculateIncomeTaxes;

export const selectAllStockOperations = createSelector(
  [selectIncomeTaxes],
  calculateIncomeTaxes => calculateIncomeTaxes.stockOperations
);

