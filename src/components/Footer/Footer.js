import React from "react";
import "./Footer.css";
import { useHistory } from "react-router-dom";
import facebookLogo from "../../img/socialmediaLogos/facebook.png";
import instagramLogo from "../../img/socialmediaLogos/instagram.png";
import linkedinLogo from "../../img/socialmediaLogos/linkedin.png";

export const Footer = () => {
  const history = useHistory();

  return (
    <div className="footer">
      <div className="container">
        <div className="columns">
          <div className="box1">
            <h1>Om</h1>
            <p>
              Recepthörnan är ett community där vi sprider och delar matgläde
              runtom i vårt avlånga land. Hitta supersmarriga recept, dela med
              dig av dina favoriträtter och låt oss tillsammans skapa en ny
              standard för matlagning hemma!{" "}
            </p>
          </div>

          <div className="box2">
            <h1>Footer</h1>
            <p>Work in progress</p>
          </div>

          <div className="box3">
            <h1>Kreatör</h1>
            <p>
              Recepthörnan är skapad av Michael "Beigi" Beigart, en sann
              matfantast som älskar att testa på nya recept där hemma i köket i
              Växjö. Vill du veta mer om honom, besök gärna hans sociala medier
              här nedan.{" "}
            </p>

            <a
              href="https://www.facebook.com/robertemilmichaelbeigart"
              target="_blank"
            >
              <img
                className="facebookLogo"
                src={facebookLogo}
                alt="Facebooklogga"
              />
            </a>

            <a href="https://www.instagram.com/michaelbeigart/" target="_blank">
              <img
                className="instagramLogo"
                src={instagramLogo}
                alt="Instagramlogga"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/michael-beigart-53436b1a2/"
              target="_blank"
            >
              <img
                clasName="linkedinLogo"
                src={linkedinLogo}
                alt="LinkedInlogga"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
