// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import React from 'react';
import './styles/Home.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
               <Banner /> 
               <span className="titulos">Quienes somos?</span>
               <span className="texto">
                    Chufle's es una escuela de choferes con
                    27 años de enseñanza.Contamos con
                    vehículos con toda la garantía y de ultima
                    generación. Nos encontramos en la ciudad
                    de Canelones, y llegamos hasta
                    Santa Rosa, Cerrillos, Progreso, San Jacinto.
                </span>

                <span className="titulos">Nuestra meta</span>
                <span className="texto">
                    La meta es formar un conductor seguro y 
                    responsable de las decisiones que  tendrá que 
                    tomar, con un buen conocimiento del vehículo y
                    lo mismo en cuanto a reglamentación (claridad 
                    ante sus derechos y deberes), siempre desde 
                    el marco de prevención deaccidentes.
                </span>

                <span className="titulos">Contamos con:  </span>
                <span className="texto">
                -Practicas (Auto - Moto)
                -Aumento de categoría
                -Clases teóricas (Auto - Moto)
                Brindamos a nuestros clientes y
                alumnos las herramientas, información
                y práctica para que lleguen a ser
                conductores seguros, responsables en
                la sociedad, a conducir con madurez,
                criterio y que sean cuidadosos con la
                vida suya y de los demás.
                ANTE TODO RESPETO POR LA VIDA.
                </span>

                <Footer />
            </div>
        );
    }
}