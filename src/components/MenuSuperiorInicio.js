import React from "react";
import { FaUser } from "react-icons/fa6";
import Logo from "../Img/Logo.png"
import './MenuSuperior.css'
import { Link } from "react-router-dom";

class MenuSuperior extends React.Component{
    render(){
        return(
            <div class = "superior">
                <div class = "logo">
                    <Link to={"/"} style={{ display: 'flex', alignItems:'center', justifyContent:'left' }}>
                    <img src={Logo} alt="Logo" class="ImgLogo"></img>
                    </Link>
                </div>
                <div className="Muerto"></div>
                <div class = "BotonPerfil">
                    <div class="BotonCirculo">
                        <FaUser class="UserIcon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuSuperior;