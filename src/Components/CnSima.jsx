import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoSima from '../Assets/148x66 logo CN SIMA responsive_1@300x.png'
import Imgvisionlogo from '../Assets/650x388 CN SIMA.png'
import VectorSima1 from '../Assets/vectorSima5.png'
import VectorSima2 from '../Assets/VectorSima1.svg'
import VectorSima3 from '../Assets/VectorSima2.svg'
import VectorSima4 from '../Assets/vectorSima6.png'
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./CnSima.css"


const Logistica = () => {
    // eslint-disable-next-line no-unused-vars
    const [t, i18next] = useTranslation("global");

    return (
        <div className="home-container">
          <div className="home-containerSima">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
        <div className="redes-container-empresa-gas">
          <a
                href="https://www.linkedin.com/company/cn-sima/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icono-red-social" />
              </a>
              <a
                href="https://www.instagram.com/cn_sima/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
          </div>
        <div className="txt-redesSima">
            <div className="txt-container-empresaSima">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p></div>
            <h2 className="logistica-title">CN SIMA</h2>
            </div>
        </div> 
           
        </div>
        <div className="container-sima">
            <div className="logo-texto-logistica">
              <div className="logoSima">           
                <img src={LogoSima} alt="" className="Simaimg1"/>
              </div>
            
          <p className="text-sima">
            {t("CnSima.txt1")}
            <br></br><br></br>
            {t("CnSima.txt2")} 
            </p>
            </div>
            <div className="CnSimaMobile">
            <img src={Imgvisionlogo} alt="" className="fotoSima"/>
            </div>
        </div>

        <div className="separadorfotoSima"></div>

      <div className="container-txt-cardSima">
        <h2 className="sima-title-card">{t("txtContacto.txt1")}</h2>
        <hr className="linea-sima"></hr>
        <p className="txt-sima-card">{t("txtContacto.txt2")}</p>
        <div className="container-cards-sima">
            <div className="card-contactoSima">
              <div className="titulo-logo-sima">
                <h2 className="title-direccionSima">{t("txtContacto.txt3")}</h2>
                <img src={VectorSima1} alt="" className="vector-sima"/>
              </div>
                <p className="txt-direccionSima">Av. Chile 1275 (4400)</p>
            </div>
            <div className="card-contactoSima">
              <div className="titulo-logo-sima">
                <h2 className="title-direccionSima">{t("txtContacto.txt4")}</h2>
                <img src={VectorSima2} alt="" className={i18next.language === "es" ? "vector-sima2" : "vector-sima2EN"}/>
              </div>
              <p className="txt-direccionSima">(0387) 4236555</p>
            </div>
            <div className="card-contactoSima">
              <div className="titulo-logo-sima">
                <h2 className="title-direccionSima">{t("txtContacto.txt5")}</h2>
                <img src={VectorSima3} alt="" className="vector-sima3"/>
              </div>
              <p className="txt-direccionSima">info@cnsima.com.ar</p>
            </div>
            <div className="card-contactoSima">
              <div className="titulo-logo-sima">
                <h2 className="title-direccionSima1">Web</h2>
                <img src={VectorSima4} alt="" className="vector-sima3"/>
              </div>
              <Link className="txt-direccionSima1" to="https://cnsima.com.ar/" target="_blank" rel="noopener noreferrer"> 
              https://cnsima.com.ar 
              </Link>
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
    )
}

export default Logistica;