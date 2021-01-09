const findStockData = (currentStockOperations) => {
  const latestAveragePrice = currentStockOperations.averagePrice;
  const latestAverageQuantity = currentStockOperations.averageQuantity;
  const accumulatedLoss = currentStockOperations.accumulatedLoss;
  const stockOperations = currentStockOperations.operations;
  const stockData = {
    averagePrice: latestAveragePrice,
    averageQuantity: latestAverageQuantity,
    accumulatedLoss: accumulatedLoss,
    allOperations: stockOperations
  }
  return stockData;
}

const registerStockBuyOperation = (...args) => {
  const stockAllOperations = args[0];
  const stockTitle = args[1];
  return stockAllOperations[`${stockTitle}`].operations.push({
  operationType: args[2],
  operationDate: args[3],
  averagePrice: Number(args[4].toFixed(2)),
  averageQuantity: args[5],
  operationPrice: Number(Number(args[6]).toFixed(2)),
  operationQuantity: Number(args[7]),
  createdAt: args[8],
  });
};

const registerStockSellOperation = (...args) => {
  const stockAllOperations = args[0];
  const stockTitle = args[1];
  return stockAllOperations[`${stockTitle}`].operations.push({
    operationType: args[2],
    operationDate: args[3],
    averagePrice: Number(args[4].toFixed(2)),
    averageQuantity: args[5],
    operationPrice: Number(Number(args[6]).toFixed(2)),
    operationQuantity: Number(args[7]),
    createdAt: args[8],
    brokerage: Number(Number(args[9]).toFixed(2)),
    operationEarnedRevenue: Number(Number(args[10]).toFixed(2)),
    incomeTax: Number(Number(args[11]).toFixed(2)),
  });
};

const calculateAverageQuantity = (...args) => {
  const newAverageQuantity = args.reduce((acc, current) => acc + current, 0);
  return newAverageQuantity;
};

export const updateAveragePriceAndQuantity = (operationData, currentStockOperations) => {
  const {operationType, operationDate, stockTitle, operationPrice, operationQuantity, brokerage, createdAt } = operationData;

  if (!currentStockOperations.stockOperations[`${stockTitle}`]) {
    currentStockOperations.stockOperations[`${stockTitle}`] = {
      averagePrice: 0.00,
      averageQuantity: 0.00,
      accumulatedLoss: 0.00,
      operations: []
    }
  }
  const stockData = findStockData(currentStockOperations.stockOperations[`${stockTitle}`]);

  registerStockBuyOperation(currentStockOperations.stockOperations, `${stockTitle}`, operationType, operationDate, stockData.averagePrice, stockData.averageQuantity, operationPrice, operationQuantity, createdAt);

  const newAverageQuantity = calculateAverageQuantity(stockData.averageQuantity, Number(operationQuantity));
  const newAveragePrice = (stockData.averagePrice * stockData.averageQuantity + Number(operationPrice) * Number(operationQuantity) + Number(brokerage)) / newAverageQuantity;

  currentStockOperations.stockOperations[`${stockTitle}`].averagePrice = newAveragePrice;
  currentStockOperations.stockOperations[`${stockTitle}`].averageQuantity = newAverageQuantity;
  
  return currentStockOperations.stockOperations;
}

export const calculateStockOperationResults = (operationData, currentStockOperations) => {
  
  const {operationType, operationDate, stockTitle, operationPrice, operationQuantity, brokerage, createdAt } = operationData;

  const stockData = findStockData(currentStockOperations.stockOperations[`${stockTitle}`]);

  const operationEarnedRevenue = (Number(operationPrice) - stockData.averagePrice) * Number(operationQuantity) - Number(brokerage);

  const incomeTax = calculateOperationIncomeTax(operationEarnedRevenue, stockData.accumulatedLoss);

  const accumulatedLoss = updateAccumulatedLoss(operationEarnedRevenue, stockData.accumulatedLoss);

  const newAverageQuantity = calculateAverageQuantity(stockData.averageQuantity, Number(operationQuantity * -1));

  registerStockSellOperation(currentStockOperations.stockOperations, `${stockTitle}`, operationType, operationDate, stockData.averagePrice, stockData.averageQuantity, operationPrice, operationQuantity, createdAt, brokerage, operationEarnedRevenue, incomeTax);

  for (let key in currentStockOperations.stockOperations) {
    if (key === `${stockTitle}`) {
      currentStockOperations.stockOperations[key].averagePrice = stockData.averagePrice;
      currentStockOperations.stockOperations[key].averageQuantity = newAverageQuantity;
      currentStockOperations.stockOperations[key].accumulatedLoss = accumulatedLoss;
      }
  }
  return currentStockOperations.stockOperations;
}

const calculateOperationIncomeTax = (...args) => {
  const incomeTaxRate = 0.15;
  const operationEarnedRevenue = args[0];
  const accumulatedLoss = args[1];
  let incomeTax = 0;
  if (operationEarnedRevenue >= 0) {
  incomeTax = (operationEarnedRevenue - Math.min(operationEarnedRevenue, accumulatedLoss)) * incomeTaxRate;
  }
  return incomeTax;
}

const updateAccumulatedLoss = (...args) => {
  const operationEarnedRevenue = args[0];
  let accumulatedLoss = args[1];
  if (operationEarnedRevenue >= 0) {
    accumulatedLoss -= Math.min(operationEarnedRevenue, accumulatedLoss);
  } else {
    accumulatedLoss += operationEarnedRevenue;
  }
  return accumulatedLoss !== 0 ? accumulatedLoss * -1 : 0;
}

