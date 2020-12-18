import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/NavBar.css";
import logo from "./img/logo_chufles3.svg";

class NavBar extends React.Component{
    render(){
    return (
    <div className="Header">
        <img className="logo" src   ={logo} alt=""/>
        <div className="menu">
            {/* El # hace que vaya a un lugar en especifico */}
            <Link to="/" className="submenu uno" > <h2 className="submenu titulo">Nosotros</h2> </Link>
            <Link to="Material teorico" className="submenu dos"> <h2 className="submenu titulo">Material teorico</h2> </Link>
            <Link to="Examen" className="submenu tres"> <h2 className="submenu titulo">Examen</h2> </Link>
            <Link to="Requisitos" className="submenu cuatro" > <h2 className="submenu titulo">Requisitos</h2> </Link>
        </div>
    </div>
    );
    }
}
export default NavBar;