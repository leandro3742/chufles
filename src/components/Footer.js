import React from 'react';
import "./styles/Footer.css";
import logo_wpp from "./img/wpp_grande.svg";
import phone from "./img/phone_grande.svg";

class Footer extends React.Component{
    render(){
    return (
    <React.Fragment>
    <div className="Footer">

        <div className="wpp">
            <img className="logos wpp" src={logo_wpp} alt=""/>
            <span className="numero-wpp">099402315</span>
        </div>
        
        <div className="phone">
            <img className="logos phone" src={phone} alt=""/>
            <span className="numero-phone" >4332 0505</span>
        </div>

    </div>
    <div className="linea"></div>
    </React.Fragment>
    );
    }
}
export default Footer;