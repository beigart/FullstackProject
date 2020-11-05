import React, { useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'
import './SignInView.css'
import { Link } from 'react-router-dom';

export const SignInView = () => {

    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)


    const submitEmail = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail);
        alert("Du är inloggad som: " + loginEmail);
        
    }



    return (
        <div className="signInContainer">
            <h1>Logga in som användare</h1>
            <h2>Vänligen fyll i dina uppgifter</h2>
            <h4>Email </h4>
            <input type="text" onChange={e => setLoginEmail(e.target.value)}  className="emailInput" placeholder="Email"></input>
            <h4>Lösenord </h4>
            <input type="password" onChange={e => setLoginPassword(e.target.value)} className="pwInput" placeholder="Lösenord"></input><br></br>
            <button className="logInButton" onClick= {() => submitEmail()}>Logga in</button>
            <p className="register">Inte medlem ännu? Registrera dig <Link to="/register">här</Link></p>
        </div>
    )
}
