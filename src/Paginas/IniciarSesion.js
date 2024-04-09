import React, { useState } from "react";
import './IniciarSesion.css'
import Logo from '../Img/LogoGris.png'
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io"
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
        <div className="IniciarSesion">
            <div className="Logo">
                <img src={Logo} alt="Logo" className="ImgLogo" />
            </div>
            <div className="Titulo">
                <p>ACCEDER A MI CUENTA</p>
            </div>
            <div className="Correo">
                <div className="TituloInput">
                    <p>Correo</p>
                </div>
                <div className="Input">
                    <div className="Icono">
                        <MdOutlineEmail />
                    </div>
                    <input type="text" placeholder="Introduce tu E-Mail" className="nc" />
                </div>
            </div>
            <div className="Contrasena">
                <div className="TituloInput">
                    <p>Contrasena</p>
                    <p style={{color:'#D86ECC', paddingLeft: '42%', cursor:'pointer', fontSize:'1em'}}>¿Olvidaste tu contrasena?</p>
                </div>
                <div className="Input">
                    <div className="Icono">
                        <IoIosLock />
                    </div>
                    <input type="password" placeholder="Introduce tu contrasena" className="nc" />
                </div>
            </div>
            <div className="Texto">
                <p>¿Aún no tienes cuenta?</p>
                <p class="Link" onClick={() => handleDivClick('CrearCuenta')}>Crear una cuenta</p>
            </div>
            <div className="Boton">
                <Link to={"/Individual"} style={{ textDecoration: 'none' , cursor:'default'}}>
                    <button className="BotonIniciarSesion">ACCEDER</button>
                </Link>
            </div>
        </div>
    );
};
export default IniciarSesion;