import logo from './logo.svg';
import './App.css';

// Component Dependencies:

import HomePage from './pages/home-page/home-page.component.jsx';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HomePage />
    </div>
  );
}

export default App;
