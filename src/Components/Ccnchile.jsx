import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logochile from "../Assets/loggo1.png";
import mapachile from "../Assets/MAPA CHILE WEB@300x.png";
import Vectorlogistica1 from "../Assets/Group 94.png";
import Vectorlogistica2 from "../Assets/Vector (2).png";
import Vectorlogistica3 from "../Assets/Vector (3).png";
import imgchile from "../Assets/650X388px WEB descripcion chile.png";
import NAVBAR from "./NavBar";
import "./Ccnchile.css";

const Navchapa = () => {
  /*const [isOpen, setIsOpen] = useState(false);*/

  return (
    <div className="home-container">
      <div className="home-container8">
        <NAVBAR></NAVBAR>
        <div className="redes-container-empresa-chile">
          <FaInstagram />
          <FaFacebook />
        </div>
        <div className="txt-redesChile">
          <div className="txt-container-empresaChile">
            <div className="linea-titulo">
              <hr class="mi-linea"></hr>
              <p className="nuestra-empresa">NUESTROS NEGOCIOS</p>
            </div>
            <h2 className="chile-title">CCN CHILE</h2>
          </div>
        </div>
      </div>

      <div className="container-chile">
        <div className="logochile-txt">
          <img src={logochile} alt="" className="logochile" />
          <p className="p-chile1">
            En el año 2014 CN Grupo llegó a Chile con su designación como{" "}
            <span className="txt-empresa-spanChile">
              {" "}
              único proveedor oficial de la marca YPF
            </span>{" "}
            en el norte del país. <br></br>
            <br></br>
            El negocio se enfoca en la{" "}
            <span className="txt-empresa-spanChile">
              {" "}
              venta y distribución de productos lubricantes YPF
            </span>{" "}
            como aceites y grasas, brindando soluciones adaptadas a las
            necesidades de nuestros clientes (lubricentros, talleres, empresas
            proveedoras de minería, entre otros).
          </p>
        </div>
        <img src={imgchile} alt="" className="imgchile" />
      </div>
      <div className="container-txt-cardChile">
        <h2 className="chile-title-card">Zonas en las que operamos</h2>
        <hr className="linea-chile"></hr>
        <img src={mapachile} alt="Mapachile" className="mapaChile"></img>
      </div>
      <div className="banner-chile"></div>
      <div className="container-txt-cardChile1">
        <h2 className="chile-title-card1">Contacto</h2>
        <hr className="linea-chile1"></hr>
        <p className="txt-logistica-card">
          Para contactarnos, podés hacerlo a través de estos canales:
        </p>
        <div className="container-cards-chile">
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">Dirección</h2>
              <img src={Vectorlogistica1} alt="" className="vector-chile" />
            </div>
            <p className="txt-direccionChile">Av. Chile 1275-4400</p>
          </div>
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">Teléfono</h2>
              <img src={Vectorlogistica2} alt="" className="vector-chile2" />
            </div>
            <p className="txt-direccionChile">(0387) 423 6555</p>
          </div>
          <div className="card-contactoChile">
            <div className="titulo-logo-chile">
              <h2 className="title-direccionChile">Email</h2>
              <img src={Vectorlogistica3} alt="" className="vector-chile3" />
            </div>
            <p className="txt-direccionChile">recepcion@cngrupo.com.ar</p>
          </div>
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

export default Navchapa;
