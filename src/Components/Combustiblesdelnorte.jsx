import React, { useState } from "react";
/*import ExpandLessIcon from "@material-ui/icons/ExpandLess";*/
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo2 from "../Assets/CN - INFO IMPOSITIVA grey@300x.png";
/*import fotocomb from "../Assets/650X388px WEB est fijas.png";*/
import fotocomb from "../Assets/Est. Fijas.jpg";
/*import fotocombMob from "../Assets/650X388px WEB est moviles.png";*/
import fotocombMob from "../Assets/Est. Móviles.jpg";
import fotocombDis from "../Assets/650X388px WEB dd.png";
import fotocombSF from "../Assets/650X388px WEB ss financieras.png";
import fotocombSum from "../Assets/650X388px WEB summa.png";
import fotocombMD from "../Assets/650X388px WEB md.png";
import fotocombHibridas from "../Assets/Est. Híbridas.jpg";
import fotocombAuto from "../Assets/Autogestión.jpg";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import logowpp from "../Assets/logowpp.png";
import fotolubri from "../Assets/650X388px WEB lubricentro.png";
import fotoasfalto from "../Assets/650X388px WEB asfalto.png";
import logoneca1 from "../Assets/logoneca1.png";
import logoneca2 from "../Assets/logoneca2.png";
import logoneca3 from "../Assets/logoneca3.png";
import logoneca4 from "../Assets/logoneca4.png";
import vectorneca4 from "../Assets/logomail.svg";
import LogoPersona from "../Assets/logoPersona.svg";
import videoSourceComb from "../Assets/COMBUSTIBLES DEL NORTE.mp4";
import videoSourceComb1 from "../Assets/COMBUSTIBLES-DEL-NORTE.av1.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBar";
import "./Combustiblesdelnorte.css";
import ScrollToTop from "react-scroll-to-top";
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"

