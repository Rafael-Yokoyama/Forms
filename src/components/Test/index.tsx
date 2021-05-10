import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.scss';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

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

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined ) => {
    i18n.changeLanguage(language);
  };




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
        toast.error(" Marque todos os campos obrigatórios")
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
      <div><Toaster/></div>
      <header>
      <div className="block-1">
         
        </div>
        <div className="block first-block">
          <h1> {t("title")} </h1>
        <div className="buttons">
        <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("pt")}>PT</button>
      
       </div>

       <span>*   {t("forms.required")}</span>
      
        </div>
      </header>

      <form onSubmit={submitAnswers}>
        <div>
          <div className="test">
            <h4>
            {t("forms.name")}
              <span>*</span>
            </h4>

            <Input
              value={name}
              placeholder={t("forms.yourname")}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="test">
            <h4>
            {t("forms.email")}
              <span>*</span>
            </h4>

            <Input
              value={email}
              type="email"
              placeholder={t("forms.youremail")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
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
                          answer={option.value}
                          name={`question${item.id}`}
                          value={option.question_alternative}
                        
                      
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
        </div>

        <Button> {t("forms.send")}</Button>
      </form>
    </div>
  );
};

export default Test;

//json-server server.json -p 3001 