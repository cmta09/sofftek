import React, { useState } from "react";
import '../MenuNavegacion.css'
import Logo from '../Img/LogoGris.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io"



const CrearCuenta = ({ onSelect }) => {
    // Estado para mantener el div seleccionado
    const [selectedDiv, setSelectedDiv] = useState('CrearCuenta');

    // Función para manejar el clic en un div del menú
    const handleDivClick = (p) => {
        setSelectedDiv(p); // Actualizar el div seleccionado
        onSelect(p);
        console.log(selectedDiv);
    };

    return (
        <div className="CrearCuenta">
            <div className="Logo">
                <img src={Logo} alt="Logo" className="ImgLogo" />
            </div>
            <div className="Titulo">
                <p>CREAR CUENTA</p>
            </div>
            <div className="Campos">
                <div className="Columna">
                    <div className="Campo">
                        <div className="TituloInput">
                            <p>Nombres(s)</p>
                        </div>
                        <div className="Input">
                            <div className="Icono">
                                <FaUser />
                            </div>
                            <input type="text" placeholder="Introduce tu nombre" className="nc" />
                        </div>
                    </div>
                    <div className="Campo">
                        <div className="TituloInput">
                                <p>Apellidos</p>
                            </div>
                            <div className="Input">
                                <div className="Icono">
                                    <FaUser />
                                </div>
                                <input type="text" placeholder="Introduce tu apellido" className="nc" />
                        </div>
                    </div>
                    <div className="Campo">
                        <div className="TituloInput">
                                <p>Usuario</p>
                            </div>
                            <div className="Input">
                                <div className="Icono">
                                    <FaUser />
                                </div>
                                <input type="text" placeholder="Introduce tu usuario" className="nc" />
                        </div>
                    </div>
                </div>
                <div className="EspacioCol"></div>
                <div className="Columna">
                    <div className="Campo">
                        <div className="TituloInput">
                            <p>Correo</p>
                        </div>
                        <div className="Input">
                            <div className="Icono2">
                                <MdOutlineEmail />
                            </div>
                            <input type="email" placeholder="Introduce tu E-Mail" className="nc" />
                        </div>
                    </div>
                    <div className="Campo">
                        <div className="TituloInput">
                                <p>Contrasena</p>
                            </div>
                            <div className="Input">
                                <div className="Icono2">
                                    <IoIosLock />
                                </div>
                                <input type="password" placeholder="Introduce tu contrasena" className="nc" />
                        </div>
                    </div>
                    <div className="Campo">
                        <div className="TituloInput">
                                <p>Confirmar contrasena</p>
                            </div>
                            <div className="Input">
                                <div className="Icono2">
                                    <IoIosLock />
                                </div>
                                <input type="password" placeholder="Confirmar tu contrasena" className="nc" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Texto">
                <p>¿Aún no tienes cuenta?</p>
                <p class="Link" onClick={() => handleDivClick('IniciarSesion')}>Crear una cuenta</p>
            </div>
            <div className="Boton">
                <button className="BotonIniciarSesion">ACCEDER</button>
            </div>
        </div>
    );
};
export default CrearCuenta;