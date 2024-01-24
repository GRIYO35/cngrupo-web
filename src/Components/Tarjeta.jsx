import React from 'react';
import './Tarjeta.css';  // Asegúrate de ajustar la ruta si es necesario
import VectorCard from "../Assets/vec1.png"
import VectorCard1 from "../Assets/vec2.png"
import VectorCard2 from "../Assets/vec3.png"
import VectorCard3 from "../Assets/vec4.png"

const Tarjeta = () => {
  return (
    <div className='tarjetas'>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2>Equipo</h2>
        <span>Priorizar el desarrollo del talento impulsando el aprendizaje y el liderazgo de nuestro Capital.</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard1} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2>Innovación</h2>
        <span>Apostar a la mejora constante y planificada, priorizando las necesidades de nuestros clientes.</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard2} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2>Sustentabilidad</h2>
        <span>Involucrarse en nuevos hábitos de consumo y producción para ser parte de una revolución sustentable.</span>
      </div>
    </div>
    <div className="tarjeta">
      <div className="contenido-frente">
        <span>
        <img src={VectorCard3} alt="" className="vector-card"/>
        </span>
      </div>
      <div className="contenido-trasero">
        <h2>Futuro</h2>
        <span>Ser una marca capaz de trascender más allá del producto o servicio que ofrece y convertirse en protagonista de un futuro mejor.</span>
      </div>
    </div>
    </div>
  );
};

export default Tarjeta;