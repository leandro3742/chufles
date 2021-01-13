import React from 'react';
import './styles/Pruebas.css';
import Footer from '../components/Footer';
import { myArray, preguntas, respuestas, respuestas_correctas } from '../components/datos.js';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

let link = "Examenes";
let respuestas_bien = 0;

function correcto(){
    swal({
        title : "Correcto!!!" ,
        buttons: "siguiente",
        icon : "success"
    }) 
}

function respuesta_mal(respuestas_correctas){
    swal({
        title : "Ops.. La respuesta correcta es: " ,
        text : respuestas_correctas,
        buttons: "Siguiente",
        icon : "error"
    }) 
}
function comprobar(i, RESPUESTA){
    if(RESPUESTA === respuestas_correctas[i]){
        respuestas_bien++;
        console.log("Bien");
        correcto();
    }
    else{
        console.log("MAL");
        respuesta_mal(respuestas_correctas[i]);
    }
}


export default class Pruebas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          i: 0,
          contador: 1,
          boton: "Comprobar",
          respues : [],
          RESPUESTA : "",
        };
        this.state.respues.length = 31;
    }
    avanzar = () =>{
        this.setState({i : this.state.i+1});
        this.setState({contador : this.state.contador+1});
        if(this.state.i === 28){
            this.setState({ 
                boton : "Finalizar", 
            });
        } 
        if(this.state.i === 29){
            this.setState({contador : 30});
            if(respuestas_bien >= 26){
                swal({
                    title : "Feliciataciones!!!" ,
                    text : "Aprobaste el examen" ,
                    buttons: "Cerrar",
                    icon : "success"
                }) 
            }
            else{
                
                swal({
                    title : "Ops... " ,
                    text : "No has llegado al minimo necesario para aprobar" ,
                    buttons: "Cerrar",
                    icon : "error"
                }) 
            }
            this.setState({i : 0});
            this.setState({contador : 1});
            this.setState({boton : "Comprobar"});
            this.setState({respues : []});
            this.setState({RESPUESTA : ""});
        }
    }
    
    render(){
        return(
            <div className="Pruebas">
                <span className="pregunta">{preguntas[myArray[this.state.i]]}</span>

                <div className="respuestas-container">
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][2])} className="respuestas"> {respuestas[myArray[this.state.i]][2]} </button>
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][1])} className="respuestas"> {respuestas[myArray[this.state.i]][1]} </button>
                    <button onClick={()=>this.state.RESPUESTA =(respuestas[myArray[this.state.i]][0])} className="respuestas"> {respuestas[myArray[this.state.i]][0]} </button>
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][3])} className="respuestas"> {respuestas[myArray[this.state.i]][3]} </button>
                    
                    <button onClick={this.avanzar} className="boton"><Link onClick={()=>comprobar(this.state.i, this.state.RESPUESTA)} to={link} > {this.state.boton} </Link></button>
                    <h1>{this.state.contador}/30</h1>
                </div>  
                <Footer className="Footer"/>
            </div>     
        );
    }
}