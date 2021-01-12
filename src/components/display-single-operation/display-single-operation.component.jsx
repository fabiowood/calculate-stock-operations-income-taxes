import React from 'react';
import './display-single-operation.styles.scss';

const DisplaySingleOperation = ({ operation }) => {
  const { operationDate, operationType, operationPrice, operationQuantity, brokerage, operationEarnedRevenue, incomeTax } = operation;
  const countryStandardOperationDate = operationDate.split('-').reverse().join('-');
  return (
    <article className='display-single-operation'>
      <ul>
        <li className='display-single-operation-first-item'>{ countryStandardOperationDate }</li>
        <li className='display-single-operation-item'>{ operationType }</li>
        <li className='display-single-operation-item'>{ operationPrice.toLocaleString('pt-br', {minimumFractionDigits: 2}) }</li>
        <li className='display-single-operation-item'>{ operationQuantity }</li>
        <li className='display-single-operation-item'>{ brokerage.toLocaleString('pt-br', {minimumFractionDigits: 2}) }</li>
        <li className='display-single-operation-item'>{ operationEarnedRevenue ? operationEarnedRevenue.toLocaleString('pt-br', {minimumFractionDigits: 2}) : 0.00 }</li>
        <li className='display-single-operation-item'>{ incomeTax ? incomeTax.toLocaleString('pt-br', {minimumFractionDigits: 2}) : 0.00 }</li>
      </ul>
    </article>
  )
};

export default DisplaySingleOperation;