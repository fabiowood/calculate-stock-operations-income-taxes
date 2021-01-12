import React from 'react';
import './display-results.styles.scss';

// Component Dependencies:

import DisplaySingleOperation from '../display-single-operation/display-single-operation.component';
import DisplayChart from '../../charts/chart.component';

const DisplayResults = ({ stockData }) => {
  const { stockTitle, averagePrice, averageQuantity, accumulatedLoss, accumulatedIncomeTaxesPerMonth, operations } = stockData;
  const incomeTaxesPerMonth = () => {
    let monthIncomeTaxes = 0.00;
    let displayMonthIncomeTaxes = [];
    for (let key in accumulatedIncomeTaxesPerMonth) {
      monthIncomeTaxes = Number(accumulatedIncomeTaxesPerMonth[key].toFixed(2));
      displayMonthIncomeTaxes.push(<li>{`${key}`}: R$ { monthIncomeTaxes }</li>);
    }
    return displayMonthIncomeTaxes.map((item) => item)
  }
  const stockInfo = [{stockData}];
  return (
    <section className='display-results'>
      <article className='display-results-general-info'>
        <h3>Resultados Gerais: { stockTitle }</h3>
        <ul>
          <li>Preço Médio Atual: { Number(averagePrice.toFixed(2)) }</li>
          <li>Quantidade Remanescente: { averageQuantity }</li>
          <li>Perdas Acumuladas: { Number(accumulatedLoss.toFixed(2)) }</li>
          <li>Imposto de Renda Acumulado por Mês</li>
          {
            incomeTaxesPerMonth()
          }
        </ul>
      </article>
      <p>Operações Recentes</p>
      <ul className='display-results-header'>
        <li className='header-block'>
          <span>Data da Operação</span>
        </li>
        <li className='header-block'>
          <span>Tipo</span>
        </li>
        <li className='header-block'>
          <span>Preço da Ação</span>
        </li>
        <li className='header-block'>
          <span>Quantidade</span>
        </li>
        <li className='header-block'>
          <span>Taxa de Corretagem</span>
        </li>
        <li className='header-block'>
          <span>Resultado Auferido</span>
        </li>
        <li className='header-block'>
          <span>Imposto de Renda</span>
        </li>
      </ul>
      {
        operations.filter((item, index) => index < operations.length && index > operations.length - 4).map((item) => {
          return (
          <DisplaySingleOperation key={ item.stockTitle } operation={ item }/>
          )
        })
      }
      <DisplayChart stockData={ stockData } />
    </section>
  )
}

export default DisplayResults;