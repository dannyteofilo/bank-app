import React from 'react';
import ReactDOM from 'react-dom';
import { BankApp } from './BankApp';
import './styles/styles.scss';


import configureStore from './store/store';


async function init() {
  console.log('Waiting for store')

  await configureStore();

  console.log('Store was fully loaded')

  ReactDOM.render(<BankApp />, document.getElementById('root'));

  console.log('Rendering');
}

init();
