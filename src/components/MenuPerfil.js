import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDifference } from "react-icons/md";

import './MenuPerfil.css'

const MenuPerfil = () => {

    return (
        <div className="MenuPerfil">
            <div className="Apuntador">
                <div className="Triangulo"></div>
                <div className="TrianguloInterno"></div>
            </div>
            <div className="Rectangulo">
                <div className="Cuenta">
                    <div className="Icono">
                        <FaRegUserCircle />
                    </div>
                    <div className="Texto">
                        <p>Cuenta</p>
                    </div>
                </div>
                <div className="Historial">
                    <div className="Icono">
                        <MdHistory />
                    </div>
                    <div className="Texto">
                        <p>Historial</p>
                    </div>
                </div>
                <div className="Idioma">
                    <div className="Icono">
                        <GrLanguage />
                    </div>
                    <div className="Texto">
                        <p>Idioma</p>
                    </div>
                </div>
                <div className="Comparaciones">
                    <div className="Icono">
                        <MdOutlineDifference />
                    </div>
                    <div className="Texto">
                        <p>Comparación</p>
                    </div>
                </div>
                <div className="CerrarSesion">
                    <p>Cerrar Sesión</p>
                </div>
            </div>
        </div>
    );
};
export default MenuPerfil;