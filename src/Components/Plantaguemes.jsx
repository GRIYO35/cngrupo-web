import React from "react";
/*import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../Assets/cngrupoblanco.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import logochile from "../Assets/loggo1.png";*/
import Vectorlogistica from "../Assets/vectorPersoAzul.svg";
import Vectorlogistica1 from "../Assets/Group 94.png";
import Vectorlogistica2 from "../Assets/Vector (2).png";
import Vectorlogistica3 from "../Assets/Vector (3).png";
import loggo3 from "../Assets/loggo3.png";
//import videoSourceGuemes from "../Assets/Guemes web.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import "./Plantaguemes.css"
/*import fotogas from "../Assets/autoelevadores 15 kg  1.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import logowpp from "../Assets/logowpp.png";
import logodelivery from "../Assets/logodelivery.png";
import imgchile from "../Assets/TEXTO DESCRIPCION - CN GRUPO EMBARCACION Y LAJITAS (33).png";*/

const Guemes = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <div className="video">
        <video
        /*src={videoSourceGuemes}*/
          src="http://webcontent.cn-grupo.net/Media/Guemes%20web.mp4"
          autoPlay
          loop
          muted
          className="tuvideo"
        ></video>
        <div className="content">
          <NAVBAR></NAVBAR>
          <div className="txt-redesGue">
            <div className="txt-container-empresaGas">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr>
                <p className="nuestra-empresa">{t("li.OUR COMPANY")}</p>
              </div>
              <h2 className="logistica-title">PLANTA GÜEMES</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-planta">
        <img src={loggo3} alt="" className="logoplanta" />
        <p className="p-planta">
        {t("txtGuemes.txt1")}{" "}<span className="txt-empresa-spanGue">{t("txtGuemes.txt2")}{" "}</span> 
        {t("txtGuemes.txt3")}{" "}
          <span className="txt-empresa-spanGue">{t("txtGuemes.txt4")}</span> {t("txtGuemes.txt5")}<br></br>
          <br></br>
          {t("txtGuemes.txt6")}<span className="txt-empresa-spanGue">{" "}{t("txtGuemes.txt7")}</span>
        </p>
      </div>

      <div className="banner-planta"></div>

      <div className="container-txt-card-planta">
        <h2 className="Planta-title-card">{t("txtProductosGuemes.txt1")}</h2>
        <hr className="linea-Guemes"></hr>
        <p className="p-planta">
        {t("txtProductosGuemes.txt2")}{" "}
          <span className="txt-empresa-spanGue">
            {" "}
            {t("txtProductosGuemes.txt3")}
          </span>{" "}
          {t("txtProductosGuemes.txt4")}{" "}
          <span className="txt-empresa-spanGue">{t("txtProductosGuemes.txt5")}{" "}</span>
          {t("txtProductosGuemes.txt6")}
        </p>
      </div>

      <div className="seccion2planta">
        <div className="numeritosPla">
          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numeritoPlanta">01</h2>
              <hr className="lineanumPlanta"></hr>
            </div>
            <div className="parrafos">
              <p className="txt-numAPlanta">
              {t("txtVentasGuemes.txt1")}<br></br>{t("txtVentasGuemes.txt2")}
              </p>
              <p className={i18next.language === "es" ? "txt-pequeño" : "txt-pequeñoEN"}>{t("txtVentasGuemes.txt3")}</p>
            </div>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta2">
              <h2 className="numeritoPlanta">02</h2>
              <hr className="lineanumPlanta"></hr>
            </div>
            <p className="txt-numAPlanta">{t("txtVentasGuemes.txt4")}</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numeritoPlanta">03</h2>
              <hr className="lineanumPlanta"></hr>
            </div>
            <p className="txt-numAPlanta">{t("txtVentasGuemes.txt5")}</p>
            <p className={i18next.language === "es" ? "txt-pequeñoA" : "txt-pequeñoAEN"}>{t("txtVentasGuemes.txt6")}</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numeritoPlanta">04</h2>
              <hr className="lineanumPlanta"></hr>
            </div>
            <p className="txt-numAPlanta">{t("txtVentasGuemes.txt7")}</p>
            <p className={i18next.language === "es" ? "txt-pequeñoB" : "txt-pequeñoBEN"}>{t("txtVentasGuemes.txt8")}</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta5">
              <h2 className="numeritoPlanta">05</h2>
              <hr className="lineanumPlanta"></hr>
            </div>
            <p className="txt-numAPlanta">
            {t("txtVentasGuemes.txt9")}<br></br>{t("txtVentasGuemes.txt10")}
            </p>
          </div>
        </div>
      </div>

      <div className="container-txt-card-planta1">
        <h2 className="Planta-title-card">{t("txtContacto.txt1")}</h2>
        <hr className="linea-Guemes"></hr>
        <p className="txt-guemes-card">
        {t("txtContacto.txt2")}
        </p>
        <div className="container-cards-Guemes">
        <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">{t("txtContacto.txt7")}</h2>
              <img src={Vectorlogistica} alt="" className="vector-guemes" />
            </div>
            <p className="txt-direccionGuemes">Jorge Tiscornia</p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">{t("txtContacto.txt3")}</h2>
              <img src={Vectorlogistica1} alt="" className="vector-guemes1" />
            </div>
            <p className="txt-direccionGuemes">{t("txtDireccionGuemes.txt1")}<br></br>
            {t("txtDireccionGuemes.txt2")}<br></br>
            {t("txtDireccionGuemes.txt3")}
            </p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">{t("txtContacto.txt4")}</h2>
              <img
                src={Vectorlogistica2}
                alt=""
                className={i18next.language === "es" ? "vector-guemes2" : "vector-guemes2EN"}
              />
            </div>
            <p className="txt-direccionGuemes">(0387) 473-1429</p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">{t("txtContacto.txt5")}</h2>
              <img
                src={Vectorlogistica3}
                alt=""
                className="vector-guemes3"
              />
            </div>
            <p className="txt-direccionGuemes">jtiscornia@cngrupo.com.ar</p>
          </div>
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

export default Guemes;
