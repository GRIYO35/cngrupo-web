import React from "react";
import logoinf1 from "../Assets/CN - INFO IMPOSITIVA grey@300x.png";
import logoinf2 from "../Assets/CHANGO - INFO IMPOSITIVA grey@300x.png";
import logoinf3 from "../Assets/GAS DEL NORTE - INFO IMPOSITIVA grey@300x.png";
import logoinf4 from "../Assets/CN LOGISTICA - INFO IMPOSITIVA grey@300x.png";
import logoinf5 from "../Assets/NECA - INFO IMPOSITIVA grey@300x.png";
import logoinf6 from "../Assets/PEM - INFO IMPOSITIVA grey@300x.png";
import NAVBAR from "./NavBarOscura";
import { useTranslation } from "react-i18next";
import "./Infoimpo.css"

const Info = () => {
    // eslint-disable-next-line no-unused-vars
    const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <NAVBAR></NAVBAR>

      <div className="txt-redesInfo">
        <div className="txt-container-InfoImpo">
          <div className="linea-tituloInfo">
            <hr class="mi-lineaInfo"></hr><p className="nuestra-empresaInfo">{t("li.OUR COMPANY")}</p>
          </div>
          <h2 className="titulo-info">{t("txtInfo.txt1")}</h2>
          {/*<h2 className="nuestra-info-txt"><span className="txt-empresa-span">CN GRUPO</span> nace como una empresa familiar y cuenta con más <span className="txt-empresa-span"> 35 años </span> de trayectoria, más de <span className="txt-empresa-span"> 35 años </span> más de <span className="txt-empresa-span"> 250 colaboradores </span> y <span className="txt-empresa-span"> 6 bases operativas </span> distribuidas en puntos estratégicos de Salta y norte de Chile. </h2>*/}
        </div>
      </div>

      <div className="logos-info">
        <div className="logo-boton">
          <img src={logoinf1} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf2} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf3} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf4} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf5} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf6} alt="" className="logo-info" />
          <button className="info-btn">{t("txtInfo.txt2")}</button>
        </div>
      </div>

      <div className="footer">
        <div className="txt1">
          <p className="txt-foo">{t("txt-foo2.Footer1")}</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">
          {t("txt-foo2.Footer")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
