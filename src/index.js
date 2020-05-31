import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import MainLayout from "./Layout"
import './index.scss'



ReactDOM.render(

    <MainLayout>
      <App />
    </MainLayout>,

  document.getElementById('root')
);

