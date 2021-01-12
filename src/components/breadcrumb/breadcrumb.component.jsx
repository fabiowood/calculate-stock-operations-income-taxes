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
      <p className='breadcrumb-location'>Você está em: <a href='/' className='link-to-home'>Home</a> {`=>`} <strong><a href={window.location.pathname} className='link-to-present-page'>{locationAdjustedPathName}</a></strong></p> 
    </section>
  )
};

export default BreadCrumb;