import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
/*import ExpandLessIcon from "@material-ui/icons/ExpandLess";*/
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
/*import logo2 from "../Assets/CN - INFO IMPOSITIVA grey@300x.png";*/
import logo2 from "../Assets/cnLOGO.png";
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
//import videoSourceComb from "../Assets/COMBUSTIBLES DEL NORTE.mp4";
//import videoSourceComb1 from "../Assets/COMBUSTIBLES-DEL-NORTE.av1.mp4";
//import videoSourceComb2 from "../Assets/ESTACIONFIJA1.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./Combustiblesdelnorte.css";
import ScrollToTop from "react-scroll-to-top";
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"

const Combustibles = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  const [selectedButton, setSelectedButton] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeSlide1, setActiveSlide1] = useState(1);

  const CustomPagination = ({ totalSlides, activeSlide }) => {
    return (
      <div className="custom-pagination">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`pagination-point ${index + 1 === activeSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  const CustomPagination1 = ({ totalSlides, activeSlide1 }) => {
    return (
      <div className="custom-pagination">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`pagination-point ${index + 1 === activeSlide1 ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex + 1);
  };

  const handleSlideChange1 = (swiper) => {
    setActiveSlide1(swiper.activeIndex + 1);
  };

  const handleDownload = () => {
  };

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const [selectedButton1, setSelectedButton1] = useState(1);

  const handleButtonClick1 = (buttonNumber1) => {
    setSelectedButton1(buttonNumber1);
  };

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="video">
      <video
          autoPlay
          loop
          muted
          className="tuvideo"
        >
          <source src="http://webcontent.cn-grupo.net/Media/COMBUSTIBLES%20DEL%20NORTE.mp4" type="video/mp4; codecs=av01" />
          <source src="http://webcontent.cn-grupo.net/Media/COMBUSTIBLES%20DEL%20NORTE.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
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
      {/*<div className="banner-comb"></div>*/}
      <video
          autoPlay
          loop
          muted
          className="tuvideo"
          style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        >
          <source src="http://webcontent.cn-grupo.net/Media/ESTACION%20FIJA%20-%201920x911.mp4" type="video/mp4; codecs=av01" />
          <source src="http://webcontent.cn-grupo.net/Media/ESTACION%20FIJA%20-%201920x911.mp4" type="video/mp4" />
        </video>

      <div className="container-txt-cardCombustible">
        <h2 className="Comb-title">{t("txtSoluciones.txt1")}</h2>
        <hr className="linea-Comb"></hr>
        <h3 className="h3sub-combus">{t("txtSoluciones.txt2")}</h3>
        <p className="txt-comb-boton">
        {t("txtMIC.txt1")}{" "}
          <span className="txt-empresa-spanComb">{t("txtMIC.txt2")}{" "}</span> 
          {t("txtMIC.txt3")}{" "}
          <span className="txt-empresa-spanComb">{t("txtMIC.txt4")}</span>{" "}
          {t("txtMIC.txt5")}
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
                  {t("txtEstacionesFijas.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesFijas.txt2")}</span>
                    {" "}{t("txtEstacionesFijas.txt3")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesFijas.txt4")}{" "}</span>
                    {t("txtEstacionesFijas.txt5")}

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
                  {t("txtEstacionesMoviles.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesMoviles.txt2")}</span>
                    {" "}{t("txtEstacionesMoviles.txt3")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesMoviles.txt4")}{" "}</span>
                    {t("txtEstacionesMoviles.txt5")}
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
                  {t("txtDistribucionCapilar.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtDistribucionCapilar.txt2")}</span>
                    {" "}{t("txtDistribucionCapilar.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtDistribucionCapilar.txt4")}</span>
                    {" "}{t("txtDistribucionCapilar.txt5")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtDistribucionCapilar.txt6")}</span>
                    {" "}{t("txtDistribucionCapilar.txt7")}
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
                  {t("txtEstacionesHibridas.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesHibridas.txt2")}</span>
                    {" "}{t("txtEstacionesHibridas.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtEstacionesHibridas.txt4")}</span>
                    {" "}{t("txtEstacionesHibridas.txt5")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesHibridas.txt6")}</span>
                    {" "}{t("txtEstacionesHibridas.txt7")}
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
                  {t("txtAutogestion.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtAutogestion.txt2")}</span>
                    {" "}{t("txtAutogestion.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtAutogestion.txt4")}</span>
                    {" "}{t("txtAutogestion.txt5")}{" "}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <section className="swiper-container">
        <CustomPagination totalSlides={5} activeSlide={activeSlide} />
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={false}
          slidesPerView={1}
          modules={[Pagination]}
        >
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocomb} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt6")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtEstacionesFijas.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesFijas.txt2")}</span>
                    {" "}{t("txtEstacionesFijas.txt3")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesFijas.txt4")}{" "}</span>
                    {t("txtEstacionesFijas.txt5")}

                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocombMob} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt7")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtEstacionesMoviles.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesMoviles.txt2")}</span>
                    {" "}{t("txtEstacionesMoviles.txt3")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesMoviles.txt4")}{" "}</span>
                    {t("txtEstacionesMoviles.txt5")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocombDis} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt8")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtDistribucionCapilar.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtDistribucionCapilar.txt2")}</span>
                    {" "}{t("txtDistribucionCapilar.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtDistribucionCapilar.txt4")}</span>
                    {" "}{t("txtDistribucionCapilar.txt5")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtDistribucionCapilar.txt6")}</span>
                    {" "}{t("txtDistribucionCapilar.txt7")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocombHibridas} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt9")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtEstacionesHibridas.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtEstacionesHibridas.txt2")}</span>
                    {" "}{t("txtEstacionesHibridas.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtEstacionesHibridas.txt4")}</span>
                    {" "}{t("txtEstacionesHibridas.txt5")}{" "}
                    <span className="txt-empresa-spanComb">{t("txtEstacionesHibridas.txt6")}</span>
                    {" "}{t("txtEstacionesHibridas.txt7")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocombAuto} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtSoluciones.txt10")}</h2>
                  <p className="txt-Comb-boton2">
                  {t("txtAutogestion.txt1")}
                    <span className="txt-empresa-spanComb">{" "}{t("txtAutogestion.txt2")}</span>
                    {" "}{t("txtAutogestion.txt3")}{" "}   
                    <span className="txt-empresa-spanComb">{t("txtAutogestion.txt4")}</span>
                    {" "}{t("txtAutogestion.txt5")}{" "}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>

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
          <div className="image-container">
            <img src={fotolubri} alt="" className="fotosgris1" />
          </div>
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
          <div className="image-container">
           <img src={fotoasfalto} alt="" className="fotosgris2" />
          </div>
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
                    <li>{t("txtMuestreo.txt2")}</li>
                    <li>{t("txtMuestreo.txt3")}</li>
                    <li>{t("txtMuestreo.txt4")}</li>
                    <li>{t("txtMuestreo.txt5")}</li>
                    <li>{t("txtMuestreo.txt6")}</li>
                  </ul>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/CdN/CombustiblesMD-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Btn-Mobile"
                  >
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                  </a>
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
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/CdN/CombustiblesSUMMA+SAF-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Btn-Mobile"
                  >
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                  </a>
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

      <section className="swiper-container">
        <CustomPagination1 totalSlides={3} activeSlide1={activeSlide1} />
        <Swiper
          onSlideChange={handleSlideChange1}
          pagination={false}
          slidesPerView={1}
          modules={[Pagination]}
        >
        <SwiperSlide>
          <div className="card1">
          <div className="containerfoto-botones-Comb">
                <img src={fotocombMD} alt="" className="fotobotonesComb" />
                <div className="txt-logos-Com">
                  <h2 className="Comb-title2">{t("txtMuestreo.txt1")}</h2>
                  <ul className="lista-Comb">
                    <li>{t("txtMuestreo.txt2")}</li>
                    <li>{t("txtMuestreo.txt3")}</li>
                    <li>{t("txtMuestreo.txt4")}</li>
                    <li>{t("txtMuestreo.txt5")}</li>
                    <li>{t("txtMuestreo.txt6")}</li>
                  </ul>
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/CdN/CombustiblesMD-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Btn-Mobile"
                  >
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                  </a>
                </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
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
                  <a 
                  href="https://webcontent.cn-grupo.net/Assets/CdN/CombustiblesSUMMA+SAF-.pdf" 
                  download 
                  onClick={handleDownload}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Btn-Mobile"
                  >
                  <button className="info-btn-Comb">{t("txtInfo.txt2")}</button>
                  </a>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card1">
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
          </div>
        </SwiperSlide>
      </Swiper>
      </section>

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
