import React from 'react';
import './operations-global-results.styles.scss';

// Component Dependencies:

import DisplayResultsPreview from '../../components/display-results-preview/display-results-preview.component'

const OperationsGlobalResults = () => {
  return (
    <section className='operations-global-results-display'>
      <div className='operations-global-results-container'>
        <h1 className='operations-global-results-title'>Resultados das Operações de Compra e Venda de Ações <br></br><small>(Valores em R$)</small></h1>
        <DisplayResultsPreview />
      </div>
    </section>
  )
};

export default OperationsGlobalResults;