import './App.css';
import React, { useEffect } from 'react';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Product />
      </header>
    </div>
  );
}

export default App;
