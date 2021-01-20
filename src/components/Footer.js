import React from 'react';
import "./styles/Footer.css";
import logo_wpp from "./img/wpp_grande.svg";
import phone from "./img/phone_grande.svg";

class Footer extends React.Component{
    render(){
    return (
    <React.Fragment>
    <div className="Footer">

        <a href="https://api.whatsapp.com/send?phone=59899402315" className="wpp">
            <img className="logos wpp" src={logo_wpp} alt=""/>
            <span className="numero-wpp">099402315</span>
        </a>
        
        <div className="phone">
            <img className="logos phone" src={phone} alt=""/>
            <span className="numero-phone" >4332 0505</span>
        </div>

    </div>
    <div className="linea"></div>
    <div className="container-copyright">
        <a className="sin-decoracion" href="https://api.whatsapp.com/send?phone=59898361013"><span className="copyright">Copyright-2021 -LM Design</span></a>
    </div>
    </React.Fragment>
    );
    }
}
export default Footer;