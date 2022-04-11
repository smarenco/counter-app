import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './CounterApp';
import PrimeraApp from './PrimeraApp'

ReactDOM.render(
  <CounterApp value={1} />,
  document.getElementById('root')
);
