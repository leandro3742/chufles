import React from 'react';
import './styles/Requisitos.css';
import Footer from '../components/Footer';
import lista from '../components/img/lista_requisitos.png';
import lista_profesional from '../components/img/lista_profesional.png';

export default class Requisitos extends React.Component {
    render(){
        return(
            <React.Fragment>
            <div className="Requisitos">
                <span className="titulo Requisitos">
                Requisitos para sacar tu licencia<br /> 
                por primera vez
                </span>
                <div className="lista-contenedor">
                    <img className="lista" src={lista} alt="" />
                </div>
                <span className="titulo Requisitos">
                Requisitos para sacar tu licencia<br /> 
                profesional
                </span>
                <div className="lista-contenedor">
                    <img className="lista" src={lista_profesional} alt="" />
                </div>
            </div>
            <Footer />
            </React.Fragment>

        );
    }
}