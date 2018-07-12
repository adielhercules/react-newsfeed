import 'whatwg-fetch';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.scss';

const rootElement = document.getElementById('root');

render(<App />, rootElement);

registerServiceWorker();
