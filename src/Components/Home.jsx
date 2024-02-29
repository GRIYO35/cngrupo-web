import React, { useState } from "react";
/*import ExpandLessIcon from "@material-ui/icons/ExpandLess";*/
import "react-multi-carousel/lib/styles.css";
import logo1 from "../Assets/PLANTAguemes WEB@300x.png";
import logo3 from "../Assets/EESS WEB@300x.png";
import logo4 from "../Assets/CombustiblesdelNorte WEB_1@300x.png";
import logo5 from "../Assets/NECA WEB@300x.png";
import logo6 from "../Assets/CCNchile WEB@300x.png";
import logo8 from "../Assets/CNlogistica WEB@300x.png";
import logo9 from "../Assets/GASdelNORTE WEB@300x.png";
import logo10 from "../Assets/PUESTOelMOLLAR WEB@300x.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videoSource from "../Assets/Home Cn web v3 .mp4";
import { useTranslation } from "react-i18next";
import Slider from "./Slider";
import ScrollToTop from "react-scroll-to-top";
import NAVBAR from "./NavBar";
import "./Home.css"

const Home = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSource}
          autoPlay
          loop
          muted
          className="tuvideo"
        ></video>
        <div className="content">
          <NAVBAR></NAVBAR>
          <div className="txt-redesHome">
            <div className="txt-container-empresaHome">
              <h2 className="nuestra-empresa-txtHome">
                {t("nuestra-empresa-txt.text1")}
                <br></br>
                <span className="txt-empresa-spanHome">
                  {t("nuestra-empresa-txt.text2")}
                </span>
                ,<br></br>
                {t("nuestra-empresa-txt.text3")}
                <br></br>
                {t("nuestra-empresa-txt.text4")}
                <span className="txt-empresa-spanHome">
                  {t("nuestra-empresa-txt.text5")}
                </span>
              </h2>
            </div>

            <div className="redes-container-empresa">
              <a
                href="https://www.linkedin.com/in/marcos-albarado?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icono-red-social" />
              </a>
              <a
                href="URL_DE_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social" />
              </a>
              <a
                href="URL_DE_YOUTUBE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icono-red-social" />
              </a>
              <a
                href="URL_DE_FACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="recuadros">
        <div className="imgResponsiva1">
          <div className="number">8</div>
          <span className="recuadros-span">
            {t("recuadros-span.Leading companies")}
          </span>{" "}
          {t("recuadros-span.in their")}
          <br></br>
          {t("recuadros-span.region promoting")}
          <br></br>
          {t("recuadros-span.innovation and excellence")}
        </div>
        <hr class="mi-linea-ver"></hr>
        <div className="imgResponsiva1">
          <div className="number1">+35</div>
          <span className="recuadros-span">
            {t("recuadros-span.years of experience")}
          </span>
          {t("recuadros-span.fields of oil & gas, agriculture,")}
        </div>
        <hr class="mi-linea-ver"></hr>
        <div className="imgResponsiva1">
          <div className="number2">6</div>{" "}
          <span className="recuadros-span">
            {t("recuadros-span.operational bases")}
          </span>
          <br></br>
          {t("recuadros-span.distributed in Salta and")}
          <br></br>
          {t("recuadros-span.northern Chile")}
        </div>
        <hr class="mi-linea-ver"></hr>
        <div className="imgResponsiva1">
          <div className="number3">+250</div>{" "}
          <span className="recuadros-span">
            {t("recuadros-span.collaborators")}
          </span>{" "}
          {t("recuadros-span.in constant")}
          <br></br>
          {t("recuadros-span.professional growth")}
        </div>
      </div>

      <div className="containerfoto-cards">
        <div className="card-home">
          <div className="logo-home"></div>
          <h2 className="title-card-home">Oil&Gas</h2>
          <p className="texto-card-home">{t("texto-card-home.completo")}</p>
          <hr class="mi-linea-home1"></hr>
        </div>
        <div className="card-home">
          <div className="logo-home2"></div>
          <h2 className="title-card-home">Agro</h2>
          <p className="texto-card-home">{t("texto-card-home.completo2")}</p>
          <hr class="mi-linea-home"></hr>
        </div>
        <div className="card-home">
          <div className="logo-home3"></div>
          <h2 className="title-card-home">{t("li.Mining")}</h2>
          <p className="texto-card-home">{t("texto-card-home.completo3")}</p>
          <hr class="mi-linea-home2"></hr>
        </div>
      </div>
      <div className="my-carousel">
        <h2 className="micarrusel-titulo">{t("li.Our culture")}</h2>
        <hr class="mi-linea-carrusel"></hr>
      </div>
      <Slider />
      <div class="foot">
        <div class="Logos-empresa">
          <div className="my-carousel-logos">
            <h2 className="micarrusel-titulo-logos">
              {t("li.Our business portfolio")}
            </h2>
            <hr class="mi-linea-carrusel-logos"></hr>
          </div>
          <div class="Logos1">
            <div class="imgWrapper3">
              <div class="imgResponsiva">
                <img src={logo5} alt="NECA" />
              </div>
              <div class="imgResponsiva">
                <img src={logo4} alt="Combustibles del Norte" />
              </div>
              <div class="imgResponsiva">
                <img src={logo8} alt="CN Logistica" />
              </div>
              <div class="imgResponsiva">
                <img src={logo1} alt="CN Plata Guemes" />
              </div>
            </div>
            <div class="imgWrapper4">
              <div class="imgResponsiva">
                <img src={logo9} alt="Gas del Norte" />
              </div>
              <div class="imgResponsiva">
                <img src={logo3} alt="Estaciones de Servicio" />
              </div>
              <div class="imgResponsiva">
                <img src={logo6} alt="CCN Chile" />
              </div>
              <div class="imgResponsiva">
                <img src={logo10} alt="Puesto El Mollar" />
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
            /*component={
              <ExpandLessIcon
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              />
            }*/
          />
        </div>

        <div className="footer">
          <div className="txt1">
            <p className="txt-foo">CRECER & HACER CRECER</p>
          </div>
          <div className="txt2">
            <p className="txt-foo2">{t("txt-foo2.Footer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
