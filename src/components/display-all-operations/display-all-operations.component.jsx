import React from 'react';
import './display-all-operations.styles.scss';

// Component Dependencies:

import DisplaySingleOperation from '../display-single-operation/display-single-operation.component';

const DisplayAllOperations = ({ stockData }) => {
  const { stockTitle, averagePrice, averageQuantity, operations } = stockData;

  return (
    <section className='display-all-operations'>
      <article className='display-all-operations-general-info'>
        <h3>{ stockTitle }</h3>
        <ul>
          <li>Preço Médio Atual: R$ { averagePrice ? Number(averagePrice.toFixed(2)) : 0.00}</li>
          <li>Quantidade Remanescente: { averageQuantity }</li>
        </ul>
      </article>
      <ul className='display-all-operations-header'>
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
        operations.map((item) => {
          return (
          <DisplaySingleOperation key={ item.stockTitle } operation={ item }/>
          )
        })
      }
    </section>
  )
}

export default DisplayAllOperations;