import React from 'react';
import './styles/Pruebas.css';
import Footer from '../components/Footer';
import { myArray, preguntas, respuestas, respuestas_correctas } from '../components/datos.js';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
let link = "Examenes";
let array_de_respuestas = [];
let respuestas_bien = -1;
array_de_respuestas.length = 31;

export function comprobar(i, RESPUESTA){
    
    if(RESPUESTA === respuestas_correctas[i]){
        respuestas_bien++;
        console.log("Bien");
    }
    else{
        console.log("MAL");
    }
    console.log("Respuestas bien: "+respuestas_bien);
    if(i === 29){
        if(respuestas_bien >= 1){
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
    }
}


export default class Pruebas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          i: 0,
          boton: "Comprobar",
          me_voy: false,
          respues : [],
          RESPUESTA : "",
        };
        this.state.respues.length = 31;
    }
    avanzar = () =>{
        this.setState({i : this.state.i+1});
        if(this.state.i === 28)
            this.setState({ me_voy: true });
        if(this.state.i === 29){
            this.setState({ 
                boton : "Finalizar", 
                respues : array_de_respuestas
            });
        }  
    }
    
    render(){
        return(
            <div className="Pruebas">
                <span className="pregunta">{preguntas[myArray[this.state.i]]}</span>
                <div className="respuestas-container">
                    {/* <button onClick={this.avanzar}> {this.state.i}</button> */}
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][2])} className="respuestas"> {respuestas[myArray[this.state.i]][2]} </button>
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][1])} className="respuestas"> {respuestas[myArray[this.state.i]][1]} </button>
                    <button onClick={()=>this.state.RESPUESTA =(respuestas[myArray[this.state.i]][0])} className="respuestas"> {respuestas[myArray[this.state.i]][0]} </button>
                    <button onClick={()=>this.state.RESPUESTA = (respuestas[myArray[this.state.i]][3])} className="respuestas"> {respuestas[myArray[this.state.i]][3]} </button>

                    {/* <button onClick={()=>guardar_respuesta(respuestas[myArray[this.state.i]][2], this.state.i)} className="respuestas"> {respuestas[myArray[this.state.i]][2]} </button>
                    <button onClick={()=>guardar_respuesta(respuestas[myArray[this.state.i]][1], this.state.i)} className="respuestas"> {respuestas[myArray[this.state.i]][1]} </button>
                    <button onClick={()=>guardar_respuesta(respuestas[myArray[this.state.i]][0], this.state.i)} className="respuestas"> {respuestas[myArray[this.state.i]][0]} </button>
                    <button onClick={()=>guardar_respuesta(respuestas[myArray[this.state.i]][3], this.state.i)} className="respuestas"> {respuestas[myArray[this.state.i]][3]} </button> */}
                    
                    <button onClick={this.avanzar} className="boton"><Link onClick={()=>comprobar(this.state.i, this.state.RESPUESTA)} to={link} > {this.state.boton} </Link></button>
                </div>
                <Footer className="Footer"/>
            </div>     
        );
    }
}