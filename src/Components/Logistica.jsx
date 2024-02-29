import React from "react";
import Logologistica from '../Assets/logoinf4.png'
import Imgvisionlogo from '../Assets/650X388px WEB descripcion.png'
import Vectorlogistica1 from '../Assets/Group 94.png'
import Vectorlogistica2 from '../Assets/Vector (2).png'
import Vectorlogistica3 from '../Assets/Vector (3).png'
import NAVBAR from "./NavBar";
import "./Logistica.css"


const Navchapa = () => {
    /*const [isOpen, setIsOpen] = useState(false);*/

    return (
        <div className="home-container">
            <div className="home-containerLog">
        <NAVBAR></NAVBAR>
        <div className="txt-redesLog">
            <div className="txt-container-empresaLog">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p></div>
            <h2 className="logistica-title">CN LOGISTICA</h2>
            </div>
        </div> 
           
        </div>
        <div className="container-logistica">
            <div className="logo-texto-logistica">
                <div className="logologistica">           
            <img src={Logologistica} alt="" className="Logimg1"/>
            </div>
            
          <p className="text-logistica"><span className="txt-empresa-spanLog">CN Logística</span> surge como una <span className="txt-empresa-spanLog">solución integral</span> para aquellas empresas que deciden tercerizar el manejo del <span className="txt-empresa-spanLog">combustible</span> para poder enfocarse en su actividad principal.
            
            <br></br>
            <br></br><br></br>Uno de nuestros objetivos principales es <span className="txt-empresa-spanLog">facilitar</span> el trabajo a nuestros clientes, proporcionándoles<span className="txt-empresa-spanLog"> productos </span>y <span className="txt-empresa-spanLog">servicios</span> que les permitan optimizar sus procesos y mejorar su <span className="txt-empresa-spanLog">rentabilidad</span>.</p>
            </div>
            <img src={Imgvisionlogo} alt="" className="fotoLog"/>
        </div>

        <div className="separadorfoto"></div>

      <div className="container-txt-cardLog">
        <h2 className="logistica-title-card">Contacto</h2>
        <hr className="linea-logistica"></hr>
        <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-logistica">
            <div className="card-contactoLog"><div className="titulo-logo-logistica"><h2 className="title-direccionLog">Dirección</h2><img src={Vectorlogistica1} alt="" className="vector-logistica"/></div><p className="txt-direccionLog">Av. Chile 1275 (4400)</p></div>
            <div className="card-contactoLog"><div className="titulo-logo-logistica"><h2 className="title-direccionLog">Teléfono</h2><img src={Vectorlogistica2} alt="" className="vector-logistica2"/></div><p className="txt-direccionLog">(0387) 4236555</p></div>
            <div className="card-contactoLog"><div className="titulo-logo-logistica"><h2 className="title-direccionLog">Email</h2><img src={Vectorlogistica3} alt="" className="vector-logistica3"/></div><p className="txt-direccionLog">recepcion@cngrupo.com.ar</p></div>
        </div>
      </div>
        <div className="footer">
          <div className="txt1">
            <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
          </div>
          <div className="txt2">
            <p className="txt-foo">© 2023 CN Grupo - Todos los derechos reservados</p>
          </div>
        </div>

        </div>
    )
}

export default Navchapa