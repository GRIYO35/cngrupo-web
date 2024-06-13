/*import Logo from "../Assets/cngrupocolor.png";*/
import React from "react";
/*import { BrowserRouter, Link, Route, Routes } from "react-router-dom";*/
import { Contactocomponente } from "../Components/Contactocomponente";
import imgcontacto from "../Assets/CONTACTO 537X249px.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import vectorcontacto from "../Assets/Vector (11).png";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarOscura";
import "./Contacto.css";

const Navinfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <NAVBAR></NAVBAR>
      <div className="dosrecuadros">
        <div className="unrecuadro">
          <div className="txt-container-contacto">
            <div className="linea-titulo2Con">
              <hr class="milinea-contacto"></hr>
              <p className="subtitulocontacto">{t("li.CONTACT")}</p>
            </div>
            <h2 className="titulo-Contacto">
            {t("txtContactoPagina.txt1")}<br></br>{t("txtContactoPagina.txt2")}
            </h2>
            <p className="p-contacto1">
            {t("txtContactoPagina.txt3")}
            </p>
          </div>
        </div>

        <div className="otrorecuadro">
          <img src={imgcontacto} alt="" className="imgcontacto" />

          <h2 className="title-contacto">{t("txtContacto.txt4")}</h2>
          <div className="logo-txt-contacto">
            <img src={logotelefono} alt="" className="vectorcontacto" />
            <p className="txt-direccion-contacto">0387 423-6555</p>
          </div>
          <hr className="linea-contacto"></hr>

          <h2 className="title-contacto">{t("txtContacto.txt3")}</h2>
          <div className="logo-txt-contacto">
            <img src={logodireccion} alt="" className="vectorcontacto" />
            <p className="txt-direccion-contacto">
              Av. Chile 1275, A4400 Salta
            </p>
          </div>
          <hr className="linea-contacto"></hr>

          <h2 className="title-contacto">{t("txtContacto.txt5")}</h2>
          <div className="logo-txt-contacto">
            <img src={vectorcontacto} alt="" className="vectorcontacto2" />
            <p className="txt-direccion-contacto">recepcion@cngrupo.com.ar</p>
          </div>
          <hr className="linea-contacto"></hr>
        </div>
        <Contactocomponente></Contactocomponente>
      </div>

      <div className="footerContacto">
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

export default Navinfo;

