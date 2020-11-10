import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert'
import "../RegisterView/RegisterView.css";
import PropTypes from 'prop-types'




export const RegisterView = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Lösenord stämmer ej överens", 'danger');
    } else {
      console.log("Funkar")
    }
  };

  return (
    <div className="registerContainer">
      <h1>Registrera dig som medlem</h1>
      <h2>Skapa ditt konto här</h2>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="inputForm">
          <h4>Namn</h4>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
            placeholder="Namn"
          />
          <h4>Email</h4>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            placeholder="Email"
          />
          <h4>Lösenord</h4>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            placeholder="Lösenord"
          />
          <h4>Bekräfta lösenord</h4>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
            placeholder="Bekräfta lösenord"
          />

          <br></br>
          <button className="registerMember" value="Register">Registrera användare</button>
        </div>
      </form>

      <p className="register">
        Redan medlem? Logga in <Link to="/loggain">här</Link>
      </p>
    </div>
  );
};

RegisterView.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(RegisterView);
