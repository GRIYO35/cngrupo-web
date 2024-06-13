import React from "react";
import Logologistica from '../Assets/logoinf4.png'
import Imgvisionlogo from '../Assets/650X388px WEB descripcion.png'
import Vectorlogistica1 from '../Assets/Group 94.png'
import Vectorlogistica2 from '../Assets/Vector (2).png'
import Vectorlogistica3 from '../Assets/Vector (3).png'
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBar";
import "./Logistica.css"


const Logistica = () => {
    // eslint-disable-next-line no-unused-vars
    const [t, i18next] = useTranslation("global");

    return (
        <div className="home-container">
            <div className="home-containerLog">
        <NAVBAR></NAVBAR>
        <div className="txt-redesLog">
            <div className="txt-container-empresaLog">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR BUSINESSES")}</p></div>
            <h2 className="logistica-title">CN LOGÍSTICA</h2>
            </div>
        </div> 
           
        </div>
        <div className="container-logistica">
            <div className="logo-texto-logistica">
                <div className="logologistica">           
            <img src={Logologistica} alt="" className="Logimg1"/>
            </div>
            
          <p className="text-logistica">
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt1")}{" "}</span> 
            {t("txtLogistica.txt2")}{" "} 
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt3")}{" "}</span> 
            {t("txtLogistica.txt4")}{" "} 
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt5")}{" "}</span> 
            {t("txtLogistica.txt6")}
            <br></br><br></br>{t("txtLogistica.txt7")}{" "} 
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt8")}{" "}</span> 
            {t("txtLogistica.txt9")}{" "}
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt10")}{" "}</span>
            {t("txtLogistica.txt11")}{" "}
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt12")}{" "}</span> 
            {t("txtLogistica.txt13")}{" "} 
            <span className="txt-empresa-spanLog">{t("txtLogistica.txt14")}</span>.
            </p>
            </div>
            <img src={Imgvisionlogo} alt="" className="fotoLog"/>
        </div>

        <div className="separadorfoto"></div>

      <div className="container-txt-cardLog">
        <h2 className="logistica-title-card">{t("txtContacto.txt1")}</h2>
        <hr className="linea-logistica"></hr>
        <p className="txt-logistica-card">{t("txtContacto.txt2")}</p>
        <div className="container-cards-logistica">
            <div className="card-contactoLog">
              <div className="titulo-logo-logistica">
                <h2 className="title-direccionLog">{t("txtContacto.txt3")}</h2>
                <img src={Vectorlogistica1} alt="" className="vector-logistica"/>
              </div>
                <p className="txt-direccionLog">Av. Chile 1275 (4400)</p>
            </div>
            <div className="card-contactoLog">
              <div className="titulo-logo-logistica">
                <h2 className="title-direccionLog">{t("txtContacto.txt4")}</h2>
                <img src={Vectorlogistica2} alt="" className={i18next.language === "es" ? "vector-logistica2" : "vector-logistica2EN"}/>
              </div>
              <p className="txt-direccionLog">(0387) 4236555</p>
            </div>
            <div className="card-contactoLog">
              <div className="titulo-logo-logistica">
                <h2 className="title-direccionLog">{t("txtContacto.txt5")}</h2>
                <img src={Vectorlogistica3} alt="" className="vector-logistica3"/>
              </div>
              <p className="txt-direccionLog">recepcion@cngrupo.com.ar</p>
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
    )
}

export default Logistica;