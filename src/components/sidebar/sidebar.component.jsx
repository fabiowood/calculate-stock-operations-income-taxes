import React from 'react';
import './sidebar.styles.scss';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <a href='/' className='sidebar-option'>Registro de Operações</a>
      <a href='/my-operations' className='sidebar-option'>Minhas Operações</a>
      <a href='/results' className='sidebar-option'>Resultados</a>
    </section>
  )
}

export default SideBar;