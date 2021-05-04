import React, { useState, useEffect, useCallback } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.scss'



const Test: React.FC = () => {

  




    return(
        <div className="container">
        <header>
        <div className="block-1">
           
          </div>
          <div className="block first-block">
            <h1>Questionário sobre League of Legends </h1>
            <span>*Obrigatório</span>
          </div>
        </header>
        
  
        <form >
          <section>
            <div className="block">
              <h4>
                Name
                <span>*</span>
              </h4>
  
              <Input
               
                placeholder="Sua resposta"
               
              />
            </div>
          </section>
  
          <section>
            <div className="block">
              <h4>
                E-mail
                <span>*</span>
              </h4>
  
              <Input
               
                type="email"
                placeholder="Sua resposta"
               
              />
            </div>
          </section>
  
         
  
          <Button>Enviar</Button>
        </form>
      </div>

    );
}
export default Test