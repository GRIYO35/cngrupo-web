import React from "react";
import LogoMollar from '../Assets/PEM - INFO IMPOSITIVA grey@300x.png'
import Logochoclo from '../Assets/Group (2).png'
import Logosiembra from '../Assets/Group (3).png'
import vectormollar1 from '../Assets/Capa_2.png'
import vectormollar2 from '../Assets/Group 94 (1).png'
import vectormollar3 from '../Assets/Vector (4).png'
import vectormollar4 from '../Assets/Vector (5).png'
import videoSourceMollar from "../Assets/Puesto el mollar web v3.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBar"
import "./Mollar.css"

const Puesto = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSourceMollar}
          autoPlay
          loop
          muted
          className="tuvideo"
        >
        </video>
        <div className="content">
          <NAVBAR></NAVBAR>
          <div className="txt-redes-mollar">
            <div className="txt-container-mollar">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p></div>
              <h2 className="logistica-title">PUESTO EL MOLLAR</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-elmollar">
        <div className="logo-title-linea-mollar">
          <img src={LogoMollar} alt="" className="logomollar" />
          <hr class="my-lineaMollar"></hr>
          <h2 className="title-elmollar">Cultivos con{" "} 
          <span className="txt-empresa-spanMol">Agricultura{" "}</span> 
          de <span className="txt-empresa-spanMol">Precisión</span></h2>
        </div>

        <div className="container-elmollar2">
          <div className="parapegarla">
            {/* <hr className="lineavertical"></hr> */}
            <p className="p-elmollar">{t("txtMollar.txt1")}{" "} 
            <span className="txt-empresa-spanMol">{t("txtMollar.txt2")}{" "}</span>
            {t("txtMollar.txt3")}{" "}<span className="txt-empresa-spanMol">{t("txtMollar.txt4")}{" "}</span> 
            {t("txtMollar.txt5")}</p>
          </div>
          <div className="logos-siembra-text">

            <div className="logo-siembra">
              <img src={Logochoclo} alt="" className="logos-siembra" />
              <div className="txt-siembra-c">
                <h3 className="title-logo-choclo">{t("txtMollar.txt6")}</h3>
                <p className="txt-siembra">{t("txtMollar.txt7")}</p>
              </div>

            </div>

            <div className="logo-siembra">
              <img src={Logosiembra} alt="" className="logos-siembra2" />
              <div className="txt-siembra-c">
                <h3 className="title-logo-choclo">{t("txtMollar.txt8")}</h3>
                <p className="txt-siembra">{t("txtMollar.txt9")}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="banner-mollar"></div>

      <div className="container-txt-cardMollar">
        <h2 className="mollar-card">{t("txtContacto.txt1")}</h2>
        <hr className="linea-mollar"></hr>
        <p className="txt-mollar-card">{t("txtContacto.txt2")}</p>
        <div className="container-cards-mollar">
          <div className="card-mollar">
            <div className="titulo-mollar">
              <h2 className="title-direccion-mollar">{t("txtContacto.txt7")}</h2>
              <img src={vectormollar1} alt="" className="vectormollar1" />
            </div>
            <p className="txt-direccion-mollar">Francisco Couchot</p>
          </div>
          <div className="card-mollar">
            <div className="titulo-mollar">
              <h2 className="title-direccion-mollar">{t("txtContacto.txt3")}</h2>
              <img src={vectormollar2} alt="" className="vectormollar4" />
            </div>
            <p className="txt-direccion-mollar">Av. Chile 1275 - Salta (4400)</p>
          </div>
          <div className="card-mollar">
            <div className="titulo-mollar">
              <h2 className="title-direccion-mollar">{t("txtContacto.txt4")}</h2>
              <img src={vectormollar3} alt="" className={i18next.language === "es" ? "vectormollar3" : "vectormollar3EN"} />
            </div>
            <p className="txt-direccion-mollar">(0387) 466-2710</p>
          </div>
          <div className="card-mollar">
            <div className="titulo-mollar">
              <h2 className="title-direccion-mollar">{t("txtContacto.txt5")}</h2>
              <img src={vectormollar4} alt="" className="vectormollar2" />
            </div>
            <p className="txt-direccion-mollar">fcouchot@cngrupo.com.ar</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="txt1">
          <p className="txt-foo">{t("txt-foo2.Footer1")}</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">{t("txt-foo2.Footer")}</p>
        </div>
      </div>
    </div>
  )
}

export default Puesto