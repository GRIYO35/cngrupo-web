import Logo from "../Assets/cngrupocolor.png";
import React, { useState, useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Contactocomponente } from "../Components/Contactocomponente";
import imgcontacto from "../Assets/CONTACTO 537X249px.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import vectorcontacto from "../Assets/Vector (11).png";
import NAVBAR from "./NavBarOscura";
import "./Contacto.css";

const Navinfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      <NAVBAR></NAVBAR>
      <div className="dosrecuadros">
        <div className="unrecuadro">
          <div className="txt-container-contacto">
            <div className="linea-titulo2Con">
              <hr class="milinea-contacto"></hr>
              <p className="subtitulocontacto">CONTACTO</p>
            </div>
            <h2 className="titulo-Contacto">
              Gracias por tu interés<br></br> en nuestra empresa
            </h2>
            <p className="p-contacto1">
              Envianos tu consulta y recibirás la respuesta en tu casilla de
              e-mail
            </p>
          </div>
        </div>

        <div className="otrorecuadro">
          <img src={imgcontacto} alt="" className="imgcontacto" />

          <h2 className="title-contacto">Telfono</h2>
          <div className="logo-txt-contacto">
            <img src={logotelefono} alt="" className="vectorcontacto" />
            <p className="txt-direccion-contacto">0387 423-6555</p>
          </div>
          <hr className="linea-contacto"></hr>

          <h2 className="title-contacto">Dirección</h2>
          <div className="logo-txt-contacto">
            <img src={logodireccion} alt="" className="vectorcontacto" />
            <p className="txt-direccion-contacto">
              Av. Chile 1275, A4400 Salta
            </p>
          </div>
          <hr className="linea-contacto"></hr>

          <h2 className="title-contacto">Email</h2>
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
          <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">
            © 2023 CN Grupo - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navinfo;

