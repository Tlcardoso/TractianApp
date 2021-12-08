import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={ptBR}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

