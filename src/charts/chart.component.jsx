import React from 'react';
import './chart.styles.scss';
import {Bar} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// Disable animating charts by default.
defaults.global.animation = false;

const chartDataRepository = () => {
  return (
    {
      labels: [],
      datasets: [
        {
          label: 'Imposto de Renda',
          backgroundColor: 'rgba(79, 120, 164, 1)',
          borderColor: 'rgba(79, 120, 164, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(105, 105, 105, 1)',
          hoverBorderColor: 'rgba(105, 105, 105, 1)',
          data: []
        }
      ]
    }
  )
};

const DisplayChart = ({ stockData }) => {
  const chartData = chartDataRepository();
  for (let key in stockData.accumulatedIncomeTaxesPerMonth) {
    chartData.labels.push(key);
    chartData.datasets[0].data.push(stockData.accumulatedIncomeTaxesPerMonth[key]);
  }
  return (
    <section className='display-chart-container'>
        <h2 className='display-chart-title'>Impostos Acumulados por Mês - {stockData.stockTitle}</h2>
        {
          chartData.datasets[0].data.length ? 
          <Bar data={chartData} /> 
          :
          <p className='display-chart-no-taxes-message'>Não há impostos a pagar!</p>
        }
    </section>
  );
}
export default DisplayChart;