import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { RiArrowGoBackFill} from 'react-icons/ri';

import './styles.scss';
import { useTranslation } from 'react-i18next';

interface IAnswer {
  id: number;
  question: string;
  answer: string;
}

interface ITestAnswer {
  name: string;
  email: string;
  answers: Array<IAnswer>;
}

const Dashboard: React.FC = () => {
  const [testAnswers, setTestAnswers] = useState([]);
  const { t} = useTranslation();

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
          <h1>{t("dashboard.response")}</h1>
          <Link to="/message"> <RiArrowGoBackFill size={"35"} color = {"#000"}/> </Link>
        </header>
      </div>

      <section>
        {testAnswers.map((testAnswer: ITestAnswer) => {
          return (
            <div className="block">
              <h3>
              {t("dashboard.participants")}: {testAnswer.name} ({testAnswer.email})
              </h3>

              <div className="answers">
                <h4 > {t("dashboard.answers")}:</h4>
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