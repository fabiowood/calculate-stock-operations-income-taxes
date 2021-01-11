import React from 'react';
import './home-page.styles.scss';

// Component Dependencies:

import OperationRegisterForm from '../../components/operation-register-form/operation-register-form.component';

const HomePage = () => {
  return (
    <section className='home-page'>
      <div className='home-page-container'>
        <h1 className='home-page-title'>Registrar Operações de Compra e Venda</h1>
        <OperationRegisterForm />
      </div>
    </section>
  )
};

export default HomePage;