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
import videoSourceGuemes from "../Assets/Guemes web.mp4";
import NAVBAR from "./NavBar";
import "./Plantaguemes.css"
/*import fotogas from "../Assets/autoelevadores 15 kg  1.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import logowpp from "../Assets/logowpp.png";
import logodelivery from "../Assets/logodelivery.png";
import imgchile from "../Assets/TEXTO DESCRIPCION - CN GRUPO EMBARCACION Y LAJITAS (33).png";*/

const Navchapa = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSourceGuemes}
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
                <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
              </div>
              <h2 className="logistica-title">PLANTA GÜEMES</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-planta">
        <img src={loggo3} alt="" className="logoplanta" />
        <p className="p-planta">
          La <span className="txt-empresa-spanGue">Planta Güemes</span> es nuestra
          terminal logística de
          <span className="txt-empresa-spanGue"> fertilizantes</span> al servicio
          de YPF en la provincia de Salta. <br></br>
          <br></br>
          La planta se encuentra ubicada en el Parque Industrial General Güemes,
          punto estratégico para el abastecimiento de los principales mercados
          del <span className="txt-empresa-spanGue"> NOA.</span>
        </p>
      </div>

      <div className="banner-planta"></div>

      <div className="container-txt-card-planta">
        <h2 className="Planta-title-card">Nuestros Productos y Servicios</h2>
        <hr className="linea-Guemes"></hr>
        <p className="p-planta">
          Realizamos la{" "}
          <span className="txt-empresa-spanGue">
            {" "}
            formulación, mezclado y embolsado
          </span>{" "}
          de fertilizantes granulados, ofreciendo al cliente final la
          posibilidad de{" "}
          <span className="txt-empresa-spanGue"> armar su propia mezcla</span> “a
          medida” y de acuerdo con los requerimientos que su cultivo y su suelo
          necesitan.
        </p>
      </div>

      <div className="seccion2planta">
        <div className="numeritos">
          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numerito">01</h2>
              <hr className="lineanum"></hr>
            </div>
            <div className="parrafos">
              <p className="txt-numAPlanta">
                EN BOLSAS DE BOCA ABIERTA<br></br> O DE BOCA VALVULADA
              </p>
              <p className="txt-pequeño">Papel/ Polipropileno</p>
            </div>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numerito">02</h2>
              <hr className="lineanum"></hr>
            </div>
            <p className="txt-numAPlanta">EN BIG BAGS DE 1.000 KG</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numerito">03</h2>
              <hr className="lineanum"></hr>
            </div>
            <p className="txt-numAPlanta">A GRANEL</p>
            <p className="txt-pequeñoA">Puros y Mezclas</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numerito">04</h2>
              <hr className="lineanum"></hr>
            </div>
            <p className="txt-numAPlanta">PUROS Y MEZCLAS DIVERSAS</p>
            <p className="txt-pequeñoB">Tabacaleras, Triple 15 y otros</p>
          </div>

          <div className="numeroytxtPlanta">
            <div className="numeroPlanta">
              <h2 className="numerito">05</h2>
              <hr className="lineanum"></hr>
            </div>
            <p className="txt-numAPlanta">
              NITROGENADOS, FOSFATADOS,<br></br> POTÁSICOS
            </p>
          </div>
        </div>
      </div>

      <div className="container-txt-card-planta1">
        <h2 className="Planta-title-card">Contacto</h2>
        <hr className="linea-Guemes"></hr>
        <p className="txt-guemes-card">
          Para contactarnos, podés hacerlo a través de estos canales:
        </p>
        <div className="container-cards-logistica">
        <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">Responsable</h2>
              <img src={Vectorlogistica} alt="" className="vector-guemes" />
            </div>
            <p className="txt-direccionGuemes">Jorge Tiscornia</p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">Dirección</h2>
              <img src={Vectorlogistica1} alt="" className="vector-guemes1" />
            </div>
            <p className="txt-direccionGuemes">Parque Industrial General <br></br>
            Güemes Seccion F Mz <br></br>
            14 (4430)
            </p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">Teléfono</h2>
              <img
                src={Vectorlogistica2}
                alt=""
                className="vector-guemes2"
              />
            </div>
            <p className="txt-direccionGuemes">(0387) 473-1429</p>
          </div>
          <div className="card-contactoGue">
            <div className="titulo-logo-guemes">
              <h2 className="title-direccionGuemes">Email</h2>
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

export default Navchapa;
