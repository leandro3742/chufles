import React from 'react';
import './styles/MaterialTeorico.css';
import Footer from '../components/Footer';
import pdf from '../components/img/pdf.svg';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Material_Teorico">
                <span className="Titulo">Guia nacional de conducción</span>
                <div className="container-pdf">
                        <a className="contenedor-pdf uno" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_84c6b7015508415092af8098c5b4cc12.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/>
                            <span className="texto-pdf">Teórico de autos y motos</span>
                        </a>

                        <a className="contenedor-pdf" href="http://www.imcanelones.gub.uy/sites/all/themes/imc/archivos/ManualProfesional.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/> 
                            <span className="texto-pdf">Teórico de licencia profesional</span>
                        </a>
                </div>
                
                <span className="Titulo dos">
                    Aquí puedes encontrar material<br />
                    teórico para estudiar
                </span>
                <div className="container-pdf-2">
                        <a className="contenedor-pdf-2 arriba" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f41003ded5a94d569d19740b6498e1b2.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/>
                            <span className="texto-pdf-2">Ley N° 18.191</span>
                        </a>

                        <a className="contenedor-pdf-2 arriba" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f67420cb588b44819fcb8095c85bb680.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/> 
                            <span className="texto-pdf-2">Ley N° 19.172</span>
                        </a>

                        <a className="contenedor-pdf-2 arriba" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_3a734de49fc5483c9e35a0a2a73593ff.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/>
                            <span className="texto-pdf-2">Ley N° 190.061</span>
                        </a>

                        <a className="contenedor-pdf-2 abajo" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_c2ad50db107749f9b2f4eea4dcc25249.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/> 
                            <span className="texto-pdf-2">Señales de tránsito</span>
                        </a>

                        <a className="contenedor-pdf-2 abajo" href="http://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_b82bc87ea0884b12894255d390c056b5.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/>
                            <span className="texto-pdf-2">Regulación de circulacion vial</span>
                        </a>

                        <a className="contenedor-pdf-2 abajo" href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_649ad3be92d848c2aa478a6046897ca2.pdf" alt="">
                            <img className="pdf" src={pdf} alt=""/> 
                            <span className="texto-pdf-2">Ley de faltas</span>
                        </a>

                </div>
                <Footer />
            </div>
        );
    }
}