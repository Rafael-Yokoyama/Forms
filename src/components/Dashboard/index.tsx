import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { IAnswer, ITestAnswer } from '../../types';

import './styles.scss';



const Dashboard: React.FC = () => {
  const [testAnswers, setTestAnswers] = useState([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get('/test_answers');
      setTestAnswers(response.data);
    }

    loadData();
  }, []);

  return (
    <div className=" containerDashed ">
      <div className="block first-block">
        <header>
          <h1>Respostas dos Participantes</h1>
          <Link to="/message">Voltar</Link>
        </header>
      </div>

      <section>
        {testAnswers.map((testAnswer: ITestAnswer) => {
          return (
            <div className="block">
              <h3>
                Participante: {testAnswer.name} ({testAnswer.email})
              </h3>

              <div className="answers">
                <h4 >Respostas:</h4>
                {testAnswer.answers.map((answer: IAnswer) => {
                  return (
                    <ul key={answer.id}>
                      <li>
                        {answer.question} - <span>{answer.answer}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dashboard;