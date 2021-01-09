import React from 'react';
import './home-page.styles.scss';

// Component Dependencies:

import OperationRegisterForm from '../../components/operation-register-form/operation-register-form.component';

const HomePage = () => {
  return (
    <section className='home-page'>
      <h1 className='home-page-title'>Calcule o IR - Operações na Bolsa de Valores</h1>
      <OperationRegisterForm />
    </section>
  )
};

export default HomePage;