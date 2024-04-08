import React from "react";
import { FaUser } from "react-icons/fa6";
import Logo from "./Img/Logo.png"
import './MenuNavegacion.css'

class MenuSuperior extends React.Component{
    render(){
        return(
            <div class = "superior">
                <div class = "logo">
                    <img src={Logo} alt="Logo" class="ImgLogo"></img>
                </div>
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