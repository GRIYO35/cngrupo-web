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
    const [texto, setTexto] = useState(`${t('txtRespeto.txt1')} <span class="txt-empresa-spanVis">${t('txtRespeto.txt2')}</span>${t('txtRespeto.txt3')}<span class="txt-empresa-spanVis">${t('txtRespeto.txt4')}</span>${t('txtRespeto.txt5')}`);
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
          switch (nuevoTitulo) {
              case 'Respeto':
              case 'Respect':
                  setColorFondoManos('white');
                  setColorFondo('#3A93A4');
                  setColorFondoMesa('white');
                  setColorFondoFlecha('white');
                  setColorFondoManoArriba('white');
                  setIcono(NuevoIcono);
                  setIcono1(mesaNuevo);
                  setIcono2(manos);
                  setIcono3(flechita);
                  setIcono4(manoarriba);
                  break;
              case 'Entusiasmo':
              case 'Enthusiasm':
                  setColorFondoManos('white');
                  setColorFondo('white');
                  setColorFondoMesa('#3A93A4');
                  setColorFondoFlecha('white');
                  setColorFondoManoArriba('white');
                  setIcono(IconoInicial);
                  setIcono1(mesa);
                  setIcono2(manos);
                  setIcono3(flechita);
                  setIcono4(manoarriba);
                  break;
              case 'Profesionalismo':
              case 'Professionalism':
                  setColorFondoManos('#3A93A4');
                  setColorFondo('white');
                  setColorFondoMesa('white');
                  setColorFondoFlecha('white');
                  setColorFondoManoArriba('white');
                  setIcono(IconoInicial);
                  setIcono1(mesaNuevo);
                  setIcono2(ManosNuevo);
                  setIcono3(flechita);
                  setIcono4(manoarriba);
                  break;
              case 'Solidaridad':
              case 'Solidarity':
                  setColorFondoManos('white');
                  setColorFondo('white');
                  setColorFondoMesa('white');
                  setColorFondoFlecha('#3A93A4');
                  setColorFondoManoArriba('white');
                  setIcono(IconoInicial);
                  setIcono1(mesaNuevo);
                  setIcono2(manos);
                  setIcono3(FlechitaNuevo);
                  setIcono4(manoarriba);
                  break;
              case 'Flexibilidad':
              case 'Flexibility':
                  setColorFondoManos('white');
                  setColorFondo('white');
                  setColorFondoMesa('white');
                  setColorFondoFlecha('white');
                  setColorFondoManoArriba('#3A93A4');
                  setIcono(IconoInicial);
                  setIcono1(mesaNuevo);
                  setIcono2(manos);
                  setIcono3(flechita);
                  setIcono4(ManoArribaNuevo);
                  break;
              default:
                  break;
          }
        };
    

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
                <img
                                src={icono}
                                alt=""
                                className="svg-vision2"
                                style={{ backgroundColor: colorFondo }}
                                onMouseOver={() => {
                                  cambiarContenido(
                                    `${t('txtRespeto.txt1')} <span class="txt-empresa-spanVis">${t('txtRespeto.txt2')}</span>${t('txtRespeto.txt3')}<span class="txt-empresa-spanVis">${t('txtRespeto.txt4')}</span>${t('txtRespeto.txt5')}`,
                                    t('txtCliente.txt3')
                                );
                                
                                }}
                />
                <img
                                src={icono4}
                                alt=""
                                className="svg-vision4"
                                style={{ backgroundColor: colorFondoManoArriba }}
                                onMouseOver={() => {
                                  cambiarContenido(
                                    `${t('txtFlexibilidad.txt1')}<span class="txt-empresa-spanVis">${t('txtFlexibilidad.txt2')}</span>${t('txtFlexibilidad.txt3')}<span class="txt-empresa-spanVis">${t('txtFlexibilidad.txt4')}</span>${t('txtFlexibilidad.txt5')}<span class="txt-empresa-spanVis">${t('txtFlexibilidad.txt6')}</span>${t('txtFlexibilidad.txt7')}`,
                                    t("txtCliente.txt4")
                                );
                                
                                }}
                />
                <img
                                src={icono3}
                                alt=""
                                className="svg-vision5"
                                style={{ backgroundColor: colorFondoFlecha }}
                                onMouseOver={() => {
                                  cambiarContenido(
                                    `${t('txtSolidaridad.txt1')}<span class="txt-empresa-spanVis">${t('txtSolidaridad.txt2')}</span>${t('txtSolidaridad.txt3')}<span class="txt-empresa-spanVis">${t('txtSolidaridad.txt4')}</span>`,
                                    t("txtCliente.txt5")
                                );
                                
                                }}
                />
                <img
                                src={icono2}
                                alt=""
                                className="svg-vision3"
                                style={{ backgroundColor: colorFondoManos }}
                                onMouseOver={() => {
                                  cambiarContenido(
                                    `${t('txtProfesionalismo.txt1')}<span class="txt-empresa-spanVis">${t('txtProfesionalismo.txt2')}</span>${t('txtProfesionalismo.txt3')}<span class="txt-empresa-spanVis">${t('txtProfesionalismo.txt4')}</span>${t('txtProfesionalismo.txt5')}<span class="txt-empresa-spanVis">${t('txtProfesionalismo.txt6')}</span>${t('txtProfesionalismo.txt7')}`,
                                    t("txtCliente.txt6")
                                );
                                
                                }}
                />
                <img
                                src={icono1}
                                alt=""
                                className="svg-vision1"
                                style={{ backgroundColor: colorFondoMesa }}
                                onMouseOver={() => {
                                  cambiarContenido(
                                    `${t('txtEntusiasmo.txt1')}<span class="txt-empresa-spanVis">${t('txtEntusiasmo.txt4')}</span>${t('txtEntusiasmo.txt3')}<span class="txt-empresa-spanVis">${t('txtEntusiasmo.txt4')}</span>`,
                                    t("txtCliente.txt7")
                                );
                                
                                }}
                />
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