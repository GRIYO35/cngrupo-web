import React from "react";
import vectorneca2 from '../Assets/Group 94 (2).png'
import vectorneca3a from '../Assets/Vector (6).png'
import vectorneca3b from '../Assets/Vector (7).png'
import vectorneca4 from '../Assets/Vector (8).png'
import gasenvasado from '../Assets/gasenvasado.png'
import estacionamiento from '../Assets/estacionamiento.png'
import combustibles from '../Assets/combustibles.png'
import boxes from '../Assets/boxes.png'
import tiendafull from '../Assets/tiendafull.png'
import accesorios from '../Assets/accesorios.png'
import ScrollToTop from "react-scroll-to-top";
import estacionesimg1 from '../Assets/650X388px WEB lajitas.png'
import estacionesimg2 from '../Assets/650X388px WEB chango.png'
import videoSourceComb from "../Assets/YPF EESS Las lajitas web.mp4";
import { useTranslation } from "react-i18next";
import NAVBAR from "./NavBar";
import "./Estaciones.css"
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"


const Estacion = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");

  return (
    <div className="home-container">
      <div className="video">
        <video
          src={videoSourceComb}
          autoPlay
          loop
          muted
          className="tuvideo"
        >
        </video>
        <div className="content">
          <NAVBAR></NAVBAR>
          <div className="txt-redesEst">
            <div className="txt-container-empresaEst">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR COMPANY")}</p></div>
              <h2 className="logistica-title">{t("txtEstaciones.txt1")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-estaciones">
        <div className="title-txt-estaciones">
          <h2 className="estaciones-title">{t("txtChango.txt1")}</h2>
          <hr className="linea-estaciones"></hr>
          <p className="p-estaciones1">{t("txtChango.txt2")}{" "}  
          <span className="txt-empresa-spanEst">{t("txtChango.txt3")}{" "}</span>{t("txtChango.txt4")}
            <span className="txt-empresa-spanEst">{" "}{t("txtChango.txt5")}</span>{t("txtChango.txt6")}
            <span className="txt-empresa-spanEst">{" "}{t("txtChango.txt7")}</span>
            {" "}{t("txtChango.txt8")}
          </p>
        </div>
        <img src={estacionesimg2} alt="" className="fotobotonesEst" />
      </div>
      <div className="container-dibujitos">
        <h2 className="estaciones-title">Nuestros productos y servicios</h2>
        <hr className="linea-est"></hr>
        <div className="container-proteccion">
          <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
          <div className="productos-protección-esta">
            <div className="container-producto-estaciones">
              <img src={combustibles} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">GNC</h4>
                <p className="p-estaciones1">Estación de gas natural<br></br> comprimido</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={boxes} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">BOXES</h4>
                <p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={tiendafull} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">TIENDA FULL</h4>
                <p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={accesorios} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">ACCESORIOS</h4>
                <p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={gasenvasado} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">GAS ENVASADO</h4>
                <p className="p-estaciones1">Venta de gas envasado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-estacion2"></div>
      <div className="container-estaciones">
        <div className="title-txt-estaciones">
          <h2 className="estaciones-title">{t("txtLajitasEstacion.txt1")}</h2>
          <hr className="linea-estaciones"></hr>
          <p className="p-estaciones1"> {t("txtLajitasEstacion.txt2")}{" "}  
          <span className="txt-empresa-spanEst">{t("txtLajitasEstacion.txt3")}{" "}</span> 
          {t("txtLajitasEstacion.txt4")}{" "}
          <span className="txt-empresa-spanEst">{t("txtLajitasEstacion.txt5")}</span>
          {t("txtLajitasEstacion.txt6")}
            <br></br>
            <br></br>
            {t("txtLajitasEstacion.txt7")}{" "}
            <span className="txt-empresa-spanEst">{t("txtLajitasEstacion.txt8")}{" "}</span>
            {t("txtLajitasEstacion.txt9")} 
          </p>
        </div>
        <img src={estacionesimg1} alt="" className="fotobotonesEst" />
      </div>
      <div className="container-dibujitos">
        <h2 className="estaciones-title">Nuestros productos y servicios</h2>
        <hr className="linea-est"></hr>
        <div className="container-proteccion">
          <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
          <div className="productos-protección-esta">
            <div className="container-producto-estaciones">
              <img src={combustibles} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">COMBUSTIBLES</h4>
                <p className="p-estaciones1">Con surtidores de auto <br></br>caudal para camiones</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={boxes} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">BOXES</h4>
                <p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={tiendafull} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">TIENDA FULL</h4>
                <p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={accesorios} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">ACCESORIOS</h4>
                <p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={gasenvasado} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">GAS ENVASADO</h4>
                <p className="p-estaciones1">Venta de gas envasado</p>
              </div>
            </div>
            <div className="container-producto-estaciones">
              <img src={estacionamiento} alt="" className="producto-est" />
              <div className="icons-est-text">
                <h4 className="title-container-estacion">ESTACIONAMIENTO</h4>
                <p className="p-estaciones1">Estacionamiento <br></br>para transportistas, entre otros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-estacion1"></div>
      <div className="container-txt-cardEst">
        <h2 className="estaciones-title">{t("txtContacto.txt1")}</h2>
        <hr className="linea-est"></hr>
        <p className="txt-est-card">{t("txtContacto.txt2")}</p>
        <div className="container-cards-estaciones">
          <div className="card-Est">
            <div className="titulo-Est">
              <h2 className="title-direccion-est">El Chango</h2>
            </div>
            <div className="CardEstContacto">
              <div className="EstDirec1">
                <img src={vectorneca2} alt="" className="logoEst1" />
                <p className="txt-direccion-est">
                  Paraguay 1198 (Paraguay esq.
                  <br />
                  Belgica) - Salta (4400)
                </p>
              </div>
              <div className="EstDirec2">
                <img src={vectorneca3b} alt="" className="logoEst3" />
                <img src={vectorneca3a} alt="" className="logoEst2" />
                <p className="txt-direccion-est">3874688238</p>
              </div>
              <div className="EstDirec">
                <img src={vectorneca4} alt="" className="vectorEst4" />
                <p className="txt-direccion-est">
                  playachango@cngrupo.com.ar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-cards-estaciones">
          <div className="card-est1">
            <div className="titulo-Est">
              <h2 className="title-direccion-est">Las Lajitas</h2>
            </div>
            <div className="CardEstContacto">
              <div className="EstDirec1">
                <img src={vectorneca2} alt="" className="logoEst1" />
                <p className="txt-direccion-est">
                  Ruta Provincial 30 Ruta 5 -
                  <br />
                  Las Lajitas (4449)
                </p>
              </div>
              <div className="EstDirec6">
                <img src={vectorneca3b} alt="" className="logoEst3" />
                <img src={vectorneca3a} alt="" className="logoEst2" />
                <ul className="Lista-card-est">
                  <li className="li-est"><span className="txt-empresa-spanEst">Playa:</span> 3875828809</li>
                  <li className="li-est"><span className="txt-empresa-spanEst">Boxes:</span> 3875425534</li>
                </ul>
              </div>
              <div className="EstDirec3">
                <img src={vectorneca4} alt="" className="vectorEst4" />
                <ul className="Lista-card-est">
                  <li className="li-est"><span className="txt-empresa-spanEst">Playa:</span> ypflajitas@cngrupo.com.ar</li>
                  <li className="li-est"><span className="txt-empresa-spanEst">Full:</span> full_lajitas@cngrupo.com.ar</li>
                  <li className="li-est"><span className="txt-empresa-spanEst">Boxes:</span> boxes_lajitas@cngrupo.com.ar</li>
                </ul>
              </div>
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
            backgroundColor: "#00448A",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
          component={
            <img
              src={FlechaScrol}
              alt="Icono Personalizado"
              style={{
                width: 22,
                height: 11,
                top: "50%",
                left: "50%",
                transform: "translate(0%, -20%)",
              }}
            />
          }
        />
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

export default Estacion;