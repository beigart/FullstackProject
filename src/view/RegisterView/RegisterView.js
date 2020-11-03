import React from "react";
import { Link } from "react-router-dom";
import "../RegisterView/RegisterView.css";

export const RegisterView = () => {
  return (
    <div className="registerContainer">
      <h1>Registrera dig som medlem</h1>
      <h2>Skapa ditt konto här</h2>

      <div className="inputForm">
        <h4>Namn</h4>
        <input type="text" name="test" className="nameInput" />
        <h4>Email</h4>
        <input type="text" name="test" className="nameInput" />
        <h4>Lösenord</h4>
        <input type="password" name="test" className="nameInput" />
        <h4>Bekräfta lösenord</h4>
        <input type="password" name="test" className="nameInput" /><br></br>
        <button className="registerMember">Registrera användare</button>
      </div>

      <p className="register">
        Redan medlem? Logga in <Link to="/loggain">här</Link>
      </p>
    </div>
  );
};
