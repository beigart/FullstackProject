import React, { useState} from "react";
import "./SignInView.css";
import { Link } from "react-router-dom";

export const SignInView = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Funkar");
  };

  return (
    <div className="signInContainer">
      <h1>Logga in som användare</h1>
      <h2>Vänligen fyll i dina uppgifter</h2>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <h4>Email </h4>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="emailInput"
          required
          placeholder="Email"
        ></input>
        <h4>Lösenord </h4>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
          className="pwInput"
          placeholder="Lösenord"
        ></input>
        <br></br>
        <button className="logInButton" value="Login">
          Logga in
        </button>
      </form>

      <p className="register">
        Inte medlem ännu? Registrera dig <Link to="/register">här</Link>
      </p>
    </div>
  );
};
