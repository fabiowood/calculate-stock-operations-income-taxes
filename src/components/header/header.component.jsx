import React from 'react';
import './header.styles.scss';
import logo from '../../logo.svg';

const Header = () => {
  return (
      <header className="header">
        <a
          className="main-header-link"
          href="/table-manager"
        >
          <img src={logo} className="App-logo" alt="logo" />
          <span>AppCalculadora IR</span>
        </a>
        <a href='/' className='header-option'>Registro de Operações</a>
        <a href='/my-operations' className='header-option'>Minhas Operações</a>
        <a href='/results' className='header-option'>Resultados</a>
      </header>
  );
}

export default Header;
