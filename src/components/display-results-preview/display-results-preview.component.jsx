import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectAllStockOperations } from '../../redux/calculate-income-taxes.selectors.js';
import './display-results-preview.styles.scss';

// Component Dependencies:

import DisplayResults from '../display-results/display-results.component';

const DisplayResultsPreview = ({ stockOperations }) => {
  const findKeys = [];
  const stockOperationsData = [];
  for (let key in stockOperations) {
    findKeys.push(key);
    stockOperationsData.push(stockOperations[key]);
  }

  const [selectedStock, setSelectedStock] = useState('');

  const handleChange = event => {
    setSelectedStock(event.target.value);
  };

  return (
    <section className='display-results-preview'>
      <div className='display-results-preview-container'>
        <div className='display-results-preview-select-stock'>
          <label for='Choose a Stock'>Selecione uma Ação</label>
          <select value={ selectedStock } onChange={ handleChange } className='select-stock' type='text' name='selectedStock' id='Choose a Stock'>
            <option value='' className='stock-option'></option>
            {
              findKeys.map((stockTitle) => <option value={ stockTitle } className='stock-option'>{stockTitle}</option>)
            }
          </select>
        </div>
        {
          !selectedStock 
          ? 
          stockOperationsData.map((item, index) => {
            item.stockTitle = findKeys[index];
            return (
              <DisplayResults key={ item.stockTitle } stockData={ item } />
            )
          })
          :
          stockOperationsData.filter((item) => item.stockTitle === selectedStock).map((item) => {
            return (
              <DisplayResults key={ selectedStock } stockData={ item } />
            )
          })
        }
      </div>
    </section>
  )
};

const mapStateToProps = createStructuredSelector({
  stockOperations: selectAllStockOperations
})

export default connect(mapStateToProps)(DisplayResultsPreview);