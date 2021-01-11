/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */

const findStockData = (currentStockOperations) => {
  const stockData = {
    averagePrice: currentStockOperations.averagePrice,
    averageQuantity: currentStockOperations.averageQuantity,
    accumulatedLoss: currentStockOperations.accumulatedLoss,
    allOperations: currentStockOperations.operations,
    accumulatedIncomeTaxesPerMonth: currentStockOperations.accumulatedIncomeTaxesPerMonth
  }
  return stockData;
};

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
  brokerage: Number(Number(args[8]).toFixed(2)),
  createdAt: args[9],
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
  });
};

const orderAllOperationsByDate = (stockOperations) => {
  stockOperations.sort((a,b) => {
    if (new Date(a.operationDate) === new Date(b.operationDate)) {
      return a.createdAt - b.createdAt;
    } else {
      return new Date(a.operationDate) - new Date(b.operationDate);
    }
  });
  return stockOperations;
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
      operations: [],
      accumulatedIncomeTaxesPerMonth: {  },
    }
  }
  const stockData = findStockData(currentStockOperations.stockOperations[`${stockTitle}`]);

  registerStockBuyOperation(currentStockOperations.stockOperations, `${stockTitle}`, operationType, operationDate, stockData.averagePrice, stockData.averageQuantity, operationPrice, operationQuantity, brokerage, createdAt);

  orderAllOperationsByDate(currentStockOperations.stockOperations[`${stockTitle}`].operations);

  recalculateAllOperations(currentStockOperations.stockOperations[`${stockTitle}`]);

  return currentStockOperations.stockOperations;
};

export const calculateStockOperationResults = (operationData, currentStockOperations) => {
  
  const {operationType, operationDate, stockTitle, operationPrice, operationQuantity, brokerage, createdAt } = operationData;

  const stockData = findStockData(currentStockOperations.stockOperations[`${stockTitle}`]);

  const operationEarnedRevenue = (Number(operationPrice) - stockData.averagePrice) * Number(operationQuantity) - Number(brokerage);

  registerStockSellOperation(currentStockOperations.stockOperations, `${stockTitle}`, operationType, operationDate, stockData.averagePrice, stockData.averageQuantity, operationPrice, operationQuantity, createdAt, brokerage, operationEarnedRevenue);
  
  orderAllOperationsByDate(currentStockOperations.stockOperations[`${stockTitle}`].operations);

  recalculateAllOperations(currentStockOperations.stockOperations[`${stockTitle}`]);

  return currentStockOperations.stockOperations;
};

const calculateOperationIncomeTax = (...args) => {
  const incomeTaxRate = 0.15;
  const operationEarnedRevenue = args[0];
  const accumulatedLoss = args[1];
  let incomeTax = 0;
  if (operationEarnedRevenue >= 0) {
  incomeTax = (operationEarnedRevenue - Math.min(operationEarnedRevenue, accumulatedLoss)) * incomeTaxRate;
  }
  return incomeTax;
};

const updateAccumulatedLoss = (...args) => {
  const operationEarnedRevenue = args[0];
  let accumulatedLoss = args[1];
  if (operationEarnedRevenue >= 0) {
    accumulatedLoss -= Math.min(operationEarnedRevenue, accumulatedLoss);
  } else {
    accumulatedLoss += operationEarnedRevenue;
  }
  return accumulatedLoss !== 0 ? accumulatedLoss * -1 : 0;
};

const recalculateAllOperations = (stockAllData) => {
  stockAllData.averageQuantity = 0;
  stockAllData.averagePrice = 0.00;
  stockAllData.accumulatedLoss = 0.00;
  stockAllData.operations.forEach((operation) => {
    if (operation.operationType === 'Compra') {
      const newAverageQuantity = calculateAverageQuantity(stockAllData.averageQuantity, Number(operation.operationQuantity));
      const newAveragePrice = (stockAllData.averagePrice * stockAllData.averageQuantity + Number(operation.operationPrice) * Number(operation.operationQuantity) + Number(operation.brokerage)) / newAverageQuantity;

      stockAllData.averagePrice = newAveragePrice;
      stockAllData.averageQuantity = newAverageQuantity;

    } else {
      const incomeTax = calculateOperationIncomeTax(operation.operationEarnedRevenue, stockAllData.accumulatedLoss);
      const accumulatedLoss = updateAccumulatedLoss(operation.operationEarnedRevenue, stockAllData.accumulatedLoss);
      const newAverageQuantity = calculateAverageQuantity(stockAllData.averageQuantity, Number(operation.operationQuantity * -1));

      operation.incomeTax = Number(incomeTax.toFixed(2));
      stockAllData.accumulatedLoss = accumulatedLoss;
      stockAllData.averageQuantity = newAverageQuantity;
    }
  })
  calculateIncomeTaxesTotalsPerMonth(stockAllData);
  return stockAllData;
};

const calculateIncomeTaxesTotalsPerMonth = (stockAllData) => {
  console.log(stockAllData);
  console.log(stockAllData.accumulatedIncomeTaxesPerMonth);
  const incomeTaxesByMonth = {};
  let operationMonth = [];
  let operationMonthName = '';
  stockAllData.operations.map((item) => {
    if (item.incomeTax) {
      operationMonth = item.operationDate.split('-')[1];
      operationMonthName = monthsList(operationMonth);
      incomeTaxesByMonth[`${operationMonthName}`] ?
      incomeTaxesByMonth[`${operationMonthName}`].push(item.incomeTax)
      :
      incomeTaxesByMonth[`${operationMonthName}`] = [item.incomeTax]
    }
    console.log(incomeTaxesByMonth);
    return incomeTaxesByMonth;
  });
  
  for (let key in incomeTaxesByMonth) {
    incomeTaxesByMonth[key] = incomeTaxesByMonth[key].reduce((acc, current) => acc + current, 0);
    stockAllData.accumulatedIncomeTaxesPerMonth[key] = incomeTaxesByMonth[key];
  }
  
  console.log(stockAllData.accumulatedIncomeTaxesPerMonth);
  return stockAllData.accumulatedIncomeTaxesPerMonth;
};

const monthsList = (operationMonth) => {
  const monthsList = {
    Janeiro: '01',
    Fevereiro: '02',
    Março: '03',
    Abril: '04',
    Maio: '05',
    Junho: '06',
    Julho: '07',
    Agosto: '08',
    Setembro: '09',
    Outubro: '10',
    Novembro: '11',
    Dezembro: '12',
  }
  let targetMonth = '';
  for (let key in monthsList) {
    if (monthsList[key] === operationMonth) {
      targetMonth = key;
    }
  };
  return targetMonth;
};

