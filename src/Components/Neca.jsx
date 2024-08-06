import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
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
//import videoSourceNECA from "../Assets/NECA web v3.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import ScrollToTop from "react-scroll-to-top";
import "./Neca.css";
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"

const Neca = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  const [selectedButton, setSelectedButton] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);

  const CustomPagination = ({ totalSlides, activeSlide }) => {
    return (
      <div className="custom-paginationNeca">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`pagination-pointNeca ${index + 1 === activeSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex + 1);
  };

  const handleDownload = () => {
  };

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="home-container">
      <div className="video">
      <video
          /*src={videoSourceNECA}*/
          src="http://webcontent.cn-grupo.net/Media/NECA%20web%20v3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="tuvideo"
        >
        </video>
        <div className="content">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
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
              <p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p>
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
          {t("txtNeca.txt1")}{" "}
          <span className="txt-empresa-spanNeca">{t("txtNeca.txt2")}</span> {t("txtNeca.txt3")}{" "}
          <span className="txt-empresa-spanNeca">NECA</span>{t("txtNeca.txt4")}{" "}
          <span className="txt-empresa-spanNeca">NET</span>{" "}{t("txtNeca.txt5")}{" "}
          <span className="txt-empresa-spanNeca">{t("txtNeca.txt6")}{" "}</span>{t("txtNeca.txt7")}
          <br></br>
          <br></br>{t("txtNeca.txt8")}{" "}
          <span className="txt-empresa-spanNeca">{t("txtNeca.txt9")}{" "}</span>{t("txtNeca.txt10")}{" "}
          <span className="txt-empresa-spanNeca">{t("txtNeca.txt11")}</span> {t("txtNeca.txt12")}
          <span className="txt-empresa-spanNeca">{" "}{t("txtNeca.txt13")}{" "}</span>{t("txtNeca.txt14")}
        </p>
      </div>
      <div className="banner-neca1"></div>

      <div className="container-dibujitos">
        <h2 className="neca-title">{t("txtNecaProductos.txt1")}</h2>
        <hr className="linea-neca"></hr>
        <div className="container-proteccion">
          <h3 className="neca-subtitle">{t("txtNecaProductos.txt2")}</h3>
          <div className="productos-protección">
            <div className="container-producto-protección">
              <img src={hervicida} alt="" className="producto" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt3")}</p>
            </div>
            <div className="container-producto-protección">
              <img src={insecticida} alt="" className="productoINS" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt4")}</p>
            </div>
            <div className="container-producto-protección">
              <img src={fungicida} alt="" className="productoFUN" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt5")}</p>
            </div>
            <div className="container-producto-protección">
              <img src={coadyuvante} alt="" className="productoCOA" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt6")}</p>
            </div>
            <div className="container-producto-protección">
              <img src={tratamiento} alt="" className="productoSEM" />
              <p className="txt-productoNeca">
              {t("txtNecaProductos.txt7")}<br></br>{t("txtNecaProductos.txt8")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-tresproductosNeca">
        <div className="container-proteccion">
          <h3 className="neca-subtitle">{t("txtNecaProductos.txt9")}</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección-e">
              <img src={soja} alt="" className="productoSOJ" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt10")}</p>
            </div>
            <div className="container-producto-protección">
              <img src={maiz} alt="" className="productoMAI" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt11")}</p>
            </div>
          </div>
        </div>

        <div className="container-proteccion">
          <h3 className="neca-subtitle">{t("txtNecaProductos.txt12")}</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección">
              <img src={fertilizante} alt="" className="productoFER" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt13")}</p>
            </div>
          </div>
        </div>

        <div className="container-proteccion">
          <h3 className="neca-subtitle">{t("txtNecaProductos.txt14")}</h3>
          <div className="productos-protección2">
            <div className="container-producto-protección">
              <img src={silobolsa} alt="" className="productoSIL" />
              <p className="txt-productoNeca">{t("txtNecaProductos.txt15")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-txt-cardNeca">
        <h2 className="neca-title">{t("txtServiciosNECA.txt1")}</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-neca-boton">
        {t("txtServiciosNECA.txt2")}{" "}
          <span className="txt-empresa-spanNeca">{t("txtServiciosNECA.txt3")}</span> {t("txtServiciosNECA.txt4")}
          <span className="txt-empresa-spanNeca"> {t("txtServiciosNECA.txt5")}</span> {t("txtServiciosNECA.txt6")}
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
              {t("txtCurado.txt1")}
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
              {t("txtSolucionesDigitalesNECA.txt1")}
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
              {t("txtSolucionesFinancierasNECA.txt1")}
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
              {t("txtAsesoramiento.txt1")}
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
              {t("txtSiembra.txt1")}
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
              {t("txtGranos.txt1")}
            </button>
          </div>
        </div>

        <div className="NecaMobile">
        {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones2} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtCurado.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtCurado.txt3")} <span className="txt-empresa-spanNeca">{t("txtCurado.txt4")}{" "}</span>
                  {t("txtCurado.txt5")}{" "} 
                    <span className="txt-empresa-spanNeca">{t("txtCurado.txt6")}{" "}</span>{t("txtCurado.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtCurado.txt8")}{" "}</span>{t("txtCurado.txt9")}
                  </p>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/Neca/necaCURADOdeSEMILLAS-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  <button className="info-btn-neca">{t("txtInfo.txt2")}</button>
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
                  <h2 className="neca-title2">{t("txtSolucionesDigitalesNECA.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSolucionesDigitalesNECA.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt4")}{" "}</span>
                  {t("txtSolucionesDigitalesNECA.txt5")}{" "}  
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt6")}{" "}</span> 
                    {t("txtSolucionesDigitalesNECA.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt8")}{" "}</span> 
                    {t("txtSolucionesDigitalesNECA.txt9")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt10")}{" "}</span>
                    {t("txtSolucionesDigitalesNECA.txt11")}
                  </p>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/Neca/necaCROPWISE-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  <button className="info-btn-neca">{t("txtInfo.txt2")}</button>
                  </a>
                </div>
              </div>
            </>
          )}
          {selectedButton === 3 && (
            <>
              <div className="containerfoto-botones-neca1">
                <img src={fotobotones} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtSolucionesFinancierasNECA.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSolucionesFinancierasNECA.txt3")}<br></br>
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt4")}<br></br>– {t("txtSolucionesFinancierasNECA.txt5")}
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt6")}<br></br>– {t("txtSolucionesFinancierasNECA.txt7")}
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt8")}<br></br>
                    {t("txtSolucionesFinancierasNECA.txt9")}
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
                  <h2 className="neca-title2">{t("txtAsesoramiento.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtAsesoramiento.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt4")}{" "}</span>
                  {t("txtAsesoramiento.txt5")}{" "}   
                    <span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt6")}{" "}</span> 
                    {t("txtAsesoramiento.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt8")}{" "}</span> 
                    {t("txtAsesoramiento.txt9")}
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
                  <h2 className="neca-title2">{t("txtSiembra.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSiembra.txt3")} 
                  </p>
                  <button className="info-btn-neca">
                  <Link className="info-btn-neca1" to ="/mollar">{t("txtSiembra.txt4")}</Link>
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
                  <h2 className="neca-title2">{t("txtGranos.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtGranos.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtGranos.txt4")}{" "}</span>
                  {t("txtGranos.txt5")}{" "} 
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt6")}{" "}</span> 
                    {t("txtGranos.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt8")}{" "}</span> 
                    {t("txtGranos.txt9")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt10")}</span>{t("txtGranos.txt11")}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <section className="swiper-containerNeca">
        <CustomPagination totalSlides={6} activeSlide={activeSlide} />
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={false}
          slidesPerView={1}
          modules={[Pagination]}
        >
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones2} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtCurado.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtCurado.txt3")} <span className="txt-empresa-spanNeca">{t("txtCurado.txt4")}{" "}</span>
                  {t("txtCurado.txt5")}{" "} 
                    <span className="txt-empresa-spanNeca">{t("txtCurado.txt6")}{" "}</span>{t("txtCurado.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtCurado.txt8")}{" "}</span>{t("txtCurado.txt9")}
                  </p>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/Neca/necaCURADOdeSEMILLAS-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  </a>
                </div>
                <button className="info-btn-neca">{t("txtInfo.txt2")}</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones5} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtSolucionesDigitalesNECA.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSolucionesDigitalesNECA.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt4")}{" "}</span>
                  {t("txtSolucionesDigitalesNECA.txt5")}{" "}  
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt6")}{" "}</span> 
                    {t("txtSolucionesDigitalesNECA.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt8")}{" "}</span> 
                    {t("txtSolucionesDigitalesNECA.txt9")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtSolucionesDigitalesNECA.txt10")}{" "}</span>
                    {t("txtSolucionesDigitalesNECA.txt11")}
                  </p>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/Neca/necaCROPWISE-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  </a>
                </div>
                <button className="info-btn-neca">{t("txtInfo.txt2")}</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtSolucionesFinancierasNECA.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSolucionesFinancierasNECA.txt3")}<br></br>
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt4")}<br></br>– {t("txtSolucionesFinancierasNECA.txt5")}
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt6")}<br></br>– {t("txtSolucionesFinancierasNECA.txt7")}
                    <br></br>– {t("txtSolucionesFinancierasNECA.txt8")}<br></br>
                    {t("txtSolucionesFinancierasNECA.txt9")}
                  </p>
                  <div className="logos-neca2">
                    <img src={logoneca1} alt="" className="logo-neca2" />
                    <img src={logoneca2} alt="" className="logo-neca2a" />
                    <img src={logoneca3} alt="" className="logo-neca2b" />
                    <img src={logoneca4} alt="" className="logo-neca2c" />
                  </div>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones1} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtAsesoramiento.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtAsesoramiento.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt4")}{" "}</span>
                  {t("txtAsesoramiento.txt5")}{" "}   
                    <span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt6")}{" "}</span> 
                    {t("txtAsesoramiento.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtAsesoramiento.txt8")}{" "}</span> 
                    {t("txtAsesoramiento.txt9")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones4} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtSiembra.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtSiembra.txt3")} 
                  </p>
                </div>
                <button className="info-btn-neca">
                  <Link className="info-btn-neca1" to ="/mollar">{t("txtSiembra.txt4")}</Link>
                </button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardNeca">
          <div className="containerfoto-botones-neca1">
                <img src={fotobotones3} alt="" className="fotobotonesNeca" />
                <div className="txt-logos-neca">
                  <h2 className="neca-title2">{t("txtGranos.txt2")}</h2>
                  <p className="txt-neca-boton2">
                  {t("txtGranos.txt3")}{" "}<span className="txt-empresa-spanNeca">{t("txtGranos.txt4")}{" "}</span>
                  {t("txtGranos.txt5")}{" "} 
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt6")}{" "}</span> 
                    {t("txtGranos.txt7")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt8")}{" "}</span> 
                    {t("txtGranos.txt9")}{" "}
                    <span className="txt-empresa-spanNeca">{t("txtGranos.txt10")}</span>{t("txtGranos.txt11")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
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
        <h2 className="neca-title">{t("txtContacto.txt1")}</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-neca-boton">
        {t("txtContacto.txt2")}
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
        <div className="container-cards-Neca">
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

export default Neca;
