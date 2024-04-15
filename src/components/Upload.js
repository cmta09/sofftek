import React from "react";
import Exito from "./Exito";
import Error from "./Error";
import { LiaCloudUploadAltSolid } from "react-icons/lia";


import './Upload.css'

const MenuPerfil = ({onClose}) => {
    return (
        <div className="FondoPopUp" onClick={onClose}>
            <div className="PopUp-Upload">
                {/*<div className="Columna">
                    <div className="Icono">
                        <div className="Circulo">
                            <LiaCloudUploadAltSolid />
                        </div>
                    </div>
                    <div className="Titulo">
                        <p>CARGA DOCUMENTO DESDE UNA URL</p>
                    </div>
                    <div className="Texto">
                        <p>Inserte una URL a un PDF y carguelo directamente en la plataforma</p>
                    </div>
                    <div className="URL">
                        <div className="Campos">
                            <div className="Input">
                                <input type="text" placeholder="Ingresa una URL..."></input>
                            </div>
                            <div className="Boton">
                                <p>CARGAR</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Columna2">
                    <div className="Icono">
                        <div className="Circulo">
                            <LiaCloudUploadAltSolid />
                        </div>
                    </div>
                    <div className="Titulo">
                        <p>ARRASTRA O SUBE EL DOCUMENTO PARA SUBIR</p>
                    </div>
                    <div className="URL">
                        <div className="Campos">
                            <div className="Boton">
                                <p>SUBIR DEL DISPOSITIVO</p>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <Error/>
            </div>
        </div>
    );
};
export default MenuPerfil;