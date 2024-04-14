import React, {useState} from "react";
import { FaUser } from "react-icons/fa6";
import Logo from "../Img/Logo.png"
import './MenuSuperior.css'
import { Link } from "react-router-dom";
import MenuPerfil from "./MenuPerfil";

const MenuSuperiorInicial = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return(
        <div class = "superior">
            <div class = "logo">
                <Link to={"/"} style={{ display: 'flex', alignItems:'center', justifyContent:'left' }}>
                <img src={Logo} alt="Logo" class="ImgLogo"></img>
                </Link>
            </div>
            <div className="Muerto">
                <div className="Pestana" id="SeleccionPestana">
                    <p>ANÁLISIS</p>
                    <div className="Triangulo">
                    </div>
                </div>
                <div className="Pestana">
                    <p>COMPARACIÓN</p>
                    <div className="Triangulo">
                    </div>
                </div>
            </div>
            <div class = "BotonPerfil">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div class="BotonCirculo" >
                        <FaUser class="UserIcon"/>
                    </div>
                    {isDropdownVisible && <MenuPerfil />}
                </div>
            </div>
        </div>
    )
}

export default MenuSuperiorInicial;

