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
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
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
  // console.log(chartData);
  return (
    <section className='display-chart-container'>
        <h2 className='display-chart-title'>Impostos Acumulados por Mês: {stockData.stockTitle}</h2>
        {
          chartData.datasets[0].data.length ? 
          <Bar data={chartData} /> 
          :
          <p>Não há impostos a pagar!</p>
        }
    </section>
  );
}
export default DisplayChart;