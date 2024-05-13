import React from 'react';
import './Tarjeta.css'; 
import VectorCard from "../Assets/vec1.png";
import VectorCard1 from "../Assets/vec2.png";
import VectorCard2 from "../Assets/vec3.png";
import VectorCard3 from "../Assets/vec4.png";
import { useTranslation } from "react-i18next";

const Tarjeta = () => {
// eslint-disable-next-line no-unused-vars
const [t, i18next] = useTranslation("global");

  return (
    <div className='tarjetas'>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2 className='TituloTarjeta'>{t("txtEjes.txt2")}</h2>
        <span className='TextoTarjeta'>{t("txtEjes.txt3")}</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard1} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2 className='TituloTarjeta'>{t("txtEjes.txt4")}</h2>
        <span className='TextoTarjeta'>{t("txtEjes.txt5")}</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard2} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2 className='TituloTarjeta'>{t("txtEjes.txt6")}</h2>
        <span className='TextoTarjeta'>{t("txtEjes.txt7")}</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard3} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2 className='TituloTarjeta'>{t("txtEjes.txt8")}</h2>
        <span className='TextoTarjeta'>{t("txtEjes.txt9")}</span>
      </div>
    </div>
    </div>
  );
};

export default Tarjeta;