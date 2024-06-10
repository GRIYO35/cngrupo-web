import React from 'react';
import Home from './Home';
import Vision from './Vision';
import { Routes, Route } from 'react-router-dom';
import Historia from './Historia';
import Info from './Infoimpo';
import Logistica from './Logistica';
import Mollar from './Mollar';
import Neca from './Neca';
import Gasdelnorte from './Gasdelnorte';
import Ccnchile from './Ccnchile';
import Combustiblesdelnorte from './Combustiblesdelnorte';
import Plantaguemes from './Plantaguemes';
import Estaciones from './Estaciones';
import Quienes from './Quienes';
import Contacto from './Contacto';
import Navbar from './NavBar';
import RRHH from './CapitalHumano';

const Myroutes = () => {
  return (
    <div>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/vision" element={<Vision />} />
         <Route path="/historia" element={<Historia />} /> 
         <Route path="/info" element={<Info />} /> 
         <Route path="/logistica" element={<Logistica/>} /> 
         <Route path="/mollar" element={<Mollar/>} /> 
         <Route path="/neca" element={<Neca/>} /> 
         <Route path="/gasdelnorte" element={<Gasdelnorte/>} /> 
         <Route path="/ccnchile" element={<Ccnchile/>} /> 
         <Route path="/combustiblesdelnorte" element={<Combustiblesdelnorte/>} /> 
         <Route path="/plantaguemes" element={<Plantaguemes/>} /> 
         <Route path="/estaciones" element={<Estaciones/>} /> 
         <Route path="/quienes" element={<Quienes/>} /> 
         <Route path="/contacto" element={<Contacto/>} /> 
         <Route path="/navbar" element={<Navbar/>} />
         <Route path="/capital" element={<RRHH/>} />
        </Routes>
    </div>
  );
};

export default Myroutes;


