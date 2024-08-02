import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../Assets/cngrupoLOGOwhite.png";
import { useTranslation } from "react-i18next";
import "./NavBarMobile.css";


const Sidebar = () => {
  const [t, i18next] = useTranslation("global");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const handleSubSubMenuToggle = (menu) => {
    setOpenSubSubMenu(openSubSubMenu === menu ? null : menu);
  };

  return (
    
    <div className="Prueba">
      <div className="Cabecera"> 
      <div className="Nav-ClasMobile">
        <Link to="/" className="LogoNavNueva">
          <img src={Logo} alt="" className="logoNuevo" />
        </Link>
      </div>
        <div className="Mobile" onClick={toggleSidebar}>
        <FaBars className="IconMobile"/>
      </div>
      </div>  
    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <ul>
        <li>
          <li className="buttonNav" type="button" onClick={() => handleSubMenuToggle("settings")}>
            <i className="ai-gear"></i>
            <p>{t("li.OUR COMPANY")}</p>
            <i className="ai-chevron-down-small"></i>
          </li>
          <div className={`sub-menu ${openSubMenu === "settings" ? "open" : ""}`}>
            <ul>
              <li>
                <li className="buttonSubMenu" type="button">
                <Link className="Link" to="/quienes">{t("li.Who are we?")}</Link>
                </li>
              </li>
              <li>
                <li className="buttonSubMenu" type="button">
                <Link className="Link" to="/vision">{t("li.Vision and mission")}</Link>
                </li>
              </li>
              <li>
                <li className="buttonSubMenu" type="button">
                <Link className="Link" to="/historia">{t("li.History")}</Link>
                </li>
              </li>
              <li>
                <li className="buttonSubMenu" type="button">
                <Link className="Link" to="/info">{t("li.Tax information")}</Link>
                </li>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <li className="buttonNav" type="button" onClick={() => handleSubMenuToggle("create")}>
            <i className="ai-folder-add"></i>
            <p>{t("li.OUR BUSINESSES")}</p>
            <i className="ai-chevron-down-small"></i>
          </li>
          <div className={`sub-menu ${openSubMenu === "create" ? "open" : ""}`}>
            <ul>
              <li>
                <li className="buttonSubMenu" type="button" onClick={() => handleSubSubMenuToggle("oil")}>
                  OIL & GAS
                  <i className="ai-chevron-down-small"></i>
                </li>
                <div className={`sub-sub-menu ${openSubSubMenu === "oil" ? "open" : ""}`}>
                  <ul>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/combustiblesdelnorte">COMBUSTIBLES DEL NORTE</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu"type="button">
                      <Link className="Link" to="/ccnchile">CCN CHILE</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/gasdelnorte">GAS DEL NORTE</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/estaciones">{t("li.SERVICE STATIONS")}</Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <li className="buttonSubMenu" type="button" onClick={() => handleSubSubMenuToggle("agro")}>
                {t("li.FARMLAND")}
                  <i className="ai-chevron-down-small"></i>
                </li>
                <div className={`sub-sub-menu ${openSubSubMenu === "agro" ? "open" : ""}`}>
                  <ul>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/neca">NECA</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/combustiblesdelnorte">COMBUSTIBLES DEL NORTE</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/mollar">PUESTO EL MOLLAR</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/plantaguemes">PLANTA GÜEMES</Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <li className="buttonSubMenu" type="button" onClick={() => handleSubSubMenuToggle("mineria")}>
                {t("li.Mining")}
                  <i className="ai-chevron-down-small"></i>
                </li>
                <div className={`sub-sub-menu ${openSubSubMenu === "mineria" ? "open" : ""}`}>
                  <ul>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/logistica">CN LOGISTICA</Link>
                      </li>
                    </li>
                    <li>
                      <li className="buttonSubMenu" type="button">
                      <Link className="Link" to="/cnsima">CN SIMA</Link>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <li className="buttonNav" type="button">
            <i className="ai-bell"></i>
            <p><Link className="Link" to="/capital">{t("li.WORK AT CN GROUP")}</Link></p>
          </li>
        </li>
        <li>
          <li className="buttonNav" type="button">
            <i className="ai-cart"></i>
            <p><Link className="Link" to="/contacto">{t("li.CONTACT")}</Link></p>
          </li>
        </li>
      </ul>
      <div className="TraduccionMobile" >
        <button
          onClick={(event) => {
            i18next.changeLanguage("es");
            document
              .querySelectorAll(".language-buttonMobile")
              .forEach((btn) => btn.classList.remove("active"));
            event.target.classList.add("active");
          }}
          className={`language-buttonMobile ${i18next.language === "es" && "active"}`}
        >
          ES
        </button>

        <button
          onClick={(event) => {
            i18next.changeLanguage("en");
            document
              .querySelectorAll(".language-buttonMobile")
              .forEach((btn) => btn.classList.remove("active"));
            event.target.classList.add("active");
          }}
          className={`language-buttonMobile ${i18next.language === "en" && "active"}`}
        >
          EN
        </button>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;