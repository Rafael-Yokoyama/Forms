import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';


import './styles/global.css';
import './i18n';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;