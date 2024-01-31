import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../Assets/PLANTAguemes WEB@300x.png";
import logo3 from "../Assets/EESS WEB@300x.png";
import logo4 from "../Assets/CombustiblesdelNorte WEB_1@300x.png";
import logo5 from "../Assets/NECA WEB@300x.png";
import logo6 from "../Assets/CCNchile WEB@300x.png";
import logo7 from "../Assets/cngrupoLOGOwhite.png";
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
import NAVBAR from "./NavBar"

const Navchapa = () => {
  const [t, i18next] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  {/*const [openSubMenu, setOpenSubMenu] = useState(null);

  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubMenuClick = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);

  const [isSubMenuOpenA, setSubMenuOpenA] = useState(false);
  const [isSubMenuOpenB, setSubMenuOpenB] = useState(false);
  const [isSubMenuOpenC, setSubMenuOpenC] = useState(false);

  let timer;
  const delay = 100; // tiempo de retraso en milisegundos

  // Cuando el mouse entra, limpiamos el temporizador si existe

  const handleSubMenuClick1 = () => {
    setSubMenuOpen1(!isSubMenuOpen1);
  };

  const handleSubMenuClick2 = () => {
    setSubMenuOpen2(!isSubMenuOpen2);
  };

  const handleSubMenuClick3 = () => {
    setSubMenuOpen3(!isSubMenuOpen3);
  };

  const handleSubMenuClickA = (event) => {
    event.stopPropagation();
    setSubMenuOpenA(!isSubMenuOpenA);
  };

  const handleSubMenuClickB = (event) => {
    event.stopPropagation();
    setSubMenuOpenB(!isSubMenuOpenB);
  };

  const handleSubMenuClickC = (event) => {
    event.stopPropagation();
    setSubMenuOpenC(!isSubMenuOpenC);
  };*/}

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSource}
          autoPlay
          loop
          muted
          className="tuvideo"
        >
        </video>
        <div className="content">
        <NAVBAR></NAVBAR>
          {/*<div className="nav-container">
            <img src={logo7} alt="" className="logo" />
            <nav className="nav-chapa">
              <div className={`navbar-links-container ${isOpen && "open"}`}>
                <ul className="ul-nav">
                  <li
                    className="link-nav-chapa" 
                    onClick={() => handleSubMenuClick("submenu1")}
                  >
                    <Link className="li" to="/">
                      {t("li.OUR COMPANY")}
                    </Link>
                    {openSubMenu === "submenu1" && (
                      <ul className="ul-menu">
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <Link className="li" to="/navbar">
                              {t("li.Who are we?")}
                            </Link>
                          </li>
                          <hr className="linea-menuA"></hr>
                        </div>
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <Link className="li" to="/vision">
                              {t("li.Vision and mission")}
                            </Link>
                          </li>
                          <hr className="linea-menuA"></hr>
                        </div>
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <Link className="li" to="/historia">
                              {t("li.History")}
                            </Link>
                          </li>
                          <hr className="linea-menuA"></hr>
                        </div>
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <Link className="li" to="/info">
                              {t("li.Tax information")}
                            </Link>
                          </li>
                        </div>
                      </ul>
                    )}
                  </li>
                  <li
                    className="link-nav-chapa"
                    onClick={() => handleMenuClick("menu2")}
                  >
                    <div className="li" to="/mecanica">
                      {t("li.OUR BUSINESSES")}
                    </div>
                    {openMenu === "menu2" && (
                      <ul className="ul-menu2">
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubMenuClick("submenuA");
                              }}
                              className="li"
                            >
                              Oil & Gas
                            </div>
                            {openSubMenu === "submenuA" && (
                              <ul className="ul-SUBmenu">
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/quiénes">
                                      COMBUSTIBLES DEL NORTE
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/vision">
                                      CCN CHILE
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/ejes">
                                      GAS DEL NORTE
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/ejes">
                                      {t("li.SERVICE STATIONS")}
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            )}
                          </li>
                          <hr className="linea-menu"></hr>
                        </div>

                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubMenuClick("submenuB");
                              }}
                              className="li"
                            >
                              Agro
                            </div>
                            {openSubMenu === "submenuB" && (
                              <ul className="ul-SUBmenu1">
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/quiénes">
                                      NECA
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/vision">
                                      COMBUSTIBLES DEL NORTE
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/ejes">
                                      PUESTO EL MOLLAR
                                    </Link>
                                  </li>
                                  <hr className="linea-menuOIL"></hr>
                                </div>
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/ejes">
                                      PLANTA GUEMES
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            )}
                          </li>
                          <hr className="linea-menu"></hr>
                        </div>
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubMenuClick("submenuC");
                              }}
                              className="li"
                            >
                              {t("li.Mining")}
                            </div>
                            {openSubMenu === "submenuC" && (
                              <ul className="ul-SUBmenu2">
                                <div className="ul-menu-linea">
                                  <li className="link-nav-submenu">
                                    <Link className="li" to="/quiénes">
                                      NECA
                                    </Link>
                                  </li>
                                </div>
                              </ul>
                            )}
                          </li>
                        </div>
                      </ul>
                    )}
                  </li>

                  <li className="link-nav-chapa" onClick={handleSubMenuClick3}>
                    <div className="li" to="/chapaypintura">
                      {t("li.WORK AT CN GROUP")}
                    </div>
                    {isSubMenuOpen3 && (
                      <ul className="ul-menu3">
                        <div className="ul-menu-linea">
                          <li className="link-nav-submenu">
                            <Link className="li" to="/quiénes">
                              {t("li.Human capital")}
                            </Link>
                          </li>
                        </div>
                      </ul>
                    )}
                  </li>
                  <li className="link-nav-chapa">
                    <Link className="li" to="/4x4">
                      {t("li.CONTACT")}
                    </Link>
                  </li>
                  <li className="link-nav-chapab">
                    <div className="botones">
                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("es");
                          document
                            .querySelectorAll(".language-button")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-button"
                      >
                        ES
                      </button>

                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("en");
                          document
                            .querySelectorAll(".language-button")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-button"
                      >
                        EN
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className={`toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="span-nav"></span>
                <span className="span-nav"></span>
                <span className="span-nav"></span>

                <body className={isOpen ? "overlay" : ""}></body>
              </div>
            </nav>
          </div>*/}
          <div className="txt-redes">
            <div className="txt-container-empresa">
              <h2 className="nuestra-empresa-txt">
                {t("nuestra-empresa-txt.text1")}
                <br></br>
                <span className="txt-empresa-span">
                  {t("nuestra-empresa-txt.text2")}
                </span>
                ,<br></br>
                {t("nuestra-empresa-txt.text3")}
                <br></br>
                {t("nuestra-empresa-txt.text4")}
                <span className="txt-empresa-span">
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
                <FaLinkedin className="icono-red-social"/>
              </a>
              <a
                href="URL_DE_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icono-red-social"/>
              </a>
              <a
                href="URL_DE_YOUTUBE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icono-red-social"/>
              </a>
              <a
                href="URL_DE_FACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icono-red-social"/>
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

      {/* <div className="logos-carrusel">
        <LogosCarousel />
      </div> */}
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
          {/*<ScrollToTop
            smooth="false"
            color="white"
            className="scroll-to-top"
            style={{
              borderRadius: "50%",
              color: "white",
              backgroundColor: "#5ABDCF",
              border: "none",
              marginRight: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: '395%',
              bottom: '300%'
            }}
            component={
              <ExpandLessIcon
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              />
            }
          />*/}
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
              <ExpandLessIcon
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              />
            }
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

export default Navchapa;
