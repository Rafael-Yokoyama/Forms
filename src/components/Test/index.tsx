import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.scss';

interface IAnswer {
  question: string;
  answer: string;
}

interface IOptions {
  id: string;
  value: string;
  question_alternative: string;
}

interface ITestItem {
  id: string;
  question: string;
  options: Array<IOptions>;
}

const Test: React.FC = () => {
  const history = useHistory();

  const [test, setTest] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  useEffect(() => {
    async function loadData() {
      try{
      const response = await api.get('/test');
      setTest(response.data);
    
  }catch (erro){
    console.log(erro)

  }}

    loadData();
  }, []);

  const submitAnswers = useCallback(
    async (event) => {
      event.preventDefault();

      if (name === '' || email === '') {
        alert('Marque todos os campos obrigatórios');
        return;
      }

      try {
        await api.post('/test_answers', {
          name,
          email,
          answers,
        });

        history.push('/message');
      } catch (err) {
        console.log(err);
      }
    },
    [name, email, answers, history],
  );

  return (
    <div className="container">
      <header>
      <div className="block-1">
         
        </div>
        <div className="block first-block">
          <h1>Teste Sobre League of Legends </h1>
          <span>*Obrigatório</span>
        </div>
      </header>

      <form onSubmit={submitAnswers}>
        <section>
          <div className="test">
            <h4>
              Name
              <span>*</span>
            </h4>

            <Input
              value={name}
              placeholder="Seu Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </section>

        <section>
          <div className="test">
            <h4>
              E-mail
              <span>*</span>
            </h4>

            <Input
              value={email}
              type="email"
              placeholder="Seu E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </section>

        <section>
          {test.map((item: ITestItem) => {
            return (
              <div key={item.id} className="block">
                <h4>
                  {item.question}
                
                  <span>*</span>
                </h4>

                <div className="answer-radio">
                  {item.options.map((option: IOptions) => {
                      
                     
                    
                     
                 
                    return (
                      <>
                       <p className="respostas">{option.value}</p>
                  <div className="input-input">
                  <Input
                         key={option.id}
                         option="input-radio"
                         type="radio"
                         className="input-radio"
                        
                         name={`question${item.id}`}
                        
                      
                        onChange={(e) => {
                          setAnswers([
                            ...answers,
                            {
                              question: item.id,
                              answer: e.target.value,
                            },
                          ]);
                        }}
                      />
                  </div>
                      
                    </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default Test;