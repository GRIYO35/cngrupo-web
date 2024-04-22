import React from "react";
import videoSourceGas from "../Assets/Trabaja con nosotros Web.mp4";
import NAVBAR from "./NavBar";
import "./CapitalHumano.css";

const CapitalH = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/

  return (
    <div className="home-containerCap">
      <div className="videoCap">
        <video
          src={videoSourceGas}
          autoPlay
          loop
          muted
          className="tuvideoCap"
        ></video>
        <div className="contentCapi">
          <NAVBAR></NAVBAR>
          <div className="txt-redesCap">
            <div className="txt-container-empresaCap">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr>
                <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
              </div>
              <h2 className="logistica-title">CAPITAL HUMANO</h2>
              <a
                href="https://cngrupo.pandape.computrabajo.com/Vacancies"
                target="_blank"
                rel="noopener noreferrer" 
                className="info-btnCapi"
              >
                Postulate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalH;
