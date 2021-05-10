import React, { useState, InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  answer?: string;
  option?: string;
}

const Input: React.FC<InputProps> = ({ answer, option = "default", ...rest }) =>
  // ... rest = pega todos elementos presente no input
  {
    const [focus, setFocus] = useState(false);

    return (
      <>
        {option === "input-radio" ? (
          <div className="option">
            <input {...rest} />
          </div>
        ) : (
          <div className={focus ? "answer-input focus" : "answer-input"}>
            <input
              {...rest}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </div>
        )}
      </>
    );
  };

export default Input;
