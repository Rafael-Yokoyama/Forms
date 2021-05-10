import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './styles.scss';

const Message: React.FC = () => {
  const { t} = useTranslation();
  return (
    <div className="containerMessage">
      <div>
        <div className="block first-block">
          <h1>{t("title")}</h1>

          <span className="black">{t("message.registered")}.</span>

          <div className="link-back">
            <Link to="/">{t("message.submit")}</Link>
          </div>
          
          <div className="link-back">
            <Link to="/dashboard">{t("message.see")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;