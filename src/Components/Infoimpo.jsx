import Logo from '../Assets/cngrupocolor.png'
import React, { useState } from "react";
import {Link} from "react-router-dom";
import logoinf1 from '../Assets/logoinf1.png';
import logoinf2 from '../Assets/logoinf2.png';
import logoinf3 from '../Assets/logoinf3.png';
import logoinf4 from '../Assets/logoinf4.png';
import logoinf5 from '../Assets/logoinf5.png';
import logoinf6 from '../Assets/logoinf6.png';
import NAVBAR from "./NavBarOscura"

const Navinfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
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
  };

  return (
      <div className="home-container">
        <NAVBAR></NAVBAR>
          {/*<div className='nav-container'>
              <img src={Logo} alt="" className='logoInfo' />
              <nav className='nav-chapa'>
                  <div className={`navbar-links-container ${isOpen && "open"}`}>
                      <ul className="ul-navInfo">
                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                              <Link className="li2" to="/">NUESTRA EMPRESA</Link>
                              {isSubMenuOpen1 && (
                                  <ul className={`ul-menu ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li" to="/quiénes">¿Quiénes somos?</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/vision">Visión & misión</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/ejes">Ejes de compromiso</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/historia">Historia</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/info">Info impositiva</Link></li>
                                  </ul>
                              )}
                          </li>
                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                              <Link className="li2" to="/mecanica">NUESTROS NEGOCIOS</Link>
                              {isSubMenuOpen2 && (
                                  <ul className={`ul-menu2 ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li" to="/quiénes">Oil & Gas</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/vision">Agro</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/ejes">Minería</Link></li>
                                  </ul>
                              )}
                          </li>

                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                              <Link className="li2" to="/chapaypintura">TRABAJÁ EN CN GRUPO</Link>
                              {isSubMenuOpen3 && (
                                  <ul className={`ul-menu3 ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li2" to="/quiénes">Capital humano</Link></li>
                                  </ul>
                              )}
                          </li>
                          <li className="link-nav-chapa"><Link className="li2" to="/4x4">CONTACTO</Link></li>
                      </ul>

                  </div>
                  <div className={`toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                      <span className="span-nav"></span>
                      <span className="span-nav"></span>
                      <span className="span-nav"></span>

                      <body className={isOpen ? 'overlay' : ''}></body>
                  </div>
              </nav>
          
      </div> */}

      
    

      
      <div className="txt-redesInfo">
            <div className="txt-container-empresa">
              <div className="linea-titulo2">
            <hr class="mi-linea2"></hr><p className="nuestra-empresa3">NUESTRA EMPRESA</p></div>
            <h2 className="titulo-info">Info impositiva</h2>
            {/*<h2 className="nuestra-info-txt"><span className="txt-empresa-span">CN GRUPO</span> nace como una empresa familiar y cuenta con más <span className="txt-empresa-span"> 35 años </span> de trayectoria, más de <span className="txt-empresa-span"> 35 años </span> más de <span className="txt-empresa-span"> 250 colaboradores </span> y <span className="txt-empresa-span"> 6 bases operativas </span> distribuidas en puntos estratégicos de Salta y norte de Chile. </h2>*/}
        
            </div>
            </div>

            <div className='logos-info'>
              <div className='logo-boton'><img src={logoinf1} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
              <div className='logo-boton'><img src={logoinf2} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
              <div className='logo-boton'><img src={logoinf3} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
              <div className='logo-boton'><img src={logoinf4} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
              <div className='logo-boton'><img src={logoinf5} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
              <div className='logo-boton'><img src={logoinf6} alt="" className='logo-info'/>
              <button className="info-btn">DESCARGAR PDF</button></div>
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