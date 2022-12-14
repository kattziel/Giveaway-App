import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Signup.scss";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-logging-section">
        <div className="signup-header">
          ZAREJESTRUJ SIĘ
          <div>
            <Decoration />
          </div>
        </div>

        <div className="signup-textarea">
          <div className="signup-textarea-content">
            Email
            <input
              id=""
              type="text"
              className="signup-form-text"
              ></input>
          </div>
          <div className="signup-textarea-content">
            Hasło
            <input
              id=""
              type="password"
              className="signup-form-text"
              ></input>
          </div>
          <div className="signup-textarea-content">
            Powtórz hasło
            <input
              id=""
              type="password"
              className="signup-form-text"
              ></input>
          </div>
        </div>

        <div className="signup-buttons">
          <btn className="signup-btn">
          <Link to="../login">
            Zaloguj się
          </Link>
          </btn>
          <btn className="signup-btn">Zarejestruj się</btn>
        </div>
      </div>
    </div>
  );
}