import React from 'react';
import {render} from 'react-dom';
import App from './app';

render(<App path='./extra.js' />, document.getElementById('container'));