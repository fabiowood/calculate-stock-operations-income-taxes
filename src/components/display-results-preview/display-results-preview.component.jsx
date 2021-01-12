import React from 'react';
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
  return (
    <section className='display-results-preview'>
      <div className='display-results-container'>
        {
          stockOperationsData.map((item, index) => {
            item.stockTitle = findKeys[index];
            return (
              <DisplayResults key={ item.stockTitle } stockData={ item } />
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