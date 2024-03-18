import React from "react";
import logoinf1 from "../Assets/CN - INFO IMPOSITIVA grey@300x.png";
import logoinf2 from "../Assets/CHANGO - INFO IMPOSITIVA grey@300x.png";
import logoinf3 from "../Assets/GAS DEL NORTE - INFO IMPOSITIVA grey@300x.png";
import logoinf4 from "../Assets/CN LOGISTICA - INFO IMPOSITIVA grey@300x.png";
import logoinf5 from "../Assets/NECA - INFO IMPOSITIVA grey@300x.png";
import logoinf6 from "../Assets/PEM - INFO IMPOSITIVA grey@300x.png";
import NAVBAR from "./NavBarOscura";
import "./Infoimpo.css"

const Info = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/

  return (
    <div className="home-container">
      <NAVBAR></NAVBAR>

      <div className="txt-redesInfo">
        <div className="txt-container-InfoImpo">
          <div className="linea-tituloInfo">
            <hr class="mi-lineaInfo"></hr><p className="nuestra-empresaInfo">NUESTRA EMPRESA</p>
          </div>
          <h2 className="titulo-info">INFORMACIÓN IMPOSITIVA</h2>
          {/*<h2 className="nuestra-info-txt"><span className="txt-empresa-span">CN GRUPO</span> nace como una empresa familiar y cuenta con más <span className="txt-empresa-span"> 35 años </span> de trayectoria, más de <span className="txt-empresa-span"> 35 años </span> más de <span className="txt-empresa-span"> 250 colaboradores </span> y <span className="txt-empresa-span"> 6 bases operativas </span> distribuidas en puntos estratégicos de Salta y norte de Chile. </h2>*/}
        </div>
      </div>

      <div className="logos-info">
        <div className="logo-boton">
          <img src={logoinf1} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf2} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf3} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf4} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf5} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
        <div className="logo-boton">
          <img src={logoinf6} alt="" className="logo-info" />
          <button className="info-btn">DESCARGAR PDF</button>
        </div>
      </div>

      <div className="footer">
        <div className="txt1">
          <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
        </div>
        <div className="txt2">
          <p className="txt-foo">
            © 2024 CN Grupo - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
