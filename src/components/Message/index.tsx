import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Message: React.FC = () => {
  return (
    <div className="containerMessage">
      <div>
        <div className="block first-block">
          <h1>Teste Sobre League of Legends</h1>

          <span className="black">Sua resposta foi registrada.</span>

          <div className="link-back">
            <Link to="/">Enviar outra resposta</Link>
          </div>
          
          <div className="link-back">
            <Link to="/dashboard">Ver respostas</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;