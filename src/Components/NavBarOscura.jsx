import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/cngrupocolor.png';
import { useTranslation } from "react-i18next";
import './NavBarOscura.css';


const NavbarOscura = () => {
  const [t, i18next] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setSubMenuOpen5] = useState(false);
  const [isSubMenuOpen6, setSubMenuOpen6] = useState(false);
  let subMenuTimer;
  let subMenuTimer1;
  let subMenuTimer2;

  const handleMouseEnter4 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer);
    setSubMenuOpen4(true);
     
  };

  const handleMouseLeave4 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer);
    subMenuTimer = setTimeout(() => {
      setSubMenuOpen4(false);
    }, 100);
  };

  const handleMouseEnter5 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer1);
    setSubMenuOpen5(true);
     
  };

  const handleMouseLeave5 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer1);
    subMenuTimer1 = setTimeout(() => {
      setSubMenuOpen5(false);
    }, 50);
  };

  const handleMouseEnter6 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer2);
    setSubMenuOpen6(true);
     
  };

  const handleMouseLeave6 = (setSubMenuOpen) => {
    clearTimeout(subMenuTimer2);
    subMenuTimer2 = setTimeout(() => {
      setSubMenuOpen6(false);
    }, 100);
  };

  const handleMouseEnter1 = () => {
    setSubMenuOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setSubMenuOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setSubMenuOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setSubMenuOpen2(false);
  };

  const handleMouseEnter3 = () => {
    setSubMenuOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setSubMenuOpen3(false);
  };

  return (
    <div className="nav-containerOsc">
        <Link to="/" className="LogoNavOsc">
          <img src={Logo} alt="" className="logoOsc" />
        </Link>
      <nav className="nav-chapaOsc">
        <div className={`navbar-links-container ${isOpen && "open"}`}>
          <ul className="ul-navOsc">
            <li
              className="link-nav-chapaOsc"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Link className="liNav3Osc" to="/">
              {t("li.OUR COMPANY")}
              </Link>
              {isSubMenuOpen1 && (
                <ul className="ul-menuOsc">
                  <li className="link-nav-submenuOsc">
                    <Link className="liOsc" to="/quienes">
                    {t("li.Who are we?")}
                    </Link>
                  </li>
                  <li className="link-nav-submenuOsc">
                    <Link className="liOsc" to="/vision">
                    {t("li.Vision and mission")}
                    </Link>
                  </li>
                  {/*<li className="link-nav-submenu">
                    <Link className="li" to="/ejes">
                      Ejes de compromiso
                    </Link>
                  </li>*/}
                  <li className="link-nav-submenuOsc">
                    <Link className="liOsc" to="/historia">
                    {t("li.History")}
                    </Link>
                  </li>
                  <li className="link-nav-submenuOsc">
                    <Link className="liOsc" to="/info">
                    {t("li.Tax information")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="link-nav-chapaOsc"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link className="liNavOsc" to="/">
              {t("li.OUR BUSINESSES")}
              </Link>
              {isSubMenuOpen2 && (
                <li className="ul-menuNavOsc">
                <li
                    className="link-nav-submenuOsc"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <Link className="liOsc" to="/">
                      Oil & Gas
                    </Link>
                    {isSubMenuOpen4 && (
                      <div className="submenuNav-boxOsc">
                      <ul className="link-nav-submenuNuevoOsc">
                        <li>
                          <Link className="liOsc" to="/combustiblesdelnorte">
                          Combustibles del Norte
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/ccnchile">
                          CCN Chile
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/gasdelnorte">
                          Gas del norte
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/estaciones">
                          {t("li.SERVICE STATIONS")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    )}
                  </li>
                  <li
                    className="link-nav-submenuOsc"
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    <Link className="liOsc" to="/">
                      Agro
                    </Link>
                    {isSubMenuOpen5 && (
                      <div className="submenuNav-boxOsc">
                      <ul className="link-nav-submenuNuevoOsc">
                        <li>
                          <Link className="liOsc" to="/combustiblesdelnorte">
                            NECA
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/ccnchile">
                          Combustibles del Norte
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/mollar">
                            Puesto El Mollar
                          </Link>
                        </li>
                        <li>
                          <Link className="liOsc" to="/estaciones">
                            Planta Guemes
                          </Link>
                        </li>
                      </ul>
                    </div>
                    )}
                  </li>
                  <li
                    className="link-nav-submenuOsc"
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    <Link className="liOsc" to="/ejes">
                    {t("li.Mining")}
                    </Link>
                    {isSubMenuOpen6 && (
                      <div className="submenuNav-boxOsc">
                      <ul className="link-nav-submenuNuevoOsc">
                        <li>
                          <Link className="liOsc" to="/combustiblesdelnorte">
                            CN Logistica
                          </Link>
                        </li>
                      </ul>
                    </div>
                    )}
                  </li>
                </li>
              )}
            </li>

            <li
              className="link-nav-chapaOsc"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Link  className="liNav2Osc" to="/quiénes">
              {t("li.WORK AT CN GROUP")}
              </Link>
              {/*{isSubMenuOpen3 && (
                <ul className="ul-menu3Osc">
                  <li className="link-nav-submenuOsc">
                    <Link className="liOsc" to="/quiénes">
                    {t("li.Human capital")}
                    </Link>
                  </li>
                </ul>
              )}*/}
            </li>
            <li className="link-nav-chapaOsc">
              <Link className="liNav1Osc" to="/contacto">
              {t("li.CONTACT")}
              </Link>
            </li>
            <li className="link-nav-chapabOsc">
                    <div className="botonesOsc">
                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("es");
                          document
                            .querySelectorAll(".language-buttonOsc")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-buttonOsc"
                      >
                        ES
                      </button>

                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("en");
                          document
                            .querySelectorAll(".language-buttonOsc")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-buttonOsc"
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
    </div>
  );
};

export default NavbarOscura;