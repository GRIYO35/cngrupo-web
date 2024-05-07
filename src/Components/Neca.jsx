import React, { useState } from "react";
import {Link} from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import necaimg1 from "../Assets/Frame (2).png";
import vectorneca1 from "../Assets/Capa_2 (1).png";
import vectorneca2 from "../Assets/Group 94 (2).png";
import vectorneca3a from "../Assets/Vector (6).png";
import vectorneca3b from "../Assets/Vector (7).png";
import vectorneca4 from "../Assets/Vector (8).png";
import hervicida from "../Assets/hervicidad.png";
import insecticida from "../Assets/insecticidas.png";
import fungicida from "../Assets/fungicidas.png";
import coadyuvante from "../Assets/coadyudantes.png";
import tratamiento from "../Assets/semillas.png";
import soja from "../Assets/soja.png";
import maiz from "../Assets/maiz.png";
import fertilizante from "../Assets/fertilizante.png";
import silobolsa from "../Assets/silobolsa.png";
import fotobotones from "../Assets/650X388px SS financieras.png";
import fotobotones1 from "../Assets/650X388px WEB ase tecnico.png";
import fotobotones2 from "../Assets/650X388px WEB curado semillas.png";
import fotobotones3 from "../Assets/650X388px WEB granos.png";
import fotobotones4 from "../Assets/650X388px WEB siembra.png";
import fotobotones5 from "../Assets/650X388px WEB ss digitales.png";
import logoneca1 from "../Assets/logoneca1.png";
import logoneca2 from "../Assets/logoneca2.png";
import logoneca3 from "../Assets/logoneca3.png";
import logoneca4 from "../Assets/logoneca4.png";
import logogrande1 from "../Assets/syengenta WEB@300x.png";
import logogrande2 from "../Assets/nk WEB@300x.png";
import logogrande3 from "../Assets/adama WEB@300x.png";
import logogrande4 from "../Assets/sumitomo WEB@300x.png";
import logogrande5 from "../Assets/atanor WEB@300x.png";
import logogrande6 from "../Assets/silobolsa plastar WEB@300x.png";
import logogrande7 from "../Assets/sigma agro WEB@300x.png";
import logogrande8 from "../Assets/insuagro WEB@300x.png";
import videoSourceNECA from "../Assets/NECA web v3.mp4";
import NAVBAR from "./NavBar";
import ScrollToTop from "react-scroll-to-top";
import "./Neca.css";
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"

