import React, {useState} from "react";
import { FaUser } from "react-icons/fa6";
import Logo from "../Img/Logo.png"
import './MenuSuperior.css'
import { Link } from "react-router-dom";
import MenuPerfil from "./MenuPerfil";

const MenuSuperior = () => {
    const [isShown, setIsShown] = useState(false);

    return(
        <div class = "superior">
            <div class = "logo">
                <Link to={"/"} style={{ display: 'flex', alignItems:'center', justifyContent:'left' }}>
                <img src={Logo} alt="Logo" class="ImgLogo"></img>
                </Link>
            </div>
            <div className="Muerto"></div>
            <div class = "BotonPerfil">
                <div class="BotonCirculo" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    <FaUser class="UserIcon"/>
                </div>
                {isShown && <MenuPerfil />}
            </div>
        </div>
    )
}

export default MenuSuperior;