import React from "react";
//import videoSourceGas from "../Assets/Trabaja con nosotros Web.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./CapitalHumano.css";

const CapitalH = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-containerCap">
      <div className="videoCap">
        <video
          /*src={videoSourceGas}*/
          src= "http://webcontent.cn-grupo.net/Media/Trabaja%20con%20nosotros%20Web.mp4"
          autoPlay
          loop
          muted
          className="tuvideoCap"
        ></video>
        <div className="contentCapi">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
          <div className="txt-redesCap">
            <div className="txt-container-empresaCap">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr>
                <p className="nuestra-empresa">{t("li.WORK AT CN GROUP")}</p>
              </div>
              <h2 className="logistica-title">{t("li.HUMAN CAPITAL")}</h2>
              <a
                href="https://cngrupo.pandape.computrabajo.com/Vacancies"
                target="_blank"
                rel="noopener noreferrer" 
                className="info-btnCapi"
              >
                {t("li.Apply")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalH;
