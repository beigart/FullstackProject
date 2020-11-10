import React, { useState, useContext} from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'
import { Profile } from '../Profile/Profile'

export const NavigationBar = () => {
    const history = useHistory();
    


    
    return (
        <div className="nav">
            <span className="navBarLogo" onClick={() => history.push("/")}>RECEPTHÖRNAN</span>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div className="menu"> 
                <span onClick={() => history.push("/recept")}>Recept & mat</span>
                <span  onClick={() => history.push("/")}>Forum</span>
                <span  onClick={() => history.push("/om")}>Om</span>
                <span  onClick={() => history.push("/loggain")}>Logga in</span> 
                
            </div>
        </div>
        
    )
}
