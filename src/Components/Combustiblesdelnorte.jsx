import React, { useState } from "react";
/*import ExpandLessIcon from "@material-ui/icons/ExpandLess";*/
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo2 from "../Assets/CN - INFO IMPOSITIVA grey@300x.png";
import fotocomb from "../Assets/650X388px WEB est fijas.png";
import fotocombMob from "../Assets/650X388px WEB est moviles.png";
import fotocombDis from "../Assets/650X388px WEB dd.png";
import fotocombSF from "../Assets/650X388px WEB ss financieras.png";
import fotocombSum from "../Assets/650X388px WEB summa.png";
import fotocombMD from "../Assets/650X388px WEB md.png";
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
import NAVBAR from "./NavBar";
import "./Combustiblesdelnorte.css";
import ScrollToTop from "react-scroll-to-top";
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"

const Combustibles = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/
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
          src={videoSourceComb}
          autoPlay
          loop
          muted
          className="tuvideo"
        >
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
              <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
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
            Somos una empresa que ofrece
            <span className="txt-empresa-spanComb">
              soluciones integrales
            </span>{" "}
            adaptadas a las necesidades de nuestros clientes a través de la
            distribución mayorista de Diesel. Asimismo somos distribuidores
            oficiales de{" "}
            <span className="txt-empresa-spanComb">
              lubricantes y asfalto YPF.
            </span>
          </p>
        </div>
      </div>
      <div className="banner-comb"></div>

      <div className="container-txt-cardCombustible">
        <h2 className="Comb-title">Soluciones Oil</h2>
        <hr className="linea-Comb"></hr>
        <h3 className="h3sub-combus">MIC - manejo integral de combustible </h3>
        <p className="txt-comb-boton">
          soluciones digitales de distribución de{" "}
          <span className="txt-empresa-spanComb">combustible</span> para
          estaciones<span className="txt-empresa-spanComb"> fijas </span>{" "}
          estaciones
          <span className="txt-empresa-spanComb">
            {" "}
            moviles y distribución capilar.
          </span>
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
            ESTACIONES FIJAS
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: selectedButton === 2 ? "#009fe3" : "transparent",
              color: selectedButton === 2 ? "white" : "#009fe3",
            }}
          >
            ESTACIONES MOVILES
          </button>
          <button
            className="info-btn-Comb"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: selectedButton === 3 ? "#009fe3" : "transparent",
              color: selectedButton === 3 ? "white" : "#009fe3",
            }}
          >
            DISTRIBUCIÓN CAPILAR
          </button>
        </div>
        <div className="card">
          {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocomb} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">Estaciones Fijas</h2>
                  <p className="txt-Comb-boton2">
                    Es una solución
                    <span className="txt-empresa-spanComb">
                      {" "}
                      inteligente y customizada
                    </span>{" "}
                    del manejo de combustible para estaciones
                    <span className="txt-empresa-spanComb"> fijas.</span>
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
                  <h2 className="Comb-title2">Estaciones Movíles</h2>
                  <p className="txt-Comb-boton2">
                    Es una solución
                    <span className="txt-empresa-spanComb">
                      {" "}
                      inteligente y customizada
                    </span>{" "}
                    del manejo de combustible para estaciones
                    <span className="txt-empresa-spanComb"> movíles.</span>
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
                  <h2 className="Comb-title2">Distribucion Capilar</h2>
                  <p className="txt-Comb-boton2">
                    Es un
                    <span className="txt-empresa-spanComb">
                      {" "}
                      servicio logistico
                    </span>{" "}
                    de entrega de combustible en el útimo tramo en el proceso de
                    suministro. Abastecemos cada máquina utilizando camiones
                    provistos de
                    <span className="txt-empresa-spanComb"> cisternas</span> y
                    sistemas de bombas de
                    <span className="txt-empresa-spanComb">
                      {" "}
                      superalto caudal{" "}
                    </span>{" "}
                    (250 lpm) con los más altos estándares de seguridad y
                    tecnología para lograr un abastecimiento con trazabilidad,
                    precisión e información clave para la toma de desiciones.
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
            <h2 className="Comb-title">Lubricentro</h2>
            <hr className="linea-Comb"></hr>
            <p className="txt-Combustible-card">
              Distribuimos <span className="txt-empresa-spanComb">ELAION</span>,
              la línea de lubricantes de{" "}
              <span className="txt-empresa-spanComb">YPF </span>empleados en el
              rubro agrícola, automotriz, industrial, náutico, de transporte,
              para motos y aceites agrícolas. Los lubricantes{" "}
              <span className="txt-empresa-spanComb">ELAION</span> son aptos
              para todos los vehículos equipados con motores 4 tiempos que
              utilicen cualquier tipo de combustible
            </p>
          </div>
          <img src={fotolubri} alt="" className="fotosgris1" />
        </div>

        <div className="container-completoComb">
          <div className="titulo-linea-p-comb">
            <h2 className="Comb-title">YPF Asfaltos</h2>
            <hr className="linea-Comb"></hr>
            <p className="txt-Combustible-card">
              Somos representantes oficiales y distribuidores exclusivos en toda
              la provincia de Salta de{" "}
              <span className="txt-empresa-spanComb">YPF ASFALTOS</span>,
              líderes en la comercialización de{" "}
              <span className="txt-empresa-spanComb">asfaltos</span> e insumos{" "}
              <span className="txt-empresa-spanComb">energéticos</span> para la
              construcción, asegurando un{" "}
              <span className="txt-empresa-spanComb">
                servicio personalizado
              </span>{" "}
              para cada cliente.
            </p>
          </div>
          <img src={fotoasfalto} alt="" className="fotosgris2" />
        </div>

        <div className="seccion2">
          <h3 className="viales">Viales</h3>

          <div className="numeritos">
            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">01</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">CEMENTOS ASFÁLTICOS</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">02</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">ASFALTOS MODIFICADOS</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">03</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">EMULSIONES ASFÁLTICAS</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">04</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">ASFALTOS TIBIOS</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">05</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">SELLADORES ASFÁLTICOS</p>
            </div>
          </div>
          <h3 className="viales">Industriales</h3>
          <div className="numeritos">
            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">01</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">ASFALTO BASE PLÁSTICO</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">02</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">PINTURA ALFÁLTICA</p>
            </div>

            <div className="numeroytxt">
              <div className="numerocomb">
                <h2 className="numerito">03</h2>
                <hr className="lineanum"></hr>
              </div>
              <p className="txt-num">ASFALTO PLÁSTICO N°1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-comb2"></div>

      <div className="container-comb">
        <img src={logo2} alt="" className="Combimg2" />
        <div className="containter-logo-img-comb">
          <h2 className="Comb-title">Agro</h2>
          <hr className="linea-Comb"></hr>
          <p className="p-Comb1">
            {" "}
            Somos representantes oficiales de
            <span className="txt-empresa-spanComb">YPF AGRO</span> empresa líder
            en potenciar el desarrollo integral del campo argentino, a través de
            la provisión de los{" "}
            <span className="txt-empresa-spanComb"> insumos y la energía</span>{" "}
            necesaria para producir más y mejor.<br></br>
            <br></br>
            Buscamos <span className="txt-empresa-spanComb">
              transformar
            </span>{" "}
            el trabajo de nuestros clientes agricultores, brindándoles
            <span className="txt-empresa-spanComb">soluciones concretas</span> y
            una amplia gama de productos y servicios para
            <span className="txt-empresa-spanComb">
              {" "}
              protección y nutrición
            </span>
            de cultivos, semillas, bolsas para silo.
          </p>
        </div>
      </div>

      <div className="container-txt-cardCombustible1">
        <h2 className="Comb-title">Soluciones Agro</h2>
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
            MUESTREO DIRIGIDO
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
            SUMMA
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
            SOLUCIONES FINANCIERAS
          </button>
        </div>
        <div className="card">
          {selectedButton1 === 1 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombMD} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">Muestreo Dirigido</h2>
                  <ul className="lista-Comb">
                    <li>Servicio de muestreo y análisis de suelo.</li>
                    <li>Extracción de muestras compuestas con calador hidráulico automático.</li>
                    <li>Fertilidad de suelo.</li>
                    <li>Agua útil de suelo.</li>
                    <li>Análisis de laboratorio.</li>
                  </ul>
                  <button className="info-btn-Comb">DESCARGAR PDF</button>
                </div>
              </div>
            </>
          )}
          {selectedButton1 === 2 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombSum} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">Summa</h2>
                  <p className="txt-Comb-boton2">
                    Propuesta
                    <span className="txt-empresa-spanComb">
                      {" "}
                      integral{" "}
                    </span>{" "}
                    de agricultura de precisión de máxima tecnología en cada etapa para la
                    <span className="txt-empresa-spanComb">
                      {" "}
                      nutrición{" "}
                    </span>{" "}
                    de tus
                    <span className="txt-empresa-spanComb">
                      {" "}
                      cultivos.
                    </span>
                  </p>
                  <button className="info-btn-Comb">DESCARGAR PDF</button>
                </div>
              </div>
            </>
          )}
          {selectedButton1 === 3 && (
            <>
              <div className="containerfoto-botones-Comb">
                <img src={fotocombSF} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">Soluciones Financieras</h2>
                  <p className="txt-Comb-boton2">
                    Tenemos una diversidad de
                    <span className="txt-empresa-spanComb">
                      {" "}
                      herramientas financieras{" "}
                    </span>{" "}
                    adaptadas para cada sector y al contexto económico mundial.
                  </p>
                  <h3 className="socios-comb">Nuestros socios estratégicos </h3>
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
        <h2 className="Comb-title">Contacto</h2>
        <hr className="linea-Comb"></hr>
        <p className="txt-Combustible-card">
          Para contactarnos, podés hacerlo a través de estos canales:
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
              <h2 className="title-direccion-Combustible">Embarcacion</h2>
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
                  Embarcacion, Salta (4400)
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
          <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">
            © 2024 CN Grupo - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Combustibles;
