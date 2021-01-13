/* eslint-disable default-case */
import React from 'react';
import './breadcrumb.styles.scss';

const BreadCrumb = () => {
  let locationAdjustedPathName = '';
  switch (window.location.pathname) {
    case '/':
      locationAdjustedPathName = 'Registrar Operações';
      break;
    case '/my-operations':
      locationAdjustedPathName = 'Minhas Operações';
      break;
    case '/results':
      locationAdjustedPathName = 'Resultados das Operações';
      break;
  }
  return (
    <section className='breadcrumb-container'>
      <p>Você está em: <a href='/' >Home</a> {`=>`} <strong><a href={window.location.pathname}>{locationAdjustedPathName}</a></strong></p> 
    </section>
  )
};

export default BreadCrumb;