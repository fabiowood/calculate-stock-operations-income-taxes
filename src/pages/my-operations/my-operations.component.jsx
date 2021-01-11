import React from 'react';
import './my-operations.styles.scss';

// Component Dependencies:

import DisplayAllOperationsPreview from '../../components/display-all-operations-preview/display-all-operations-preview.component';

const MyOperationsDisplay = () => {
  return (
    <section className='my-operations-display'>
      <div className='my-operations-container'>
        <h1 className='my-operations-title'>Visualizar Operações de Compra e Venda</h1>
        <DisplayAllOperationsPreview />
      </div>
    </section>
  )
};

export default MyOperationsDisplay;