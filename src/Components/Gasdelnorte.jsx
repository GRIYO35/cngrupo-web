import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
//import logo2 from "../Assets/loggo2.png";
//import logo2 from "../Assets/gs del norte logo  360x115.png";
import logo2 from "../Assets/GASdelnortelogo.png";
//import fotogas15 from "../Assets/GAS 15.png";
//import fotogasBu from "../Assets/650X388px WEB gas butano.png";
//import fotogasPla from "../Assets/650X388px WEB autoelevadores.png";
//import fotogasPro from "../Assets/GAS 45.png";
import logodireccion from "../Assets/logodireccion.png";
import logotelefono from "../Assets/logotelefono.png";
import logowpp from "../Assets/logowpp.png";
import logodelivery from "../Assets/logodelivery.png";
//import videoSourceGas from "../Assets/Gas del norte web v2.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBarNueva";
import NAVBARMOBILE from "./NavBarMobile";
import "./Gasdelnorte.css";

const Gas = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  const [activeSlide, setActiveSlide] = useState(1);

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

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex + 1);
  };

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className="home-container">
      <div className="video">
        <video
          /*src={videoSourceGas}*/
          src= "http://webcontent.cn-grupo.net/Media/Gas%20del%20norte%20web%20v2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="tuvideo"
        ></video>
        <div className="content">
           <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
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
                <p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p>
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
          <span className="txt-empresa-spanGas">{t("txtGas.txt1")}</span> {t("txtGas.txt2")}
          <span className="txt-empresa-spanGas">{" "}{t("txtGas.txt3")}</span>{" "}
          {t("txtGas.txt4")}<span className="txt-empresa-spanGas">{" "}{t("txtGas.txt5")}{" "}</span>
          {t("txtGas.txt6")}<br></br>
          <br></br>
          {t("txtGas.txt7")}
          <span className="txt-empresa-spanGas">{" "}{t("txtGas.txt3")}{" "}</span>{t("txtGas.txt8")}
          <span className="txt-empresa-spanGas">{" "}{t("txtGas.txt9")}</span> {t("txtGas.txt10")}
          <span className="txt-empresa-spanGas">{" "}{t("txtGas.txt11")}{" "}</span>{t("txtGas.txt12")}
          <br></br>
          <br></br>
          <span className="txt-empresa-spangGas">{t("txtGas.txt13")}</span>{" "}
          <span className="lineagas"></span>
          <span className="txt-empresa-spangGas">{t("txtGas.txt14")}</span>
          <span className="lineagas"></span>
          <span className="txt-empresa-spangGas">{t("txtGas.txt15")}</span>
        </p>
      </div>
      <div className="banner-gas"></div>

      <div className="container-txt-cardGas">
        <h2 className="gas-title">{t("txtProductosGas.txt1")}</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-gas-boton">
        {t("txtProductosGas.txt2")}{" "}
          <span className="txt-empresa-spanGas">{t("txtProductosGas.txt3")}</span> {t("txtProductosGas.txt4")}
          <span className="txt-empresa-spanGas">{" "}{t("txtProductosGas.txt5")}</span> {t("txtProductosGas.txt6")}
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
            {t("txtButano.txt1")}
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: selectedButton === 2 ? "#009fe3" : "transparent",
              color: selectedButton === 2 ? "white" : "#009fe3",
            }}
          >
            {t("txtPropano.txt1")}
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: selectedButton === 3 ? "#009fe3" : "transparent",
              color: selectedButton === 3 ? "white" : "#009fe3",
            }}
          >
            {t("txtGarrafa15.txt1")}
          </button>
          <button
            className="info-btn-gas"
            onClick={() => handleButtonClick(4)}
            style={{
              backgroundColor: selectedButton === 4 ? "#009fe3" : "transparent",
              color: selectedButton === 4 ? "white" : "#009fe3",
            }}
          >
            {t("txtGarrafa13.txt1")}
          </button>
        </div>
        <div className="card">
          {selectedButton === 1 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/650X388px WEB gas butano.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtButano.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtButano.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtButano.txt4")}</span>{" "}
                    {t("txtButano.txt5")}
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 2 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/GAS 45.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtPropano.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtPropano.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtPropano.txt4")}</span>{" "}
                    {t("txtPropano.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtPropano.txt6")}{" "}</span>
                    {t("txtPropano.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtPropano.txt8")}
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 3 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/GAS 15.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtGarrafa15.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtGarrafa15.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa15.txt4")}</span>{" "}
                    {t("txtGarrafa15.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa15.txt6")}{" "}</span>{t("txtGarrafa15.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtGarrafa15.txt8")}
                    </span>
                    {t("txtGarrafa15.txt9")}
                  </p>
                </div>
              </div>
            </>
          )}
          {selectedButton === 4 && (
            <>
              <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/650X388px WEB autoelevadores.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtGarrafa13.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtGarrafa13.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa13.txt4")}</span>{" "}
                    {t("txtGarrafa13.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa13.txt6")}{" "}</span>
                    {t("txtGarrafa13.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtGarrafa13.txt8")}
                    </span>{" "}
                    {t("txtGarrafa13.txt9")}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <section className="swiper-containerGas">
        <CustomPagination totalSlides={4} activeSlide={activeSlide} />
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={false}
          slidesPerView={1}
          modules={[Pagination]}
        >
        <SwiperSlide>
          <div className="cardGas">
          <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/650X388px WEB gas butano.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtButano.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtButano.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtButano.txt4")}</span>{" "}
                    {t("txtButano.txt5")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardGas">
          <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/GAS 45.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtPropano.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtPropano.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtPropano.txt4")}</span>{" "}
                    {t("txtPropano.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtPropano.txt6")}{" "}</span>
                    {t("txtPropano.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtPropano.txt8")}
                    </span>
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardGas">
          <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/GAS 15.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtGarrafa15.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtGarrafa15.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa15.txt4")}</span>{" "}
                    {t("txtGarrafa15.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa15.txt6")}{" "}</span>{t("txtGarrafa15.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtGarrafa15.txt8")}
                    </span>
                    {t("txtGarrafa15.txt9")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardGas">
          <div className="containerfoto-botones-gas">
                <img src="http://webcontent.cn-grupo.net/Media/Fotos/Gas/650X388px WEB autoelevadores.png" alt="" className="fotobotonesgas" />
                <div className="txt-logos-neca">
                  <h2 className="gas-title2">
                  {t("txtGarrafa13.txt2")}
                  </h2>
                  <p className="txt-gas-boton2">
                  {t("txtGarrafa13.txt3")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa13.txt4")}</span>{" "}
                    {t("txtGarrafa13.txt5")}{" "}
                    <span className="txt-empresa-spanGas">{t("txtGarrafa13.txt6")}{" "}</span>
                    {t("txtGarrafa13.txt7")}{" "}
                    <span className="txt-empresa-spanGas">
                    {t("txtGarrafa13.txt8")}
                    </span>{" "}
                    {t("txtGarrafa13.txt9")}
                  </p>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>

      <div className="container-txt-cardGas">
        <h2 className="gas-title">{t("txtContacto.txt1")}</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-gas-card">
        {t("txtContacto.txt2")}
        </p>
        <div className="container-cards-gas">
          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">{t("txtContacto.txt3")}</h2>
              <img src={logodireccion} alt="" className="logogas1" />
            </div>
            <p className="txt-direccion-mollar">
              Av. Chile 1275 - Salta (4400)
            </p>
          </div>

          <div className="card-gas">
            <div className="titulo-gas">
              <h2 className="title-direccion-gas">{t("txtContacto.txt4")}</h2>
              <img src={logotelefono} alt="" className={i18next.language === "es" ? "logogas2" : "logogas2EN"} />
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
              <h2 className="title-direccion-gas">{t("txtContacto.txt6")}</h2>
              <img src={logodelivery} alt="" className="logogas4" />
            </div>
            <p className="txt-direccion-mollar">Gas del Norte - YPF Gas</p>
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

export default Gas;
