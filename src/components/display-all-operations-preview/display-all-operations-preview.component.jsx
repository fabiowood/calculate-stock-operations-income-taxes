import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectAllStockOperations } from '../../redux/calculate-income-taxes.selectors.js';
import './display-all-operations-preview.styles.scss';

// Component Dependencies:

import DisplayAllOperations from '../display-all-operations/display-all-operations.component';

const DisplayAllOperationsPreview = ({ stockOperations }) => {
  const findKeys = [];
  const stockOperationsData = [];
  for (let key in stockOperations) {
    findKeys.push(key);
    stockOperationsData.push(stockOperations[key]);
  }
  return (
    <section className='display-all-operations-preview'>
      <div className='display-all-operations-container'>
        {
          stockOperationsData.map((item, index) => {
            item.stockTitle = findKeys[index];
            return (
              <DisplayAllOperations key={ item.stockTitle } stockData={ item } />
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

export default connect(mapStateToProps)(DisplayAllOperationsPreview);

{
  // stockOperations === {  } ? 
  // stockOperationsData.map((item, index) => {
  //   item.stockTitle = findKeys[index];
  //   return (
  //     <DisplayAllOperations key={ item.stockTitle } stockData={ item } />
  //   )
  // })
  // :
  // <p className='display-all-operations-empty-data'>Você não tem operações registradas!</p>
}