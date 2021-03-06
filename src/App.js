import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Component Dependencies:

import Header from './components/header/header.component.jsx';
import SideBar from './components/sidebar/sidebar.component.jsx';
import BreadCrumb from './components/breadcrumb/breadcrumb.component.jsx';
import HomePage from './pages/home-page/home-page.component.jsx';
import MyOperationsDisplay from './pages/my-operations/my-operations.component.jsx';
import OperationsGlobalResults from './pages/operations-global-results/operations-results.component.jsx';

const App = () => {
  return (
    <Fragment>
      <main className='app'>
        <div className='content-wrapper'>
          <Header />
          <SideBar />
          <BreadCrumb />
          <Switch>
            <Route exact path='/' component={ HomePage } />    
            <Route exact path='/my-operations' component={ MyOperationsDisplay } />    
            <Route exact path='/results' component={ OperationsGlobalResults } />    
          </Switch>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
