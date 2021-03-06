import React from 'react';
import './styles/Examen.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import flecha from '../components/img/flecha.png';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class USUARIO{
    constructor(CI, sexo, nombre){
        this.CI = CI;
        this.sexo = sexo;
        this.nombre = nombre;
    }
}
/********CONSTANTES Y ARREGLOS **********/

const Maira = new USUARIO(26372734, 'f', 'Maira');
const Leandro = new USUARIO(49189815, 'm', 'Leandro');
const Arihana = new USUARIO(50379752, 'f', 'Arihana');

const Sergio = new USUARIO(42020931, 'm', 'Sergio'); //Ingresado: 27/2/21
const Natalia = new USUARIO(32992275, 'f', 'Natalia'); //Natalia Silva ingresada: 3/3/21
const Yaquelin = new USUARIO(43969063, 'f', 'Yaquelin'); //Yaquelin Lisboa ingresada: 9/3/21
const Juan = new USUARIO(18850079, 'm', 'Juan'); //Juan Marcelo Diaz ingresado: 10/3/21
const Asley = new USUARIO(64540941, 'm', 'Asley'); //Asley Avila ingresado: 11/3/21
const Joelin = new USUARIO(50097873, 'f', 'Joelin'); //Joelin Ghan ingresada: 11/3/21
const Melanie = new USUARIO(53120960, 'f', 'Melanie'); // Melanie Sire ingresada: 16/3/21
const Lucas = new USUARIO(55510199, 'm', 'Lucas'); //Lucas Blanco ingresado: 17/3/21
const Facundo = new USUARIO(52939425, 'm', 'Facundo'); //Facundo Martinez ingresado: 16/6/21

const arreglo = [Maira, Leandro, Arihana, Sergio, Natalia, Yaquelin, Juan, Asley, Joelin, Melanie, Lucas, Facundo];

/*******************************************/

let link = "Examen";
let welcome = "";
let existe = false;

function comprobar(user){
    let i = 0;
    while(i < arreglo.length){
        if(arreglo[i].CI != user)
            i++;
        else{
            existe = true;
            if(arreglo[i].sexo === 'f')
                welcome = "Bienvenida";
            else
                welcome = "Bienvenido";

            swal({
                // title : "Inicio de sesion correcto " ,
                text : welcome+" "+arreglo[i].nombre, 
                buttons: "Comenzar ahora",
                icon : "success"
            })

            link = "Examenes";
            break;
        }
    }
    if(existe === false){
        swal({
            title : "Ops... " ,
            text : "Usuario no encontrado" ,
            buttons: "Intentar nuevamente",
            icon : "error"
        })  
    }
}


export default class Examen extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        name: ''
        }
    }
    render(){
        const { name } = this.state;
        
        return(
            <div className="Material_Teorico">
                <Banner />
                <span className="titulo-cedula">Ingrese su cédula</span>
                <div className="contenedor-input">
                    <input type="number" className="input" value={name} onChange={(e) => this.setState({ name: e.target.value })}  />
                </div>
                <div className="contenedor-boton">
                    <button className="ingresar"> 
                        <Link className="link-ingresar" onClick={()=>(comprobar(this.state.name))} to={()=>link} ><span className="comenzar">Comenzar</span></Link>
                    </button>
                </div>
                <span className="titulo-cedula">Si aún no estas registrado contáctenos</span>
                <div className="flechas">
                    <img src={flecha} alt="" className="flecha uno" />
                    <img src={flecha} alt="" className="flecha dos" />
                    <img src={flecha} alt="" className="flecha tres" />
                </div>

                <Footer/>
            </div>
        );
    }
}