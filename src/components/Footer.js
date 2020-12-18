import React from 'react';
import "./styles/Footer.css";
import footer from "./img/Group 7.png";

class Footer extends React.Component{
    render(){
    return (
    <div className="Footer">
        <img src={footer} alt=""/>
    </div>
    );
    }
}
export default Footer;