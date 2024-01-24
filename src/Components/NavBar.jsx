import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/cngrupoLOGOwhite.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18next] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setSubMenuOpen5] = useState(false);
  const [isSubMenuOpen6, setSubMenuOpen6] = useState(false);

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

  const handleMouseEnter4 = () => {
    setSubMenuOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setSubMenuOpen4(false);
  };

  const handleMouseEnter5 = () => {
    setSubMenuOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setSubMenuOpen5(false);
  };

  const handleMouseEnter6 = () => {
    setSubMenuOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setSubMenuOpen6(false);
  };

  return (
    <div className="nav-container">
        <Link to="/" className="LogoNav">
          <img src={Logo} alt="" className="logo" />
        </Link>
      <nav className="nav-chapa">
        <div className={`navbar-links-container ${isOpen && "open"}`}>
          <ul className="ul-nav">
            <li
              className="link-nav-chapa"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Link className="liNav3" to="/">
              {t("li.OUR COMPANY")}
              </Link>
              {isSubMenuOpen1 && (
                <ul className="ul-menu">
                  <li className="link-nav-submenu">
                    <Link className="li" to="/quienes">
                    {t("li.Who are we?")}
                    </Link>
                  </li>
                  <li className="link-nav-submenu">
                    <Link className="li" to="/vision">
                    {t("li.Vision and mission")}
                    </Link>
                  </li>
                  {/*<li className="link-nav-submenu">
                    <Link className="li" to="/ejes">
                      Ejes de compromiso
                    </Link>
                  </li>*/}
                  <li className="link-nav-submenu">
                    <Link className="li" to="/historia">
                    {t("li.History")}
                    </Link>
                  </li>
                  <li className="link-nav-submenu">
                    <Link className="li" to="/info">
                    {t("li.Tax information")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="link-nav-chapa"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link className="liNav" to="/">
              {t("li.OUR BUSINESSES")}
              </Link>
              {isSubMenuOpen2 && (
                <li className="ul-menuNav">
                <li
                    className="link-nav-submenu"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <Link className="li" to="/">
                      Oil & Gas
                    </Link>
                    {isSubMenuOpen4 && (
                      <div className="submenuNav-box">
                      <ul className="link-nav-submenuNuevo">
                        <li>
                          <Link className="li" to="/combustiblesdelnorte">
                          Combustibles del Norte
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/ccnchile">
                          CCN Chile
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/gasdelnorte">
                          Gas del norte
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/estaciones">
                          {t("li.SERVICE STATIONS")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    )}
                  </li>
                  <li
                    className="link-nav-submenu"
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    <Link className="li" to="/">
                      Agro
                    </Link>
                    {isSubMenuOpen5 && (
                      <div className="submenuNav-box">
                      <ul className="link-nav-submenuNuevo">
                        <li>
                          <Link className="li" to="/combustiblesdelnorte">
                            NECA
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/ccnchile">
                          Combustibles del Norte
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/gasdelnorte">
                            Puesto El Mollar
                          </Link>
                        </li>
                        <li>
                          <Link className="li" to="/estaciones">
                            Planta Guemes
                          </Link>
                        </li>
                      </ul>
                    </div>
                    )}
                  </li>
                  <li
                    className="link-nav-submenu"
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    <Link className="li" to="/ejes">
                    {t("li.Mining")}
                    </Link>
                    {isSubMenuOpen6 && (
                      <div className="submenuNav-box">
                      <ul className="link-nav-submenuNuevo">
                        <li>
                          <Link className="li" to="/combustiblesdelnorte">
                            CN Sima
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
              className="link-nav-chapa"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <Link className="liNav2" >
              {t("li.WORK AT CN GROUP")}
              </Link>
              {isSubMenuOpen3 && (
                <ul className="ul-menu3">
                  <li className="link-nav-submenu">
                    <Link className="li" to="/quiénes">
                    {t("li.Human capital")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="link-nav-chapa">
              <Link className="liNav1" to="/contacto">
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
    </div>
  );
};

export default Navbar;
