import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';
import 'animate.css/animate.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

ReactDOM.render(
    <HeroesApp />,
  document.getElementById('root')
);
