import React from 'react';
import './sidebar.styles.scss';

const SideBar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-menu'> - Menu - </div>
        <a href='/' className='sidebar-option'>Registrar Operações</a>
        <a href='/my-operations' className='sidebar-option'>Minhas Operações</a>
        <a href='/results' className='sidebar-option'>Resultados</a>      
      </div>
    </section>
  )
}

export default SideBar;