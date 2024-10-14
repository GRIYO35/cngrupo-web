import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/cngrupoLOGOwhite.png";
import { useTranslation } from "react-i18next";
import "./NavBarNueva.css";

const NavbarNueva = () => {
  const [t, i18next] = useTranslation("global");
  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen4, setSubMenuOpen4] = useState(false);
  const [isSubMenuOpen5, setSubMenuOpen5] = useState(false);
  const [isSubMenuOpen6, setSubMenuOpen6] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const subMenuTimer3 = useRef(null);
  const subMenuTimer4 = useRef(null);
  const subMenuTimer = useRef(null);
  const subMenuTimer1 = useRef(null);
  const subMenuTimer2 = useRef(null);

  const ulStyle = {
    right: showMobileMenu ? '0' : '-100%',
  };

  const handleMouseEnter = (setSubMenuOpen, timerRef) => {
    clearTimeout(timerRef.current);
    setSubMenuOpen(true);
  };

  const handleMouseLeave = (setSubMenuOpen, timerRef, delay) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSubMenuOpen(false);
    }, delay);
  };

  const handleClick = (setSubMenuOpen) => {
    if (window.innerWidth <= 800) {
      setSubMenuOpen(prevState => !prevState);
    }
  };

  return (
    <div className="nav-containerNueva">
      <div className="Nav-Clas3"></div>
      <div className="Nav-Clas">
        <Link to="/" className="LogoNavNueva">
          <img src={Logo} alt="" className="logoNuevo" />
        </Link>
      </div>
      <nav className="Nav-Clas1">
        <ul className="Nav-Clases" style={ulStyle}>
          <li
            onMouseEnter={() => handleMouseEnter(setSubMenuOpen1, subMenuTimer3)}
            onMouseLeave={() => handleMouseLeave(setSubMenuOpen1, subMenuTimer3, 150)}
            onClick={() => handleClick(setSubMenuOpen1)}
            className="dropdown"
          >
            {t("li.OUR COMPANY")}
            {isSubMenuOpen1 && (
              <ul className="dropdown-menu">
                <li><Link to="/quienes">{t("li.Who are we?")}</Link></li>
                <li><Link to="/vision">{t("li.Vision and mission")}</Link></li>
                <li><Link to="/historia">{t("li.History")}</Link></li>
                <li><Link to="/info">{t("li.Tax information")}</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(setSubMenuOpen2, subMenuTimer4)}
            onMouseLeave={() => handleMouseLeave(setSubMenuOpen2, subMenuTimer4, 150)}
            onClick={() => handleClick(setSubMenuOpen2)}
            className="dropdown"
          >
            {t("li.OUR BUSINESSES")}
            {isSubMenuOpen2 && (
              <ul className="dropdown-menu">
                <li
                  className="submenu-item"
                  onMouseEnter={() => handleMouseEnter(setSubMenuOpen4, subMenuTimer)}
                  onMouseLeave={() => handleMouseLeave(setSubMenuOpen4, subMenuTimer, 150)}
                  onClick={() => handleClick(setSubMenuOpen4)}
                >
                  OIL & GAS
                  {isSubMenuOpen4 && (
                    <ul className="submenu">
                      <li><Link to="/combustiblesdelnorte">COMBUSTIBLES DEL NORTE</Link></li>
                      <li><Link to="/ccnchile">CCN CHILE</Link></li>
                      <li><Link to="/gasdelnorte">GAS DEL NORTE</Link></li>
                      <li><Link to="/estaciones">{t("li.SERVICE STATIONS")}</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className="submenu-item"
                  onMouseEnter={() => handleMouseEnter(setSubMenuOpen5, subMenuTimer1)}
                  onMouseLeave={() => handleMouseLeave(setSubMenuOpen5, subMenuTimer1, 100)}
                  onClick={() => handleClick(setSubMenuOpen5)}
                >
                  {t("li.FARMLAND")}
                  {isSubMenuOpen5 && (
                    <ul className="submenu">
                      <li><Link to="/neca">NECA</Link></li>
                      <li><Link to="/combustiblesdelnorte">COMBUSTIBLES DEL NORTE</Link></li>
                      <li><Link to="/mollar">PUESTO EL MOLLAR</Link></li>
                      <li><Link to="/plantaguemes">PLANTA GÜEMES</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className="submenu-item"
                  onMouseEnter={() => handleMouseEnter(setSubMenuOpen6, subMenuTimer2)}
                  onMouseLeave={() => handleMouseLeave(setSubMenuOpen6, subMenuTimer2, 150)}
                  onClick={() => handleClick(setSubMenuOpen6)}
                >
                  {t("li.Mining")}
                  {isSubMenuOpen6 && (
                    <ul className="submenu">
                      <li><Link to="/logistica">CN LOGISTICA</Link></li>
                      <li><Link to="/cnsima">CN SIMA</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <Link className="Link" to="/capital">{t("li.WORK AT CN GROUP")}</Link>
          <Link className="Link" to="/contacto">{t("li.CONTACT")}</Link>
        </ul>
      </nav>
      <div className="Nav-Clas2" style={ulStyle}>
        <button
          onClick={(event) => {
            i18next.changeLanguage("es");
            document
              .querySelectorAll(".language-button")
              .forEach((btn) => btn.classList.remove("active"));
            event.target.classList.add("active");
          }}
          className={`language-button ${i18next.language === "es" && "active"}`}
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
          className={`language-button ${i18next.language === "en" && "active"}`}
        >
          EN
        </button>
      </div>
      <div className="Mobile" onClick={() => setShowMobileMenu (!showMobileMenu)}>
        <FaBars className="IconMobile"/>
      </div>
    </div>
  );
};

export default NavbarNueva;

