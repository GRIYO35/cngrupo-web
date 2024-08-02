/*import Logo from "../Assets/cngrupoLOGOwhite.png"*/
import React, { useState, useEffect } from "react";
/*import { Link} from "react-router-dom";*/
import fotoellos1 from '../Assets/EDUARDO.png';
import fotoellos4 from '../Assets/261x353 EDUARDO.png';
import fotoellos2 from '../Assets/TOMI.png';
import fotoellos5 from '../Assets/261x353 TOMI.png';
import fotoellos3 from '../Assets/EDU solo.png';
import fotoellos6 from '../Assets/261x353 EDU h.png';
import { useTranslation } from "react-i18next";
import gerentes from '../Assets/gerentes.png';
import gerentes1 from '../Assets/479x279 GERENTES.png';
import NAVBAR from "./NavBarNueva"
import NAVBARMOBILE from "./NavBarMobile";
import "./Quienes.css"


const Quienes = () => {
  // eslint-disable-next-line no-unused-vars
  const [t, i18next] = useTranslation("global");
  /*const [isOpen, setIsOpen] = useState(false);*/
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
          <div className="BarraEscritorio">
          <NAVBAR></NAVBAR>
          </div>
          <div className="BarraMobile">
          <NAVBARMOBILE></NAVBARMOBILE>
          </div>
      <div className="txt-redesQuienes">
           <div className="txt-container-empresaQuienes">
               <div className="linea-titulo">
                   <hr class="mi-lineaQuienes"></hr><p className="nuestra-empresa">{t("li.OUR COMPANY")}</p>
               </div>
               <h2 className={i18next.language === "es" ? "Quienes-title" : "Quienes-titleEN"}>{t("quienes.about us")}</h2>
           </div>
      </div>
      </div>
      <div className="txt-redes-quienes">
          <div className="txt-container-quienes">
             <h2 className="quienes-info-txt"><span className="txt-empresa-spanQuienes">{t("txtQuines.txt1")} </span>
             {t("txtQuines.txt2")} <span className="txt-empresa-spanQuienes"> {t("txtQuines.txt3")} </span> 
             {t("txtQuines.txt4")} <span className="txt-empresa-spanQuienes"> {t("txtQuines.txt5")} </span> 
             {t("txtQuines.txt6")} 
             <br></br>
             <br></br>
             {t("txtQuines.txt7")} <label htmlFor=""></label>
             <span className="txt-empresa-spanQuienes"> {t("txtQuines.txt8")}</span> 
             {t("txtQuines.txt9")}
             </h2>
          </div>
          <div className="gerentes">
            <img src = {currentImage} alt = "Gerentes" className="gerentesMobile"/>
          </div>
      </div>

            <div className='fotosdellos'>
                 <div className='container-fotosdellos'>
                    <div className='foto-txt-quienes'><img src={currentImage1} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">{t("txtDirectorio.txt1")}</p>   
                      <hr className="linea-quienes2"></hr>
                    </div>
                    <div className='foto-txt-quienes'><img src={currentImage2} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">TOMÁS GÓMEZ NAAR</h2><p className="p-quienes1">{t("txtDirectorio.txt2")}</p> 
                      <hr className="linea-quienes2"></hr>
                    </div>
                    <div className='foto-txt-quienes'><img src={currentImage3} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">{t("txtDirectorio.txt3")}</p>  
                      <hr className="linea-quienes2"></hr>
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

export default Quienes