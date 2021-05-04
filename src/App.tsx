import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageTest from './pages/PageTest';
import Routes from './routes';

import './styles/global.css';


const App: React.FC = () => {
  return (
    /*<BrowserRouter>
      <Routes />
    </BrowserRouter>
    */
   <>
   <PageTest/>
   </>
  );
};

export default App;