const Neca = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/
  const [selectedButton, setSelectedButton] = useState(1);

    const handleDownload = () => {
    };

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="home-container">
      <div className="video">
      <video
          src={videoSourceNECA}
          autoPlay
          loop
          muted
          className="tuvideo"
        >
        </video>
        <div className="content">
        <NAVBAR></NAVBAR>
        <div className="redes-container-empresa-nec">
        <a
                href="https://www.linkedin.com/company/combustibles-del-norte-sa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icono-red-social" />
              </a>
              <a
                href="https://www.instagram.com/neca_agro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCKgtqquVfnw9rKAim7BfyFQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icono-red-social" />
              </a>
              <a
                href="https://www.facebook.com/CNAgro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social" />
              </a>
        </div>
        <div className="txt-redesNeca">
          <div className="txt-container-empresaNeca">
            <div className="linea-titulo">
              <hr class="mi-linea"></hr>
              <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
            </div>
            <h2 className="logistica-title">NECA</h2>
          </div>
        </div>
        </div>
      </div>

      <div className="container-neca">
        <img src={necaimg1} alt="" className="necaimg1" />
        <p className="p-neca1">
          {" "}
          Luego de varios años de trabajo y crecimiento,{" "}
          <span className="txt-empresa-spanNeca">CN Agro</span> evolucionó y se
          transformó en <span className="txt-empresa-spanNeca">NECA</span>, que
          surge de la unión de las palabras{" "}
          <span className="txt-empresa-spanNeca">NET</span>(red en inglés) y{" "}
          <span className="txt-empresa-spanNeca">CAMPO</span>. Ambas palabras
          representan la esencia de la marca que funciona como una red de
          conexión entre el campo y las nuevas oportunidades del mercado.
          <br></br>
          <br></br>A través de NECA brindamos las{" "}
          <span className="txt-empresa-spanNeca">soluciones </span>más precisas
          para cada uno de sus campos, la mejor{" "}
          <span className="txt-empresa-spanNeca">calidad</span> de productos y
          el servicio de
          <span className="txt-empresa-spanNeca"> excelencia</span> que nos
          caracteriza.
        </p>
      </div>
      <div className="banner-neca1"></div>

      <div className="container-dibujitos">
        <h2 className="neca-title">Nuestros productos</h2>
        <hr className="linea-neca"></hr>
        <div className="container-proteccion">
          <h3 className="neca-subtitle">Protección de cultivos</h3>
          <div className="productos-protección">
            <div className="container-producto-protección">
              <img src={hervicida} alt="" className="producto" />
              <p className="txt-productoNeca">HERBICIDAS</p>
            </div>
            <div className="container-producto-protección">
              <img src={insecticida} alt="" className="productoINS" />
              <p className="txt-productoNeca">INSECTICIDAS</p>
            </div>
            <div className="container-producto-protección">
              <img src={fungicida} alt="" className="productoFUN" />
              <p className="txt-productoNeca">FUNGICIDAS</p>
            </div>
            <div className="container-producto-protección">
              <img src={coadyuvante} alt="" className="productoCOA" />
              <p className="txt-productoNeca">COADYUVANTES</p>
            </div>
            <div className="container-producto-protección">
              <img src={tratamiento} alt="" className="productoSEM" />
              <p className="txt-productoNeca">
                TRATAMIENTO <br></br>DE SEMILLAS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-tresproductosNeca">
        <div className="container-proteccion">
          <h3 className="neca-subtitle">NK semillas</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección-e">
              <img src={soja} alt="" className="productoSOJ" />
              <p className="txt-productoNeca">SOJA</p>
            </div>
            <div className="container-producto-protección">
              <img src={maiz} alt="" className="productoMAI" />
              <p className="txt-productoNeca">MAÍZ</p>
            </div>
          </div>
        </div>

        <div className="container-proteccion">
          <h3 className="neca-subtitle">Nutrición de cultivos</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección">
              <img src={fertilizante} alt="" className="productoFER" />
              <p className="txt-productoNeca">FERTILIZANTES</p>
            </div>
          </div>
        </div>

        <div className="container-proteccion">
          <h3 className="neca-subtitle">Almacenamiento de granos</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección">
              <img src={silobolsa} alt="" className="productoSIL" />
              <p className="txt-productoNeca">SILOBOLSAS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-txt-cardNeca">
        <h2 className="neca-title">Servicios y Soluciones</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-neca-boton">
          Nuestro servicio de{" "}
          <span className="txt-empresa-spanNeca">entrega a domicilio</span> es
          nuestro valor agregado. Nos aseguramos de entregar
          <span className="txt-empresa-spanNeca"> calidad y seguridad</span> a
          tu hogar.
        </p>
        <div className="neca-org">
          <div className="neca-buttons">
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(1)}
              style={{
                backgroundColor:
                  selectedButton === 1 ? "#225065" : "transparent",
                color: selectedButton === 1 ? "white" : "#225065",
              }}
            >
              CURADO DE SEMILLAS
            </button>
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(2)}
              style={{
                backgroundColor:
                  selectedButton === 2 ? "#225065" : "transparent",
                color: selectedButton === 2 ? "white" : "#225065",
              }}
            >
              SOLUCIONES DIGITALES
            </button>
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(3)}
              style={{
                backgroundColor:
                  selectedButton === 3 ? "#225065" : "transparent",
                color: selectedButton === 3 ? "white" : "#225065",
              }}
            >
              SOLUCIONES FINANCIERAS
            </button>
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(4)}
              style={{
                backgroundColor:
                  selectedButton === 4 ? "#225065" : "transparent",
                color: selectedButton === 4 ? "white" : "#225065",
              }}
            >
              ASESORAMIENTO TÉCNICO
            </button>
          </div>
          <div className="neca-buttons1">
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(5)}
              style={{
                backgroundColor:
                  selectedButton === 5 ? "#225065" : "transparent",
                color: selectedButton === 5 ? "white" : "#225065",
              }}
            >
              SIEMBRAS
            </button>
            <button
              className="info-btn-neca"
              onClick={() => handleButtonClick(6)}
              style={{
                backgroundColor:
                  selectedButton === 6 ? "#225065" : "transparent",
                color: selectedButton === 6 ? "white" : "#225065",
              }}
            >
              GRANOS
            </button>
          </div>
        </div>

        <div>
        {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones2} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Curado profesional de semillas</h2>
                  <p className="txt-neca-boton2">
                    El <span className="txt-empresa-spanNeca"> curado de la semilla, </span>
                    antes de la siembra, es una practica muy importante, porque es el primer paso para obtener un buen stand de plantas en el cultivo que vamos a implantar y, fundamentyalmente para 
                    <span className="txt-empresa-spanNeca"> eliminar </span> los posibles
                    <span className="txt-empresa-spanNeca"> patogenos </span> que tengan las semillas.
                  </p>
                  <a href="https://drive.google.com/drive/folders/1PR5y1NpqB3MUJ3ZLA2C9YN5nvdMe_Y6h?usp=drive_link" download onClick={handleDownload}>
                  <button className="info-btn-neca">DESCARGAR PDF</button>
                  </a>
                </div>
              </div>
            </>
          )}
          {selectedButton === 2 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones5} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Soluciones Digitales</h2>
                  <p className="txt-neca-boton2">
                    La solución digital <span className="txt-empresa-spanNeca"> Cropwise </span>
                    te ayuda a trabajar de manera más fácil, rentable y sostenible.  
                    <span className="txt-empresa-spanNeca"> Recopila datos </span> 
                    geolocalizados de todas las plagas, malezas y enfermedades. obtiene una visión de lo que sucede en tu finca
                    <span className="txt-empresa-spanNeca"> en tiempo real </span> 
                    y recibe notificaciones sobre el estado de tu cultivo. Analiza la salud de tu cultivo
                    <span className="txt-empresa-spanNeca"> desde cualquier sitio </span>
                    y accede a imagenes de alta resolución y mayor frecuencia para identificar problemas en tus parecelas.
                  </p>
                  <button className="info-btn-neca">DESCARGAR PDF</button>
                </div>
              </div>
            </>
          )}
          {selectedButton === 3 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Soluciones Financieras</h2>
                  <p className="txt-neca-boton2">
                    Tenemos una diversidad de herramientas financieras adaptadas
                    para cada sector y al contexto económico mundial.<br></br>
                    <br></br>– Financiaciones en dólares<br></br>– Financiación
                    en pesos<br></br>– Tarjetas <br></br>– Canjes de granos
                    disponibles<br></br>– Canjes de granos a futuro<br></br>
                    *Consultar mensualmente las herramientas o soluciones
                    vigentes.
                  </p>
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
          {selectedButton === 4 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones1} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Asesoramiento Técnico</h2>
                  <p className="txt-neca-boton2">
                    Contamos con un equipo de <span className="txt-empresa-spanNeca"> profesionales </span>
                    que pueden brindarte un sólido asesoramiento de acuerdo a las   
                    <span className="txt-empresa-spanNeca"> necesidades </span> 
                     e
                    <span className="txt-empresa-spanNeca"> inquietudes </span> 
                    planteadas.
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 5 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones4} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Siembras</h2>
                  <p className="txt-neca-boton2">
                    Cultivos con Agricultura de Precisión. 
                  </p>
                  <button className="info-btn-neca">
                  <Link className="info-btn-neca1" to ="/mollar">IR A PUESTO EL MOLLAR</Link>
                  </button>
                </div>
              </div>
            </>
          )}
          {selectedButton === 6 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones3} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">Granos</h2>
                  <p className="txt-neca-boton2">
                    Desde la <span className="txt-empresa-spanNeca"> Unidad de Negocios de Granos </span>
                    tenemos como objetivo ofrecer asesoramiento integral en la comercialización de 
                    <span className="txt-empresa-spanNeca"> comodities y especialidades. </span> 
                    Brindamos herramientas al productor para tomar decisiones
                    <span className="txt-empresa-spanNeca"> eficientes </span> 
                    en contextos extremadamente complejos, a través de opciones de canje por insumos, charlas de mercados (nacionales e internacionales) y asesoramiento en lo
                    <span className="txt-empresa-spanNeca"> comercial y financiero. </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="banner-necaflor"></div>

      <div className="container-txt-cardNeca">
        <h2 className="neca-title">Marcas que distribuimos</h2>
        <hr className="linea-neca"></hr>
        <div className="container-logos-final">
          <img src={logogrande1} alt="" className="logogrande" />
          <img src={logogrande2} alt="" className="logogrande" />
          <img src={logogrande3} alt="" className="logogrande" />
          <img src={logogrande4} alt="" className="logogrande" />
        </div>
        <div className="container-logos-final">
          <img src={logogrande5} alt="" className="logogrande" />
          <img src={logogrande6} alt="" className="logogrande" />
          <img src={logogrande7} alt="" className="logogrande" />
          <img src={logogrande8} alt="" className="logogrande" />
        </div>
      </div>

      <div className="container-txt-cardNeca">
        <h2 className="neca-title">Contacto</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-neca-boton">
          Para contactarnos, podés hacerlo a través de estos canales:
        </p>
        <div className="container-cards-Combustible">
          <div className="card-Neca">
            <div className="titulo-Combustible">
              <h2 className="title-direccion-neca">Las Lajitas</h2>
            </div>
            <div className="CardCombustibleContacto">
              <div className="NecaDirec5">
                <img src={vectorneca1} alt="" className="logoComb4" />
                <p className="txt-direccion-neca">Ana D'uva</p>
              </div>
              <div className="NecaDirec1">
                <img src={vectorneca2} alt="" className="logoComb1" />
                <p className="txt-direccion-neca">
                  Ruta Prov. 5, Interseccion
                  <br />
                  Ruta 30, A4449 Las Lajitas
                </p>
              </div>
              <div className="NecaDirec2">
                <img src={vectorneca3b} alt="" className="logoComb3" />
                <img src={vectorneca3a} alt="" className="logoComb2" />
                <p className="txt-direccion-neca">+54 387 441-0916</p>
              </div>
              <div className="NecaDirec3">
                <img src={vectorneca4} alt="" className="vectorComb4" />
                <p className="txt-direccion-neca">
                  aduva@cngrupo.com.ar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-cards-estaciones">
          <div className="card-Neca1">
            <div className="titulo-Combustible">
              <h2 className="title-direccion-neca">Embarcación</h2>
            </div>
            <div className="CardCombustibleContacto">
              <div className="NecaDirec">
                <img src={vectorneca1} alt="" className="logoComb4" />
                <p className="txt-direccion-neca">Marcelo Isasmendi</p>
              </div>
              <div className="NecaDirec1">
                <img src={vectorneca2} alt="" className="logoComb1" />
                <p className="txt-direccion-neca">
                  Ruta Nacional 34, KM1344,
                  <br />
                  Embarcacion, Salta (4400)
                </p>
              </div>
              <div className="NecaDirec2">
                <img src={vectorneca3b} alt="" className="logoComb3" />
                <img src={vectorneca3a} alt="" className="logoComb2" />
                <p className="txt-direccion-neca">+54 387 504-6010</p>
              </div>
              <div className="NecaDirec3">
                <img src={vectorneca4} alt="" className="vectorComb4" />
                <p className="txt-direccion-neca">
                  misasmendi@cngrupo.com.ar
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
              backgroundColor: "#2a4b51",
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

export default Neca;