const Combustibles = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const [selectedButton1, setSelectedButton1] = useState(1);

  const handleButtonClick1 = (buttonNumber1) => {
    setSelectedButton1(buttonNumber1);
  };

  return (
    <div className="home-container">
      <div className="video">
      <video
          autoPlay
          loop
          muted
          className="tuvideo"
        >
          <source src={videoSourceComb1} type="video/mp4; codecs=av01" />
          <source src={videoSourceComb} type="video/mp4" />
        </video>
        <div className="content">
        <NAVBAR></NAVBAR>
        <div className="redes-container-empresa-comb">
        <a
                href="https://www.linkedin.com/company/combustibles-del-norte-sa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icono-red-social" />
              </a>
              <a
                href="https://www.instagram.com/combustiblesdelnorte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCC-Vygd1j-0AuZImFoso-eg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icono-red-social" />
              </a>
              <a
                href="https://www.facebook.com/people/Combustibles-del-Norte/100083683570651/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social" />
              </a>
        </div>
        <div className="txt-redesComb">
          <div className="txt-container-empresaComb">
            <div className="linea-titulo">
              <hr class="mi-linea"></hr>
              <p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p>
            </div>
            <h2 className="logistica-title">COMBUSTIBLES DEL NORTE</h2>
          </div>
        </div>
        </div>
      </div>

      <div className="container-comb">
        <img src={logo2} alt="" className="Combimg1" />
        <div className="containter-logo-img-comb">
          <h2 className="Comb-title">Oil&Gas</h2>
          <hr className="linea-Comb"></hr>
          <p className="p-Comb1">
            {" "}
            {t("txtOil.txt1")}{" "}
            <span className="txt-empresa-spanComb">
            {t("txtOil.txt2")}
            </span>{" "}
            {t("txtOil.txt3")}{" "}
            <span className="txt-empresa-spanComb">
            {t("txtOil.txt4")}
            </span>
          </p>
        </div>
      </div>
      <div className="banner-comb"></div>

      <div className="container-txt-cardCombustible">
        <h2 className="Comb-title">{t("txtSoluciones.txt1")}</h2>
        <hr className="linea-Comb"></hr>
        <h3 className="h3sub-combus">{t("txtSoluciones.txt2")} </h3>
        <p className="txt-comb-boton">
          Ofrecemos{" "}
          <span className="txt-empresa-spanComb">soluciones digitales{" "}</span> 
          avanzadas para la gestión y distribución de combustible en diversas configuraciones. 
          Nuestros proyectos abarcan estaciones fijas, estaciones móviles, estaciones híbridas, 
          distribución capilar y autogestión, proporcionando
          <span className="txt-empresa-spanComb"> control, eficiencia y seguridad </span>{" "}
          en todas las etapas del proceso.
        </p>
        <div className="Comb-buttons">
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: selectedButton === 1 ? "#009fe3" : "transparent",
              color: selectedButton === 1 ? "white" : "#009fe3",
            }}
          >
            {t("txtSoluciones.txt3")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: selectedButton === 2 ? "#009fe3" : "transparent",
              color: selectedButton === 2 ? "white" : "#009fe3",
            }}
          >
            {t("txtSoluciones.txt4")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: selectedButton === 3 ? "#009fe3" : "transparent",
              color: selectedButton === 3 ? "white" : "#009fe3",
            }}
          >
            {t("txtSoluciones.txt5")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(4)}
            style={{
              backgroundColor: selectedButton === 4 ? "#009fe3" : "transparent",
              color: selectedButton === 4 ? "white" : "#009fe3",
            }}
          >
            {t("txtSoluciones.txt11")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(5)}
            style={{
              backgroundColor: selectedButton === 5 ? "#009fe3" : "transparent",
              color: selectedButton === 5 ? "white" : "#009fe3",
            }}
          >
            {t("txtSoluciones.txt12")}
          </button>
        </div>
        <div className="card">
          {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocomb} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt6")}</h2>
                  <p className="txt-Comb-boton2">
                  Proporcionamos una
                    <span className="txt-empresa-spanComb">{" "}solución inteligente y personalizada</span>
                    {" "}para el manejo de combustible. Mediante la tecnología MIC, ofrecemos{" "}
                    <span className="txt-empresa-spanComb"> telemedición y control integral{" "}</span>
                    del combustible, permitiendo la gestión remota e integrada de todas las operaciones de 
                    abastecimiento y despacho. Los beneficios clave incluyen la optimización de procesos, 
                    seguridad en el despacho y monitoreo continuo de niveles y equipos.

                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 2 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombMob} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt7")}</h2>
                  <p className="txt-Comb-boton2">
                  Nuestras soluciones están adaptadas para la gestión remota del combustible 
                  en movimiento. Integramos la tecnología de
                    <span className="txt-empresa-spanComb">{" "}telemedición y control</span>
                    {" "}de combustible en{" "}
                    <span className="txt-empresa-spanComb">camiones cisterna y batanes,{" "}</span>
                    proporcionando autorización segura de despachos y monitoreo constante de los 
                    niveles de combustible, accesible desde cualquier lugar y dispositivo.
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 3 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombDis} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt8")}</h2>
                  <p className="txt-Comb-boton2">
                  Ofrecemos un
                    <span className="txt-empresa-spanComb">{" "}servicio logístico</span>
                    {" "}especializado en la entrega de combustible en el último tramo del 
                    proceso de suministro. Utilizamos{" "}   
                    <span className="txt-empresa-spanComb">camiones cisterna</span>
                    {" "}equipados con bombas de{" "}
                    <span className="txt-empresa-spanComb">superalto caudal</span>
                    {" "}(250 lpm) y los más altos estándares de seguridad y tecnología. 
                    Aseguramos un abastecimiento preciso, trazable y eficiente, permitiendo 
                    obtener información clave para la toma de decisiones estratégicas y operativas.
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 4 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombHibridas} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt9")}</h2>
                  <p className="txt-Comb-boton2">
                  Combinamos la estabilidad de las estaciones fijas con la
                    <span className="txt-empresa-spanComb">{" "}flexibilidad</span>
                    {" "}de ser reubicadas en cualquier lugar. Esta solución es ideal 
                    para entornos que requieren movilidad sin perder el{" "}   
                    <span className="txt-empresa-spanComb">control</span>
                    {" "}y la eficiencia en la{" "}
                    <span className="txt-empresa-spanComb">gestión remota</span>
                    {" "}del combustible.
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 5 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombAuto} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt10")}</h2>
                  <p className="txt-Comb-boton2">
                  Permitimos a los usuarios
                    <span className="txt-empresa-spanComb">{" "}autogestionar abastecimientos</span>
                    {" "}de manera eficiente. A través de un{" "}   
                    <span className="txt-empresa-spanComb">bot de WhatsApp,</span>
                    {" "}los clientes pueden solicitar combustible y autosurtirse tras validar la 
                    información. Esta solución en proceso de construcción promete reducir tiempos 
                    de espera y mejorar la autonomía del cliente en el manejo de combustible.{" "}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="container-gris">
        <div className="container-completoComb">
          <div className="titulo-linea-p-comb">
            <h2 className="Comb-title">{t("txtLubricentro.txt1")}</h2>
            <hr className="linea-Comb"></hr>
            <p className="txt-Combustible-card">
            {t("txtLubricentro.txt2")} <span className="txt-empresa-spanComb">{t("txtLubricentro.txt3")}</span>,
            {" "}{t("txtLubricentro.txt4")}{" "}
              <span className="txt-empresa-spanComb">{t("txtLubricentro.txt5")} </span>{t("txtLubricentro.txt6")}{" "}
              <span className="txt-empresa-spanComb">{t("txtLubricentro.txt8")}</span> {t("txtLubricentro.txt7")}
            </p>
          </div>
          <img src={fotolubri} alt="" className="fotosgris1" />
        </div>

        <div className="container-completoComb">
          <div className="titulo-linea-p-comb">
            <h2 className="Comb-title">{t("txtAsfalto.txt1")}</h2>
            <hr className="linea-Comb"></hr>
            <p className="txt-Combustible-card">
            {t("txtAsfalto.txt2")}{" "}
              <span className="txt-empresa-spanComb">{t("txtAsfalto.txt3")}</span>,
              {" "}{t("txtAsfalto.txt4")}{" "}
              <span className="txt-empresa-spanComb">{t("txtAsfalto.txt5")}</span> 
              <span className="txt-empresa-spanComb">{" "}{t("txtAsfalto.txt6")}</span> {t("txtAsfalto.txt7")}{" "}
              <span className="txt-empresa-spanComb">
              {t("txtAsfalto.txt8")}
              </span>{" "}
              {t("txtAsfalto.txt9")}
            </p>
          </div>
          <img src={fotoasfalto} alt="" className="fotosgris2" />
        </div>

        <div className="seccion2">
          <h3 className="viales">{t("txtViales.txt1")}</h3>

          <div className="numeritos">
            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">01</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtViales.txt2")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">02</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtViales.txt3")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">03</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtViales.txt4")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">04</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtViales.txt5")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">05</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtViales.txt6")}</p>
            </div>
          </div>
          <h3 className="viales">{t("txtIndustriales.txt1")}</h3>
          <div className="numeritos">
            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">01</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtIndustriales.txt2")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">02</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtIndustriales.txt3")}</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">03</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">{t("txtIndustriales.txt4")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-comb2"></div>

      <div className="container-comb">
        <img src={logo2} alt="" className="Combimg2" />
        <div className="containter-logo-img-comb">
          <h2 className="Comb-title">{t("txtAgroCN.txt1")}</h2>
          <hr className="linea-Comb"></hr>
          <p className="p-Comb1">
            {" "}
            {t("txtAgroCN.txt2")}
            <span className="txt-empresa-spanComb">{" "}{t("txtAgroCN.txt3")}</span> {t("txtAgroCN.txt4")}{" "}
            <span className="txt-empresa-spanComb"> {t("txtAgroCN.txt5")}</span>{" "}
            {t("txtAgroCN.txt6")}<br></br>
            <br></br>
            {t("txtAgroCN1.txt1")} <span className="txt-empresa-spanComb">
            {t("txtAgroCN1.txt2")}
            </span>{" "}
            {t("txtAgroCN1.txt3")}{" "}
            <span className="txt-empresa-spanComb">{t("txtAgroCN1.txt4")}</span> {t("txtAgroCN1.txt5")}
            <span className="txt-empresa-spanComb">
              {" "}
              {t("txtAgroCN1.txt6")}{" "}
            </span>
            {t("txtAgroCN1.txt7")}
          </p>
        </div>
      </div>

      <div className="container-txt-cardCombustible1">
        <h2 className="Comb-title">{t("txtSolucionesAgro.txt1")}</h2>
        <hr className="linea-Comb"></hr>
        <div className="Comb-buttons">
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick1(1)}
            style={{
              backgroundColor:
                selectedButton1 === 1 ? "#009fe3" : "transparent",
              color: selectedButton1 === 1 ? "white" : "#009fe3",
            }}
          >
            {t("txtSolucionesAgro.txt2")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick1(2)}
            style={{
              backgroundColor:
                selectedButton1 === 2 ? "#009fe3" : "transparent",
              color: selectedButton1 === 2 ? "white" : "#009fe3",
            }}
          >
            {t("txtSolucionesAgro.txt3")}
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick1(3)}
            style={{
              backgroundColor:
                selectedButton1 === 3 ? "#009fe3" : "transparent",
              color: selectedButton1 === 3 ? "white" : "#009fe3",
            }}
          >
            {t("txtSolucionesAgro.txt4")}
          </button>
        </div>
        <div className="card">
          {selectedButton1 === 1 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombMD} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtMuestreo.txt1")}</h2>
                  <ul className="lista-Comb">
                    <li>Servicio de muestreo y análisis de suelo.</li>
                    <li>Extracción de muestras compuestas con calador hidráulico automático.</li>
                    <li>Fertilidad de suelo.</li>
                    <li>Agua útil de suelo.</li>
                    <li>Análisis de laboratorio.</li>
                  </ul>
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                </div>
              </div>
            </>
          )}
          {selectedButton1 === 2 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombSum} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSumma.txt1")}</h2>
                  <p className="txt-Comb-boton2">
                    <span className="txt-empresa-spanComb">
                      {" "}
                      {t("txtSumma.txt2")}{" "}
                    </span>{" "}
                    {t("txtSumma.txt3")}
                    <span className="txt-empresa-spanComb">
                      {" "}
                      {t("txtSumma.txt4")}{" "}
                    </span>{" "}
                    {t("txtSumma.txt5")}
                    <span className="txt-empresa-spanComb">
                      {" "}
                      {t("txtSumma.txt6")}
                    </span>
                  </p>
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                </div>
              </div>
            </>
          )}
          {selectedButton1 === 3 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombSF} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSolucionesFinancieras.txt1")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtSolucionesFinancieras.txt2")}
                    <span className="txt-empresa-spanComb">
                      {" "}
                      {t("txtSolucionesFinancieras.txt3")}{" "}
                    </span>{" "}
                    {t("txtSolucionesFinancieras.txt4")}
                  </p>
                  <h3 className="socios-comb">{t("txtSolucionesFinancieras.txt5")}</h3>
                  <div className="logos-neca2">
                    <img src={logoneca1} alt="" className="logo-neca2" />
                    <img src={logoneca2} alt="" className="logo-neca2a" />
                    <img src={logoneca3} alt="" className="logo-neca2b" />
                    <img src={logoneca4} alt="" className="logo-neca2c" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="banner-comb3"></div>

      <div className="container-txt-cardCombustible">
        <h2 className="Comb-title">{t("txtContacto.txt1")}</h2>
        <hr className="linea-Comb"></hr>
        <p className="txt-Combustible-card">
        {t("txtContacto.txt2")}
        </p>
        <div className="container-cards-Combustible">
          <div className="card-Comb">
            <div className="titulo-Combustible">
              <h2 className="title-direccion-Combustible">Las Lajitas</h2>
            </div>
            <div className="CardCombustibleContacto">
              <div className="CombDirec">
                <img src={LogoPersona} alt="" className="logoComb4" />
                <p className="txt-direccion-Combustible">Marcos Cornejo</p>
              </div>
              <div className="CombDirec1">
                <img src={logodireccion} alt="" className="logoComb1" />
                <p className="txt-direccion-Combustible">
                  Ruta Prov. 5, Interseccion
                  <br />
                  Ruta 30, A4449 Las Lajitas
                </p>
              </div>
              <div className="CombDirec2">
                <img src={logowpp} alt="" className="logoComb3" />
                <img src={logotelefono} alt="" className="logoComb2" />
                <p className="txt-direccion-Combustible">+54 387 504-6010</p>
              </div>
              <div className="CombDirec3">
                <img src={vectorneca4} alt="" className="vectorComb4" />
                <p className="txt-direccion-Combustible">
                  mcornejo@cngrupo.com.ar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-cards-Combustible">
          <div className="card-Comb1">
            <div className="titulo-Combustible">
              <h2 className="title-direccion-Combustible">Embarcación</h2>
            </div>
            <div className="CardCombustibleContacto">
              <div className="CombDirec4">
                <img src={LogoPersona} alt="" className="logoComb4" />
                <p className="txt-direccion-Combustible">Pablo Bertolin</p>
              </div>
              <div className="CombDirec1">
                <img src={logodireccion} alt="" className="logoComb1" />
                <p className="txt-direccion-Combustible">
                  Ruta Nacional 34, KM1344,
                  <br />
                  Embarcación, Salta (4400)
                </p>
              </div>
              <div className="CombDirec2">
                <img src={logowpp} alt="" className="logoComb3" />
                <img src={logotelefono} alt="" className="logoComb2" />
                <p className="txt-direccion-Combustible">+54 387 441-0667</p>
              </div>
              <div className="CombDirec3">
                <img src={vectorneca4} alt="" className="vectorComb4" />
                <p className="txt-direccion-Combustible">
                  pbertolin@cngrupo.com.ar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Scroll">
         <ScrollToTop
            smooth="false"
            color="white"
            className="scroll-to-top"
            style={{
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#5ABDCF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
            }}
            component={
              <img
                src={FlechaScrol}
                alt="Icono Personalizado"
                style={{
                  width: 22, 
                  height: 11, 
                  top: "50%",
                  left: "50%",
                  transform: "translate(0%, -20%)",
                }}
              />
            }
          />
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

export default Combustibles;
