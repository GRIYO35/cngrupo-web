import React, { useState } from "react";
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
import "./Vision.css"


const Vision = () => {
    // eslint-disable-next-line no-unused-vars
    const [t, i18next] = useTranslation("global");
    const [texto, setTexto] = useState('Reconocemos el <span class="txt-empresa-spanVis">valor y los derechos de las personas.</span> Actuamos pensando en el otro, promoviendo relaciones que destaquen <span class="txt-empresa-spanVis">franqueza, reciprocidad y libertad.</span> Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.');
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
        <div className="home-containerVision">
        <NAVBAR></NAVBAR>
        <div className="txt-redesVision">
            <div className="txt-container-empresaVis">
              <div className="linea-titulo">
                <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR COMPANY")}</p>
              </div>
              <div className="cuadros-vectores">
                <div className="container-vector-txt">
                    <h2 className="title-vector">{t("txtTituloVision.txt1")}</h2>
                    <p className="p-vector">"{t("txtTituloVision.txt2")}"</p>
                </div>
                <div className="container-vector-txt">
                    <h2 className="title-vector1">{t("txtTituloVision.txt3")}</h2>
                    <p className="p-vector">{t("txtTituloVision.txt4")}</p>
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
                <img src={icono} alt="" className="svg-vision2" style={{ backgroundColor: colorFondo }} onMouseOver={() => { cambiarContenido('Reconocemos el <span class="txt-empresa-spanVis">valor y los derechos de las personas.</span> Actuamos pensando en el otro, promoviendo relaciones que destaquen <span class="txt-empresa-spanVis">franqueza, reciprocidad y libertad.</span> Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.',t("txtCliente.txt3")); }} />
                <img src={icono4} alt="" className="svg-vision4" style={{ backgroundColor: colorFondoManoArriba }} onMouseOver={() => { cambiarContenido('Nos adaptamos y <span class="txt-empresa-spanVis">mantenemos abierta nuestra mente</span> para conocer cosas nuevas y actuar en diferentes circunstancias, modificando nuestro comportamientos para <span class="txt-empresa-spanVis">mejorar nuestros acuerdos,</span> enendimiento <span class="txt-empresa-spanVis">y convivencia</span> con los demas.',t("txtCliente.txt4")); }} />
                <img src={icono3} alt="" className="svg-vision5" style={{ backgroundColor: colorFondoFlecha }} onMouseOver={() =>  { cambiarContenido('Estamos convencidos que el crecimiento es posible solo si mantenemos una relacion de <span class="txt-empresa-spanVis">cooperacion permanente</span> entre nosotros y con nuestro <span class="txt-empresa-spanVis">entorno.</span>',t("txtCliente.txt5")); }} />
                <img src={icono2} alt="" className="svg-vision3" style={{ backgroundColor: colorFondoManos }} onMouseOver={() =>  { cambiarContenido('Nos comprometemos a lograr altos estandares de <span class="txt-empresa-spanVis">calidad</span> y somos exigentes con nuestros cumplimientos, capitalizamos la experiencia y el conocimiento especifico que nos impulse hacia una contribucion <span class="txt-empresa-spanVis">responsable</span> y cada vez mas <span class="txt-empresa-spanVis">efectiva.</span>',t("txtCliente.txt6")); }} />
                <img src={icono1} alt="" className="svg-vision1" style={{ backgroundColor: colorFondoMesa }} onMouseOver={() => { cambiarContenido('Trabajamos con <span class="txt-empresa-spanVis">pasion, compromiso y coraje,</span> buscando proactivamente oportunidades de <span class="txt-empresa-spanVis">aprender, de crecer e innovar.</span>',t("txtCliente.txt7")); }} />
                <h2 className="txt-cir">{t("txtCliente.txt2")}</h2>
              </div> 
           </div> 
           <div className="Txt-Valores">
             <div className="titulo-p-circulo">
               <h2 className="circulo-titulo">{t("txtCliente.txt1")}</h2>
               <hr class="mi-linea-carrusel"></hr>
               <h2 className="circulo-subtitulo" >{titulo}</h2>
               <p className="p-circulo" dangerouslySetInnerHTML={{ __html: texto }}></p>
             </div> 
           </div>
          </div>
       </div>

        <div className="banner-img"></div>
        
        <div className="ejes-compromiso">
        <h2 className="circulo-titulo">{t("txtEjes.txt1")}</h2>
        <hr class="mi-linea-carrusel"></hr> 
        <Tarjeta></Tarjeta>
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

export default Vision