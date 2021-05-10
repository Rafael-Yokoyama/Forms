import React, { Suspense } from 'react';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './styles/global.css';

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