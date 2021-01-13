/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */

import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateAveragePriceAndQuantity, calculateStockOperationResults } from '../../redux/calculate-income-taxes.actions.js';
import { createStructuredSelector} from 'reselect';
import { selectAllStockOperations } from '../../redux/calculate-income-taxes.selectors.js';
import './operation-register-form.styles.scss';

const OperationRegisterForm = ({ updateAveragePriceAndQuantity, calculateStockOperationResults, stockOperations }) => {

  const [operationData, setOperationRegistry] = useState({
    operationType: '',
    operationDate: '',
    stockTitle: '',
    operationPrice: '',
    operationQuantity: '',
    brokerage: '',
    displayRegistrySuccessMessage: false,
  });

  const { operationType, operationDate, stockTitle, operationPrice, operationQuantity, brokerage, displayRegistrySuccessMessage } = operationData;

  const handleChange = event => {
    const { name, value } = event.target;
    setOperationRegistry({
      ...operationData,
      [name]: value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    const createdAt = new Date();
    const setOperationInfo = {
    operationType: operationType,
    operationDate: operationDate,
    stockTitle: stockTitle.toUpperCase(),
    operationPrice: operationPrice,
    operationQuantity: operationQuantity,
    brokerage: brokerage,
    createdAt: createdAt,
    };
    let stockQuantity = 0;
    let avaliableStockQuantity = true;
    if (operationType === 'Compra') {
      updateAveragePriceAndQuantity(setOperationInfo)
    } else {
      avaliableStockQuantity = checkAvaliableStockQuantity(stockQuantity);
    }

    if (avaliableStockQuantity) {
      calculateStockOperationResults(setOperationInfo);
      setOperationRegistry({
        operationType: '',
        operationDate: '',
        stockTitle: '',
        operationPrice: '',
        operationQuantity: '',
        brokerage: '',
        displayRegistrySuccessMessage: true,
      });
    } else {
      alert('A quantidade vendida é superior à quantidade disponível!');
      setOperationRegistry({
        operationType: '',
        operationDate: '',
        stockTitle: '',
        operationPrice: '',
        operationQuantity: '',
        brokerage: '',
        displayRegistrySuccessMessage: false,
      });
    }
  };

  const checkAvaliableStockQuantity = (stockQuantity) => {
    for (let key in stockOperations) {
      if (key === stockTitle) {
        stockQuantity = stockOperations[key].averageQuantity;
      }
    }
    return stockQuantity >= operationQuantity;
  }
  
  const displayRegisterForm = () => {
    setOperationRegistry({
      operationType: '',
      operationDate: '',
      stockTitle: '',
      operationPrice: '',
      operationQuantity: '',
      brokerage: '',
      displayRegistrySuccessMessage: false,
    });
  }

  return (
    <Fragment>
      {
        !displayRegistrySuccessMessage 
        ?
        <form className='operation-register-form' onSubmit={ handleSubmit }>

          <label for='Choose a Type of Operation'>Tipo de Operação</label>
          <select value={ operationType } onChange={ handleChange } className='select-operation-type' type='text' name='operationType' id='Choose a Type of Operation' required>
            <option value='' className='operation-type-option'></option>
            <option value='Compra' className='operation-type-option'>Compra</option>
            <option value='Venda' className='operation-type-option'>Venda</option>
          </select>

          <label for='Choose The Date of The Operation'>Data da Operação</label>
          <input value={ operationDate } onChange={ handleChange } className='operation-date-input' type='date' name='operationDate' id='Choose The Date of The Operation' required>
          </input>

          <label for='Type The Stock Name'>Título da Ação</label>
          <input value={ stockTitle } onChange={ handleChange } className='stock-name-input' type='text' name='stockTitle' id='Type The Stock Name' placeholder='Ex: PETR4' required></input>

          <label for='Type The Stock Price'>Preço da Ação (R$)</label>
          <input value={ operationPrice } onChange={ handleChange } className='stock-price-input' type='number' name='operationPrice' id='Type The Stock Price' placeholder='Ex: 25.90' min='0.01' step='0.01' required></input>

          <label for='Type The Shares Quantity'>Quantidade de Ações</label>
          <input value={ operationQuantity } onChange={ handleChange } className='stock-quantity-input' type='number' name='operationQuantity' id='Type The Shares Quantity' placeholder='Ex: 100' min='1' step='1' required></input>

          <label for='Type The Brokerage Fee'>Taxa de Corretagem (R$)</label>
          <input value={ brokerage } onChange={ handleChange } className='brokerage-fee-input' type='number' name='brokerage' id='Type The Brokerage Fee' placeholder='Ex: 8.50' min='0.01' step='0.01' required></input>

          <button type='submit' className='register-operation-button'>Registrar Operação</button>

      </form>
      :
      <Fragment>
        <p className='display-register-success-message'>Cadastro realizado com sucesso!</p>
        <button type='submit' className='register-operation-button' onClick={() => displayRegisterForm()}>Registrar Nova Operação</button>
      </Fragment>
      }
    </Fragment>
  )
};

const mapStateToProps = createStructuredSelector({
  stockOperations: selectAllStockOperations
})

const mapDispatchToProps = dispatch => ({
  updateAveragePriceAndQuantity: operationData => dispatch(updateAveragePriceAndQuantity(operationData)),
  calculateStockOperationResults: operationData => dispatch(calculateStockOperationResults(operationData))
});

export default connect(mapStateToProps, mapDispatchToProps)(OperationRegisterForm);