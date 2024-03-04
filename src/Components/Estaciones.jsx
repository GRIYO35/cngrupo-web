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
/*import ExpandLessIcon from "@material-ui/icons/ExpandLess";*/
import ScrollToTop from "react-scroll-to-top";
import estacionesimg1 from '../Assets/650X388px WEB lajitas.png'
import estacionesimg2 from '../Assets/650X388px WEB chango.png'
import videoSourceComb from "../Assets/YPF EESS Las lajitas web.mp4";
import NAVBAR from "./NavBar";
import "./Estaciones.css"
import FlechaScrol from "../Assets/flecha web cn grupo@300x-8.png"


const Navchapa = () => {
    /*const [isOpen, setIsOpen] = useState(false);*/

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
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTROS NEGOCIOS</p></div>
            <h2 className="logistica-title">ESTACIONES DE SERVICIO</h2>
            </div>
            </div>  
            </div>
        </div>

        <div className="container-estaciones">
            <div className="title-txt-estaciones">
                <h2 className="estaciones-title">EESS El Chango</h2>   
                <hr className="linea-estaciones"></hr>
                <p className="p-estaciones1"> EESS El Chango está ubicada en Salta Capital y es una de las primeras unidades de negocio de CN Grupo. A lo largo de sus años ha recopilado  <span className="txt-empresa-spanEst">decenas de reconocimientos y premios </span>debido al cumplimiento de
                <span className="txt-empresa-spanEst">  normas +YPF</span>,  un programa integral de calidad de gestión que busca la 
               
                <span className="txt-empresa-spanEst"> excelencia en la imagen y la calidad de servicio </span>
                en la red nacional de Estaciones de Servicio YPF distinguiéndose entre sus competidores.
                </p>
                </div>
                <img src={estacionesimg2} alt="" className="fotobotonesEst"/>
        
        
        </div>     
        
        
        <div className="container-dibujitos">
                <h2 className="estaciones-title">Nuestros productos y servicios</h2>   
                <hr className="linea-est"></hr>
        <div className="container-proteccion">
        <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
        <div className="productos-protección-esta">
            <div className="container-producto-estaciones"><img src={combustibles} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GNC</h4><p className="p-estaciones1">Estación de gas natural<br></br> comprimido</p></div></div>
            <div className="container-producto-estaciones"><img src={boxes} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">BOXES</h4><p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p></div></div>
            <div className="container-producto-estaciones"><img src={tiendafull} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">TIENDA FULL</h4><p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p></div></div>
            <div className="container-producto-estaciones"><img src={accesorios} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ACCESORIOS</h4><p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p></div></div>
            <div className="container-producto-estaciones"><img src={gasenvasado} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GAS ENVASADO</h4><p className="p-estaciones1">Venta de gas envasado</p></div></div>
            
        </div>
        </div>
        </div>

        <div className="banner-estacion2"></div>   

        <div className="container-estaciones">
            <div className="title-txt-estaciones">
                <h2 className="estaciones-title">EESS Las Lajitas</h2>   
                <hr className="linea-estaciones"></hr>
                <p className="p-estaciones1"> EESS Las Lajitas es el  <span className="txt-empresa-spanEst">primer punto de venta</span> de Combustibles del Norte<span className="txt-empresa-spanEst"> fuera de la ciudad de Salta</span>, ubicada en el municipio de Las Lajitas, Departamento Anta. Surge como respuesta a los exigentes clientes de esa zona en el año 1996. 
                <br></br>
                <br></br>
                Trabajamos día a día para lograr distinguirnos por<span className="txt-empresa-spanEst">la calidad de gestión, la excelencia en la imagen y un servicio excepcional</span>más precisas para cada uno de sus campos, la mejor <span className="txt-empresa-spanEst">calidad</span> de productos y el servicio de<span className="txt-empresa-spanEst"> excelencia</span> que nos caracteriza.
                </p>
                </div>
                <img src={estacionesimg1} alt="" className="fotobotonesEst"/>
        
        
        </div>     
        
        
        <div className="container-dibujitos">
                <h2 className="estaciones-title">Nuestros productos y servicios</h2>   
                <hr className="linea-est"></hr>
        <div className="container-proteccion">
        <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
        <div className="productos-protección-esta">
            <div className="container-producto-estaciones"><img src={combustibles} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">COMBUSTIBLES</h4><p className="p-estaciones1">Con surtidores de auto <br></br>caudal para camiones</p></div></div>
            <div className="container-producto-estaciones"><img src={boxes} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">BOXES</h4><p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p></div></div>
            <div className="container-producto-estaciones"><img src={tiendafull} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">TIENDA FULL</h4><p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p></div></div>
            <div className="container-producto-estaciones"><img src={accesorios} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ACCESORIOS</h4><p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p></div></div>
            <div className="container-producto-estaciones"><img src={gasenvasado} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GAS ENVASADO</h4><p className="p-estaciones1">Venta de gas envasado</p></div></div>
            <div className="container-producto-estaciones"><img src={estacionamiento} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ESTACIONAMIENTO</h4><p className="p-estaciones1">Estacionamiento <br></br>para transportistas, entre otros</p></div></div>
        </div>
        </div>
        </div>

    

    <div className="banner-estacion1"></div>    

    
        <div className="container-txt-cardEst">
        <h2 className="estaciones-title">Contacto</h2>
        <hr className="linea-est"></hr>
        <p className="txt-est-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
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