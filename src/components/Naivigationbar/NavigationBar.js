import React from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory();
    
    return (
        
            <div className="navBarContainer">
                
                <span className="navBarLogo" onClick={() => history.push("/")}>RECEPTHÖRNAN</span>
                <span className="navBarRecipe" onClick={() => history.push("/recept")}>Recept och mat</span>
                <span className="navBarForum" onClick={() => history.push("/")}>Forum</span>
                <span className="navBarW" onClick={() => history.push("/")}>Work in progress</span>
                <span className="searchBar"><input></input></span>
                <span className="navBarSignIn" onClick={() => history.push("/loggain")}>Sign In</span>
            </div>
        
    )
}
