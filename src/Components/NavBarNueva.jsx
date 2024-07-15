import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/cngrupoLOGOwhite.png";
import { useTranslation } from "react-i18next";
//import styled from 'styled-components';
import "./NavBarNueva.css"

const NavbarNueva = () => {
    const [t, i18next] = useTranslation("global");
    const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
    const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);
    const [isSubMenuOpen4, setSubMenuOpen4] = useState(false);
    const [isSubMenuOpen5, setSubMenuOpen5] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [isSubMenuOpen6, setSubMenuOpen6] = useState(false);
    const [showMobileMenu, setShowMobilemenu] = useState (false)
    let subMenuTimer;
    let subMenuTimer1;
    let subMenuTimer2;
    let subMenuTimer3;
    let subMenuTimer4;

    const ulStyle = {
      right: showMobileMenu ? '0' : '-100%',
    };
  
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
      }, 100);
    };
  
    const handleMouseEnter6 = (setSubMenuOpen) => {
      clearTimeout(subMenuTimer2);
      setSubMenuOpen6(true);
       
    };
  
    const handleMouseLeave6 = (setSubMenuOpen) => {
      clearTimeout(subMenuTimer2);
      subMenuTimer2 = setTimeout(() => {
        setSubMenuOpen6(false);
      }, 150);
    };
  
    const handleMouseEnter1 = () => {
      clearTimeout(subMenuTimer3);
      setSubMenuOpen1(true);
    };
  
    const handleMouseLeave1 = () => {
      clearTimeout(subMenuTimer3);
      subMenuTimer3 = setTimeout(() => {
        setSubMenuOpen1(false);
      }, 100);
    };
  
    const handleMouseEnter2 = () => {
      clearTimeout(subMenuTimer4);
      setSubMenuOpen2(true);
    };
  
    const handleMouseLeave2 = () => {
      clearTimeout(subMenuTimer4);
      subMenuTimer4 = setTimeout(() => {
        setSubMenuOpen2(false);
      }, 100);
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
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        className="dropdown">
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
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2} 
          className="dropdown">
          {t("li.OUR BUSINESSES")}
          {isSubMenuOpen2 && (
              <ul className="dropdown-menu">
                <li 
                className="submenu-item" 
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}>
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
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}>
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
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}>
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
      <div className="Mobile" onClick={() => setShowMobilemenu (!showMobileMenu)}>
        <FaBars className="IconMobile"/>
      </div>
    </div>
  );
};

export default NavbarNueva;
