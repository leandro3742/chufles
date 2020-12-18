// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import React from 'react';
import './styles/MaterialTeorico.css';
import Footer from '../components/Footer';
import uno from '../components/img/(1).png';
import dos from '../components/img/(2).png';
import tres from '../components/img/(3).png';
import cuatro from '../components/img/(4).png';
import cinco from '../components/img/(5).png';
import seis from '../components/img/(6).png';
import siete from '../components/img/(7).png';
import ocho from '../components/img/(8).png';


export default class Home extends React.Component {
    render(){
        return(
            <div className="Material_Teorico">
                <span className="Titulo">Guia nacional de conducción</span>
                <div className="container">
                    <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_84c6b7015508415092af8098c5b4cc12.pdf" alt=""> <img className="pdf" src={uno} alt=""/> </a>
                    <a href="http://www.imcanelones.gub.uy/sites/all/themes/imc/archivos/ManualProfesional.pdf" alt=""> <img className="pdf" src={dos} alt="" /></a>
                </div>
                
                <span className="Titulo dos">
                    Aqui puedes encontrar material<br />
                    teórico para estudiar
                </span>
                <div className="contenedor">
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f41003ded5a94d569d19740b6498e1b2.pdf" alt=""> <img className="pdf" src={tres} alt=""/> </a>
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f67420cb588b44819fcb8095c85bb680.pdf" alt=""> <img className="pdf chico" src={cuatro} alt="" /></a>
             
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_3a734de49fc5483c9e35a0a2a73593ff.pdf" alt=""> <img className="pdf" src={cinco} alt=""/> </a>
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_c2ad50db107749f9b2f4eea4dcc25249.pdf"alt="" > <img className="pdf" src={seis} alt="" /></a>
            
                        <a href="http://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_b82bc87ea0884b12894255d390c056b5.pdf" alt=""> <img className="pdf" src={siete} alt=""/> </a>
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_649ad3be92d848c2aa478a6046897ca2.pdf" alt=""> <img className="pdf chico" src={ocho} alt="" /></a>
                </div>
                <Footer />
            </div>
        );
    }
}