import React from 'react'
import './Footer.css'
import { useHistory } from 'react-router-dom'

export const Footer = () => {

    const history = useHistory();

    return (
            <div className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="box1">
                            <h1>Om</h1>
                            <p>Recepthörnan är ett community där vi sprider och delar matgläde runtom i vårt avlånga land. Hitta supersmarriga recept, dela med dig av dina favoriträtter och låt oss tillsammans skapa en ny standard för matlagning hemma! </p>
                        </div>
                        <div className="box2">
                            <h1>Footer</h1>
                            <p>Work in progress</p>
                        </div>
                        <div className="box3">
                            <h1>Kreatör</h1>
                            <p>Work in progress </p>
                        </div>
                        
                    </div>
                </div>       
            </div>
    )
}

export default Footer;