import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logochile from "../Assets/loggo1.png";
//import mapachile from "../Assets/MAPA CHILE WEB@300x.png";
import mapachile from "../Assets/mapa chile regiones.png";
import Vectorlogistica1 from "../Assets/Group 94.png";
import Vectorlogistica2 from "../Assets/Vector (2).png";
import Vectorlogistica3 from "../Assets/Vector (3).png";
import imgchile from "../Assets/650X388px WEB descripcion chile.png";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./Ccnchile.css";

const Ccn = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <div className="home-container8">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
        <div className="redes-container-empresa-chile">
              <a
                href="https://www.instagram.com/ccn.chile?igsh=MWNrY3ZwOGg0emtybQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61559402910576"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social" />
              </a>
        </div>
        <div className="txt-redesChile">
          <div className="txt-container-empresaChile">
            <div className="linea-titulo">
              <hr class="mi-linea"></hr>
              <p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p>
            </div>
            <h2 className="chile-title">CCN CHILE</h2>
          </div>
        </div>
      </div>

      <div className="container-chile">
        <div className="logochile-txt">
          <img src={logochile} alt="" className="logochile" />
          <p className="p-chile1">
          {t("txtChile.txt1")}{" "}
            <span className="txt-empresa-spanChile">
              {" "}
              {t("txtChile.txt2")}
            </span>{" "}
            {t("txtChile.txt3")} <br></br>
            <br></br>
            {t("txtChile.txt4")}{" "}
            <span className="txt-empresa-spanChile">
              {" "}
              {t("txtChile.txt5")}
            </span>{" "}
            {t("txtChile.txt6")}
          </p>
        </div>
        <img src={imgchile} alt="" className="imgchile" />
      </div>
      <div className="container-txt-cardChile">
        <h2 className="chile-title-card">{t("txtChile.txt7")}</h2>
        <hr className="linea-chile"></hr>
        <div className="MapaChile-Mobile">
        <img src={mapachile} alt="Mapachile" className="mapaChile"></img>
        </div>
      </div>
      <div className="banner-chile"></div>
      <div className="container-txt-cardChile1">
        <h2 className="chile-title-card1">{t("txtContacto.txt1")}</h2>
        <hr className="linea-chile1"></hr>
        <p className="txt-logistica-card">
        {t("txtContacto.txt2")}
        </p>
        <div className="container-cards-chile">
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">{t("txtContacto.txt3")}</h2>
              <img src={Vectorlogistica1} alt="" className="vector-chile" />
            </div>
            <p className="txt-direccionChile">Av. Chile 1275-4400</p>
          </div>
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">{t("txtContacto.txt4")}</h2>
              <img src={Vectorlogistica2} alt="" className="vector-chile2" />
            </div>
            <p className="txt-direccionChile">(0387) 423 6555</p>
          </div>
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">{t("txtContacto.txt5")}</h2>
              <img src={Vectorlogistica3} alt="" className="vector-chile3" />
            </div>
            <p className="txt-direccionChile">recepcion@cngrupo.com.ar</p>
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

export default Ccn;
