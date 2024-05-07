import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo2 from "../Assets/loggo2.png";
import fotogas15 from "../Assets/650X388px WEB autoelevadores.png";
import fotogasBu from "../Assets/650X388px WEB gas butano.png";
import fotogasPla from "../Assets/650X388px WEB plasticas.png";
import fotogasPro from "../Assets/650X388px WEB propano.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import logowpp from "../Assets/logowpp.png";
import logodelivery from "../Assets/logodelivery.png";
import videoSourceGas from "../Assets/Gas del norte web v2.mp4";
import NAVBAR from "./NavBar";
import "./Gasdelnorte.css";

const Gas = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSourceGas}
          autoPlay
          loop
          muted
          className="tuvideo"
        ></video>
        <div className="content">
          <NAVBAR></NAVBAR>

          <div className="redes-container-empresa-gas">
          <a
                href="https://www.linkedin.com/company/combustibles-del-norte-sa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icono-red-social" />
              </a>
              <a
                href="https://www.instagram.com/gasdelnorteypf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
              <a
                href="https://www.facebook.com/gasdelnorte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social" />
              </a>
          </div>
          <div className="txt-redesGas">
            <div className="txt-container-empresaGas">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr>
                <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
              </div>
              <h2 className="logistica-title">GAS DEL NORTE</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-gas">
        <img src={logo2} alt="" className="gasimg1" />
        <p className="p-gas1">
          {" "}
          <span className="txt-empresa-spanGas">Gas del Norte</span> es nuestra
          unidad de negocio encargada del comercio y la distribución exclusiva
          de gas envasado <span className="txt-empresa-spanGas">YPF GAS</span>{" "}
          en la provincia de <span className="txt-empresa-spanGas">Salta</span>
          desde hace veinte años<br></br>
          <br></br>
          Fuimos reconocidos en numerosas oportunidades por
          <span className="txt-empresa-spanGas">YPF GAS</span>como mejor
          distribuidor de la red de distribuidores del país, distinción que nos
          confirma que estamos en el rumbo correcto, apostando a la
          <span className="txt-empresa-spanGas">tecnología</span> y manteniendo
          al <span className="txt-empresa-spanGas">cliente</span> en el centro
          de todas las decisiones.
          <br></br>
          <br></br>
          <span className="txt-empresa-spangGas">Cercanía</span>{" "}
          <span className="lineagas"></span>
          <span className="txt-empresa-spangGas">Servicio</span>
          <span className="lineagas"></span>
          <span className="txt-empresa-spangGas">Seguridad</span>
        </p>
      </div>
      <div className="banner-gas"></div>

      <div className="container-txt-cardGas">
        <h2 className="gas-title">Nuestros Productos y Servicios</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-gas-boton">
          Nuestro servicio de{" "}
          <span className="txt-empresa-spanGas">entrega a domicilio</span> es
          nuestro valor agregado. Nos aseguramos de entregar
          <span className="txt-empresa-spanGas"> calidad y seguridad</span> a tu
          hogar.
        </p>
        <div className="gas-buttons">
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: selectedButton === 1 ? "#009fe3" : "transparent",
              color: selectedButton === 1 ? "white" : "#009fe3",
            }}
          >
            GAS BUTANO
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: selectedButton === 2 ? "#009fe3" : "transparent",
              color: selectedButton === 2 ? "white" : "#009fe3",
            }}
          >
            GAS PROPANO
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: selectedButton === 3 ? "#009fe3" : "transparent",
              color: selectedButton === 3 ? "white" : "#009fe3",
            }}
          >
            GARRAFAS 15KG
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(4)}
            style={{
              backgroundColor: selectedButton === 4 ? "#009fe3" : "transparent",
              color: selectedButton === 4 ? "white" : "#009fe3",
            }}
          >
            GARRAFAS 13,5KG
          </button>
        </div>
        <div className="card">
          {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src={fotogasBu} alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                    Gas Butano
                  </h2>
                  <p className="txt-gas-boton2">
                    Garrafas de 10 y 15 Kg: Principalmente para{" "}
                    <span className="txt-empresa-spanGas">uso doméstico</span>{" "}
                    (cocinar, calefaccionar, calentaragua, etc).
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 2 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src={fotogasPro} alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                    Gas Propano
                  </h2>
                  <p className="txt-gas-boton2">
                    Cilindros 45 Kg: Representan la mejor solución para{" "}
                    <span className="txt-empresa-spanGas">cocinar</span>{" "}
                    y{" "}
                    <span className="txt-empresa-spanGas">calefaccionar </span>
                    en zonas muy frías y cuando se requiere obtener una{" "}
                    <span className="txt-empresa-spanGas">
                      mayor autonomía.
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 3 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src={fotogas15} alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                    Garrafas de 15kg para autoelevadores
                  </h2>
                  <p className="txt-gas-boton2">
                    Utilizar GLP como combustible para autoelevadores trae
                    diferentes beneficios. Es{" "}
                    <span className="txt-empresa-spanGas">más económico</span>{" "}
                    ya que las máquinas nafteras convertidas a GLP son más
                    eficientes que las diesel, en cuanto a costo de operación y
                    mantenimiento; es{" "}
                    <span className="txt-empresa-spanGas">ecológico</span>, se
                    reduce la emisión contaminante hasta un 60% respecto a otros
                    combustibles y; genera un{" "}
                    <span className="txt-empresa-spanGas">
                      mejor funcionamiento
                    </span>{" "}
                    del motor, logrando una marcha más suave.
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 4 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src={fotogasPla} alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                    Garrafas plásticas  de 13.5 Kg para autoelevadores
                  </h2>
                  <p className="txt-gas-boton2">
                    Incorporamos una nueva categoría de producto,{" "}
                    <span className="txt-empresa-spanGas">innovadora</span>{" "}
                    en nuestro país, buscando satisfacer las exigencias del mercado actual, con foco en el usuario y siendo sustentables. Las garrafasplásticas son un{" "}
                    <span className="txt-empresa-spanGas">65% más livianas</span>
                    que las de acero, permitiendo que sean más{" "}
                    <span className="txt-empresa-spanGas">
                      faciles de manipular
                    </span>{" "}
                    y se reduzca el riesgo de lesiones del personal en el lugar de trabajo.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="container-txt-cardGas">
        <h2 className="gas-title">Contacto</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-gas-card">
          Para contactarnos, podés hacerlo a través de estos canales:
        </p>
        <div className="container-cards-gas">
          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">Dirección</h2>
              <img src={logodireccion} alt="" className="logogas1" />
            </div>
            <p className="txt-direccion-mollar">
              Av. Chile 1275 - Salta (4400)
            </p>
          </div>

          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">Teléfono 0800</h2>
              <img src={logotelefono} alt="" className="logogas2" />
            </div>
            <p className="txt-direccion-mollar">0800-122-5800</p>
          </div>

          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">WhatsApp</h2>{" "}
              <img src={logowpp} alt="" className="logogas3" />
            </div>
            <p className="txt-direccion-mollar">387-4688288</p>
          </div>

          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">App Delivery</h2>
              <img src={logodelivery} alt="" className="logogas4" />
            </div>
            <p className="txt-direccion-mollar">Gas del Norte - YPF Gas</p>
          </div>
        </div>
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

export default Gas;
