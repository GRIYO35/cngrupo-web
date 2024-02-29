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


const Navinfo = () => {
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
       // Llamamos a la función una vez al montar el componente
       handleResize();

       window.addEventListener("resize", handleResize);
   
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);

  /*const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);

  let timer;
  const delay = 100; // tiempo de retraso en milisegundos

  // Cuando el mouse entra, limpiamos el temporizador si existe
  const handleMouseEnter1 = () => {
      if (timer) clearTimeout(timer);
      setSubMenuOpen1(true);
  };

  // Cuando el mouse sale, iniciamos un temporizador que cerrará el menú después del retraso
  const handleMouseLeave1 = () => {
      timer = setTimeout(() => setSubMenuOpen1(false), delay);
  };

  // Repite lo mismo para los otros submenús
  const handleMouseEnter2 = () => {
      if (timer) clearTimeout(timer);
      setSubMenuOpen2(true);
  };

  const handleMouseLeave2 = () => {
      timer = setTimeout(() => setSubMenuOpen2(false), delay);
  };

  const handleMouseEnter3 = () => {
      if (timer) clearTimeout(timer);
      setSubMenuOpen3(true);
  };

  const handleMouseLeave3 = () => {
      timer = setTimeout(() => setSubMenuOpen3(false), delay);
  };*/

  return (
      <div className="home-container">
        <div className="home-containerQuienes">
        <NAVBAR></NAVBAR>
          {/*<div className='nav-container'>
                <img src={Logo} alt="" className='logo' />
                <nav className='nav-chapa'>
                    <div className={`navbar-links-container ${isOpen && "open"}`}>
                        <ul className="ul-nav">
                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                <Link className="li" to="/">NUESTRA EMPRESA</Link>
                                {isSubMenuOpen1 && (
                                    <ul className="ul-menu">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">¿Quiénes somos?</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/vision">Visión & misión</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/ejes">Ejes de compromiso</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/historia">Historia</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/info">Info impositiva</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                <Link className="li" to="/mecanica">NUESTROS NEGOCIOS</Link>
                                {isSubMenuOpen2 && (
                                    <ul className="ul-menu2">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">Oil & Gas</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/vision">Agro</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/ejes">Minería</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                                <Link className="li" to="/chapaypintura">TRABAJÁ EN CN GRUPO</Link>
                                {isSubMenuOpen3 && (
                                    <ul className="ul-menu3">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">Capital humano</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa"><Link className="li" to="/4x4">CONTACTO</Link></li>
                            <li className="link-nav-chapab">
                    <div className="botones">
                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("es");
                          document
                            .querySelectorAll(".language-button")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-button"
                      >
                        ES
                      </button>

                      <button
                        onClick={(event) => {
                          i18next.changeLanguage("en");
                          document
                            .querySelectorAll(".language-button")
                            .forEach((btn) => btn.classList.remove("active"));
                          event.target.classList.add("active");
                        }}
                        className="language-button"
                      >
                        EN
                      </button>
                    </div>
                  </li>
                        </ul>

                    </div>
                    <div className={`toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span className="span-nav"></span>
                        <span className="span-nav"></span>
                        <span className="span-nav"></span>

                        <body className={isOpen ? 'overlay' : ''}></body>
                    </div>
                </nav>
            
                      </div>*/}

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
              {/*<h2 className="quienes-title2">Nuestro equipo</h2>   
              <hr className="linea-quienes"></hr>*/}
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
            <p className="txt-foo">© 2023 CN Grupo - Todos los derechos reservados</p>
          </div>
        </div>
    </div>
  
  )
}

export default Navinfo