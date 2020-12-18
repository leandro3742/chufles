import React from 'react';
import './styles/Pruebas.css';
import { myArray, preguntas } from '../components/datos.js';
import { comprobar } from './Pruebas';

let a = comprobar();
console.log("PERRISSSSSSS:   " + a);
export default class Final extends React.Component {
    
    render(){
        return(
            <div className="Pruebas">
                <h6 className="pregunta-f">{preguntas[myArray[0]]}</h6>
                <h6 className="pregunta-f">{preguntas[myArray[1]]}</h6>
                <h6 className="pregunta-f">{preguntas[myArray[2]]}</h6>
                <h6 className="pregunta-f">{preguntas[myArray[3]]}</h6>
            </div>
        );
    }
}