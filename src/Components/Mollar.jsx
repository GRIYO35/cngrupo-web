import React from "react";
/*import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'*/
import LogoMollar from '../Assets/PEM - INFO IMPOSITIVA grey@300x.png'
import Logochoclo from '../Assets/Group (2).png'
import Logosiembra from '../Assets/Group (3).png'
import vectormollar1 from '../Assets/Capa_2.png'
import vectormollar2 from '../Assets/Group 94 (1).png'
import vectormollar3 from '../Assets/Vector (4).png'
import vectormollar4 from '../Assets/Vector (5).png'
import videoSourceMollar from "../Assets/Puesto el mollar web v3.mp4";
import NAVBAR from "./NavBar"
import "./Mollar.css"

const Navchapa = () => {
    /*const [isOpen, setIsOpen] = useState(false);*/

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
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p></div>
            <h2 className="logistica-title">PUESTO EL MOLLAR</h2>
            </div>
            </div>
            </div>  
        </div>

        <div className="container-elmollar">
            <div className="logo-title-linea-mollar">
                <img src={LogoMollar} alt="" className="logomollar"/>
                <hr class="my-lineaMollar"></hr>
                <h2 className="title-elmollar">Cultivos con <span className="txt-empresa-span">Agricultura</span> de <span className="txt-empresa-span">Precisión</span></h2>
            </div>
            
            <div className="container-elmollar2">
                <div className="parapegarla">
                {/* <hr className="lineavertical"></hr> */}
                <p className="p-elmollar">Somos una empresa dedicada a siembra propia y aparcería. Junto con productores de Salta, buscamos constantemente maximizar la rentabilidad de la mano de la <span className="txt-empresa-span">innovación y sustentabilidad</span>. Aportamos <span className="txt-empresa-span">transparencia y profesionalización </span> en la gestión para fomentar relaciones a largo plazo con beneficio mutuo.</p>
                </div>
                <div className="logos-siembra-text">
               
                    <div className="logo-siembra">
                    <img src={Logochoclo} alt="" className="logos-siembra" /> 
                    <div className="txt-siembra-c">
                    <h3 className="title-logo-choclo">Siembra propia</h3>
                    <p className="txt-siembra">Soja y Maíz  -  1000 ha</p>
                    </div> 
                
                </div>
                
                    <div className="logo-siembra">
                    <img src={Logosiembra} alt="" className="logos-siembra2"/>  
                    <div className="txt-siembra-c">
                    <h3 className="title-logo-choclo">Siembra asociada</h3>
                    <p className="txt-siembra">Especialidades  -  3000 ha</p>
                    </div>
                </div>
                </div>
               
            </div>
            
        </div>

        <div className="banner-mollar"></div>

        <div className="container-txt-cardMollar">
        <h2 className="mollar-card">Contacto</h2>
        <hr className="linea-mollar"></hr>
        <p className="txt-mollar-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-mollar">
            <div className="card-mollar"><div className="titulo-mollar"><h2 className="title-direccion-mollar">Responsable</h2><img src={vectormollar1} alt="" className="vectormollar1"/></div><p className="txt-direccion-mollar">Francisco Couchot</p></div>
            <div className="card-mollar"><div className="titulo-mollar"><h2 className="title-direccion-mollar">Dirección</h2><img src={vectormollar2} alt="" className="vectormollar4"/></div><p className="txt-direccion-mollar">Av. Chile 1275 - Salta (4400)</p></div>
            <div className="card-mollar"><div className="titulo-mollar"><h2 className="title-direccion-mollar">Teléfono</h2><img src={vectormollar3} alt="" className="vectormollar3"/></div><p className="txt-direccion-mollar">(0387) 466-2710</p></div>
            <div className="card-mollar"><div className="titulo-mollar"><h2 className="title-direccion-mollar">Email</h2><img src={vectormollar4} alt="" className="vectormollar2"/></div><p className="txt-direccion-mollar">fcouchot@cngrupo.com.ar</p></div>
        </div>
      </div>

        <div className="footer">
          <div className="txt1">
            <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
          </div>
          <div className="txt2">
            <p className="txt-foo">© 2024 CN Grupo - Todos los derechos reservados</p>
          </div>
        </div>

        
        
        
        </div>
    )
}

export default Navchapa