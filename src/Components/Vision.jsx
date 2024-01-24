import Vector1 from "../Assets/vector--.png"
import Vector2 from "../Assets/circulito-removebg-preview.png"
import VectorCard from "../Assets/vec1.png"
import VectorCard1 from "../Assets/vec2.png"
import VectorCard2 from "../Assets/vec3.png"
import VectorCard3 from "../Assets/vec4.png"
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../Assets/cngrupoLOGOwhite.png"
import circulo from '../Assets/Ellipse 15.png'
import manoarriba from '../Assets/Group (1).svg'
import flechita from '../Assets/Group (2).svg'
import manos from '../Assets/Mask group.svg'
import mesaNuevo from '../Assets/IconoNuevo.svg';
import mesa from '../Assets/Mesa de trabajo 5.svg'
import NuevoIcono from '../Assets/grupitonuevo.svg';
import IconoInicial from '../Assets/Group.svg';
import ManoArribaNuevo from '../Assets/manoarribanuevo.svg';
import FlechitaNuevo from '../Assets/flechitanuevo.svg';
import ManosNuevo from '../Assets/manosnuevo.svg';
import { useTranslation } from "react-i18next";
import Tarjeta from "./Tarjeta"
import NAVBAR from "./NavBar"


const Navvision = () => {
    const [t, i18next] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
    const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
    const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);
    const [texto, setTexto] = useState('Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.');
    const [titulo, setTitulo] = useState('Respeto');
    const [icono, setIcono] = useState(NuevoIcono);
    const [icono1, setIcono1] = useState(mesaNuevo);
    const [icono2, setIcono2] = useState(manos);
    const [icono3, setIcono3] = useState(flechita);
    const [icono4, setIcono4] = useState(manoarriba);
    const [colorFondo, setColorFondo] = useState('#3A93A4');
    const [colorFondoManos, setColorFondoManos] = useState('white');
    const [colorFondoMesa,setColorFondoMesa] = useState('white');
    const [colorFondoFlecha, setColorFondoFlecha] = useState('white');
    const [colorFondoManoArriba, setColorFondoManoArriba] = useState('white');

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

    const cambiarContenido = (nuevoTexto, nuevoTitulo) => {
        setTexto(nuevoTexto);
        setTitulo(nuevoTitulo);
        if (nuevoTitulo === "Respeto") {
          setColorFondoManos("white");
          setColorFondo ('#3A93A4');
          setColorFondoMesa ("white");
          setColorFondoFlecha ("white")
          setColorFondoManoArriba ("white")
          setIcono(NuevoIcono)
          setIcono1(mesaNuevo)
          setIcono2(manos)
          setIcono3(flechita)
          setIcono4(manoarriba)
        } 
        if (nuevoTitulo === "Entusiasmo") {
          setColorFondoManos("white");
          setColorFondo ('white');
          setColorFondoMesa ('#3A93A4')
          setColorFondoFlecha ("white")
          setColorFondoManoArriba ("white")
          setIcono(IconoInicial)
          setIcono1 (mesa)
          setIcono2(manos)
          setIcono3(flechita)
          setIcono4(manoarriba)
        }
        if (nuevoTitulo === "Profesionalismo") {
          setColorFondoManos("#3A93A4");
          setColorFondo ('white');
          setColorFondoMesa ('white')
          setColorFondoFlecha ("white")
          setColorFondoManoArriba ("white")
          setIcono(IconoInicial)
          setIcono1 (mesaNuevo)
          setIcono2(ManosNuevo)
          setIcono3(flechita)
          setIcono4(manoarriba)
        }
        if (nuevoTitulo === "Solidaridad") {
          setColorFondoManos("white");
          setColorFondo ('white');
          setColorFondoMesa ('white')
          setColorFondoFlecha ("#3A93A4")
          setColorFondoManoArriba ("white")
          setIcono(IconoInicial)
          setIcono1 (mesaNuevo)
          setIcono2(manos)
          setIcono3(FlechitaNuevo)
          setIcono4(manoarriba)
        }
        if (nuevoTitulo === "Flexibilidad") {
          setColorFondoManos("white");
          setColorFondo ('white');
          setColorFondoMesa ('white')
          setColorFondoFlecha ("white")
          setColorFondoManoArriba ("#3A93A4")
          setIcono(IconoInicial)
          setIcono1 (mesaNuevo)
          setIcono2(manos)
          setIcono3(flechita)
          setIcono4(ManoArribaNuevo)
        }
      }
    

    

    return (
        <div className="home-container">
        <div className="home-container2">
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
        <div className="txt-redes1">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p></div>
              <div className="cuadros-vectores">
                <div className="container-vector-txt">
                    <h2 className="title-vector">Visión</h2>
                    <p className="p-vector">"Crecer y hacer crecer."</p>
                </div>
                <div className="container-vector-txt">
                    <h2 className="title-vector1">Misión</h2>
                    <p className="p-vector">Dar soluciones comerciales e innovadoras adaptadas a cada necesidad, construyendo relaciones a largo plazo.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="circulo-txt">
          <div className="circulo-txt1">
            <div className="Circulo-Valores">
              <div className="cositos">
                <img src={circulo} alt="" className="circle"/>   
                <img src={icono} alt="" className="svg-vision2" style={{ backgroundColor: colorFondo }} onMouseOver={() => { cambiarContenido('Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Respeto'); }} />
                <img src={icono4} alt="" className="svg-vision4" style={{ backgroundColor: colorFondoManoArriba }} onMouseOver={() => { cambiarContenido('Nos adaptamos y mantenemos abierta nuestra mente para conocer cosas nuevas y actuar en diferentes circunstancias, modificando nuestro comportamientos para mejorar nuestros acuerdos, enendimiento y convivencia con los demas.','Flexibilidad'); }} />
                <img src={icono3} alt="" className="svg-vision5" style={{ backgroundColor: colorFondoFlecha }} onMouseOver={() =>  { cambiarContenido('Estamos convencidos que el crecimiento es posible solo si mantenemos una relacion de cooperacion permanente entre nosotros y con nuestro entorno.','Solidaridad'); }} />
                <img src={icono2} alt="" className="svg-vision3" style={{ backgroundColor: colorFondoManos }} onMouseOver={() =>  { cambiarContenido('Nos comprometemos a lograr altos estandares de calidad y somos exigentes con nuestros cumplimientos, capitalizamos la experiencia y el conocimiento especifico que nos impulse hacia una contribucion responsable y cada vez mas efectiva.','Profesionalismo'); }} />
                <img src={icono1} alt="" className="svg-vision1" style={{ backgroundColor: colorFondoMesa }} onMouseOver={() => { cambiarContenido('Trabajamos con pasion, compromiso y coraje, buscando proactivamente oportunidades de aprender, de crecer e innovar.','Entusiasmo'); }} />
                <h2 className="txt-cir">El cliente en el centro</h2>
              </div> 
           </div> 
           <div className="Txt-Valores">
             <div className="titulo-p-circulo">
               <h2 className="circulo-titulo">Valores</h2>
               <hr class="mi-linea-carrusel"></hr>
               <h2 className="circulo-subtitulo" >{titulo}</h2>
               <p className="p-circulo">{texto}</p>
             </div> 
           </div>
          </div>
       </div>

        <div className="banner-img"></div>
        
        <div className="ejes-compromiso">
        <h2 className="circulo-titulo">Ejes de compromiso</h2>
        <hr class="mi-linea-carrusel"></hr> 
        <Tarjeta></Tarjeta>
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

export default Navvision