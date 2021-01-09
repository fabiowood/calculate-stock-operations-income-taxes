const updateAveragePriceAndQuantity = (stockTitle, latestAveragePrice, latestQuantity, operationPrice, operationQuantity, brokerage) => {
  // findStockData(stockTitle);
  const newAverageQuantity = calculateAverageQuantity(latestQuantity, operationQuantity);
  const newAveragePrice = (latestAveragePrice * latestQuantity + operationPrice * operationQuantity + brokerage) / newAverageQuantity;
  const updateAveragePriceAndQuantity = { 
    stockOperations: { },
  };
  updateAveragePriceAndQuantity.stockOperations[`${stockTitle}`] = {
    averagePrice: newAveragePrice,
    averageQuantity: newAverageQuantity,
  }
  console.log(updateAveragePriceAndQuantity);
  console.log(updateAveragePriceAndQuantity.stockOperations[`${stockTitle}`].averageQuantity);
  return updateAveragePriceAndQuantity.stockOperations;
}

const calculateAverageQuantity = (...args) => {
  const newAverageQuantity = args.reduce((acc, current) => acc + current, 0);
  return newAverageQuantity;
}

const calculateStockOperationResults = (stockTitle, latestAveragePrice, latestQuantity, operationPrice, operationQuantity, brokerage, totalLoss) => {
  const operationEarnedRevenue = (operationPrice - latestAveragePrice) * operationQuantity - brokerage;
  const incomeTax = calculateOperationIncomeTax(operationEarnedRevenue, totalLoss);
  const accumulatedLoss = updateAccumulatedLoss(operationEarnedRevenue, totalLoss);
  const newAverageQuantity = calculateAverageQuantity(latestQuantity, operationQuantity * -1);
  const stockResults = {
    stockOperations: { },
  }
  stockResults.stockOperations[`${stockTitle}`] = {
    averagePrice: latestAveragePrice,
    averageQuantity: newAverageQuantity,
    accumulatedLoss: accumulatedLoss,
    operations: [
      {
        averagePrice: latestAveragePrice,
        averageQuantity: newAverageQuantity,
        operationPrice: operationPrice,
        operationQuantity: operationQuantity,
        operationEarnedRevenue: operationEarnedRevenue,
        brokerage: brokerage,
        incomeTax: incomeTax
      }
    ]
  }
  console.log(stockResults.stockOperations[`${stockTitle}`]);
  console.log(stockResults.stockOperations[`${stockTitle}`].operations[0].incomeTax);
  return stockResults.stockOperations;
}

const calculateOperationIncomeTax = (...args) => {
  const incomeTaxRate = 0.15;
  const operationEarnedRevenue = args[0];
  const accumulatedLoss = args[1];
  const incomeTax = (operationEarnedRevenue - Math.min(operationEarnedRevenue, accumulatedLoss)) * incomeTaxRate;
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
  return accumulatedLoss;
}

updateAveragePriceAndQuantity('PETR4', 0, 0, 25.90, 100, 8.50);
updateAveragePriceAndQuantity('PETR4', 25.98, 100, 26.40, 200, 8.50);
updateAveragePriceAndQuantity('PETR4', 26.29, 300, 27.87, 100, 8.50);
calculateStockOperationResults('PETR4', 26.70625, 400, 26.53, 100, 8.50, 0);
calculateStockOperationResults('PETR4', 26.70625, 300, 27.39, 100, 8.50, 26.125);
