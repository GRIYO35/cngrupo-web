/*import Logo from "../Assets/cngrupoLOGOwhite.png"*/
import React, { useState, useEffect } from "react";
/*import { Link} from "react-router-dom";*/
import fotoellos1 from '../Assets/EDUARDO.png';
import fotoellos4 from '../Assets/261x353 EDUARDO.png';
import fotoellos2 from '../Assets/TOMI.png';
import fotoellos5 from '../Assets/261x353 TOMI.png';
import fotoellos3 from '../Assets/EDU solo.png';
import fotoellos6 from '../Assets/261x353 EDU h.png';
/*import { useTranslation } from "react-i18next";*/
import gerentes from '../Assets/gerentes.png';
import gerentes1 from '../Assets/479x279 GERENTES.png';
import NAVBAR from "./NavBar"
import "./Quienes.css"


const Quienes = () => {
  /*const [t, i18next] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);*/
  const [currentImage, setCurrentImage] = useState(gerentes);
  const [currentImage1, setCurrentImage1] = useState(fotoellos1);
  const [currentImage2, setCurrentImage2] = useState(fotoellos2);
  const [currentImage3, setCurrentImage3] = useState(fotoellos3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1919) {
        setCurrentImage(gerentes);
      } else {
        setCurrentImage(gerentes1);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage1(fotoellos4);
      } else {
        setCurrentImage1(fotoellos1);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage2(fotoellos5);
      } else {
        setCurrentImage2(fotoellos2);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage3(fotoellos6);
      } else {
        setCurrentImage3(fotoellos3);
      }
    };
       handleResize();

       window.addEventListener("resize", handleResize);
   
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);


  return (
      <div className="home-container">
        <div className="home-containerQuienes">
        <NAVBAR></NAVBAR>
      <div className="txt-redesQuienes">
           <div className="txt-container-empresaQuienes">
               <div className="linea-titulo">
                   <hr class="mi-lineaQuienes"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p>
               </div>
               <h2 className="Quienes-title">QUIÉNES SOMOS</h2>
           </div>
      </div>
      </div>
      <div className="txt-redes-quienes">
          <div className="txt-container-quienes">
             <h2 className="quienes-info-txt"><span className="txt-empresa-spanQuienes">CN GRUPO </span>
             nace como una empresa familiar y cuenta con más <span className="txt-empresa-spanQuienes"> 35 años </span> 
             de trayectoria, mas de <span className="txt-empresa-spanQuienes"> 250 colaboradores </span> y 
             <span className="txt-empresa-spanQuienes"> 6 bases operativas </span> 
             distribuidas en puntos estratégicos de Salta y norte de Chile. 
             <br></br>
             <br></br>
             En el transcurso de nuestro desarrollo empresario hemos ido diversificando negocios, apostando siempre a <label htmlFor=""></label>
             <span className="txt-empresa-spanQuienes"> innovación</span>, al <span className="txt-empresa-spanQuienes"> desarrollo profesional </span> 
             de nuestros equipos y a las relaciones estratégicas con nuestros proveedores, clientes y comunidad.
             </h2>
          </div>
          <div className="gerentes">
            <img src = {currentImage} alt = "Gerentes"/>
          </div>
      </div>

            <div className='fotosdellos'>
                 <div className='container-fotosdellos'>
                    <div className='foto-txt-quienes'><img src={currentImage1} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">Fundador y CEO de CN Grupo</p>   
                      <hr className="linea-quienes2"></hr>
                    </div>
                    <div className='foto-txt-quienes'><img src={currentImage2} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">TOMÁS GÓMEZ NAAR</h2><p className="p-quienes1">Director de Negocios</p> 
                      <hr className="linea-quienes2"></hr>
                    </div>
                    <div className='foto-txt-quienes'><img src={currentImage3} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">Director de Áreas Staff</p>  
                      <hr className="linea-quienes2"></hr>
                    </div>
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

export default Quienes