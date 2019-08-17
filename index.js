import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Calculator from './components/Calculator/Calculator'

const App = () => {
  return (
    <div id="app">
      <Calculator/>
    </div>
  )
}


render(<App />, document.getElementById('root'));
