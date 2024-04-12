import React, { useState } from "react";
import './RecuperarContra.css'
import Logo from '../Img/LogoGris.png'
import { MdOutlineEmail } from "react-icons/md";
import Fondo from "../components/FondoInicio"
import { Link } from "react-router-dom";

const IniciarSesion = ({onSelect}) => {
    // Estado para mantener el div seleccionado
    const [selectedDiv, setSelectedDiv] = useState('IniciarSesion');

    // Función para manejar el clic en un div del menú
    const handleDivClick = (p) => {
        setSelectedDiv(p); // Actualizar el div seleccionado
        onSelect(p);
        console.log(selectedDiv);
    };

    return (
        <div>
            <Fondo />
            <div className="Recuperar">
                <div className="Logo">
                    <img src={Logo} alt="Logo" className="ImgLogo" />
                </div>
                <div className="Titulo">
                    <p>RECUPERAR CONTRASENA</p>
                </div>
                <div className="Informacion">
                    <p>Introduce tu email y revisa tu buzón de entrada. Comprueba también tu buzón de correo no deseado.</p>
                </div>
                <div className="Correo">
                    <div className="Input">
                        <div className="Icono">
                            <MdOutlineEmail />
                        </div>
                        <input type="text" placeholder="Introduce tu E-Mail" className="nc" />
                    </div>
                </div>
                <div className="Texto">
                    <p>¿Ya tienes cuenta?</p>
                    <p class="Link" onClick={() => handleDivClick('CrearCuenta')}>Acceder</p>
                </div>
                <div className="Boton">
                    <Link to={"/Individual"} style={{ textDecoration: 'none' , cursor:'default'}}>
                        <button className="BotonIniciarSesion">ENVIAR</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default IniciarSesion;