import React from 'react';
import ReactDOM from 'react-dom';
import './components/Styles/global_styles.css';

import {Home} from './templates/home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

