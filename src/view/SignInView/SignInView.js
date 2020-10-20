import React, { useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'

export const SignInView = () => {

    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    /*
    const login = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail)
        alert(loginEmail + " Has logged in")
    }*/


    const submitEmail = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail);
        alert("Du är inloggad som: " + loginEmail);
        
    }



    return (
        <div>
            <h1>Logga in som användare</h1>
            <h2>Vänligen fyll i dina uppgifter</h2>
            <p>Email: </p>
            <input onChange={e => setLoginEmail(e.target.value)}  id="emailInput"></input>
            <p>Lösenord: </p>
            <input onChange={e => setLoginPassword(e.target.value)} id="pwInput"></input><br></br>
            <button onClick= {() => submitEmail()}>Logga in</button>
            <h1> {loggedInUser}</h1>
        </div>
    )
}
