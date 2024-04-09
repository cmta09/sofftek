import React from "react";
import './Resumen.css'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GrDownload } from "react-icons/gr";

import Checkbox from "../components/Checkbox";

class Resumen extends React.Component{

    render(){
        return(
            <div class = "FondoResumen">
                <div class = "Herramientas">
                    <div class = "Busqueda">
                        <div class= "TituloBusqueda">
                            <p>Busqueda de término:</p>
                        </div>
                        <div class= "BarraBusqueda">
                            <input placeholder="Inserta término a buscar..." type="Text"/>
                            <div class="BotonesNav">
                                <IoIosArrowUp class="Nav"/>
                                <IoIosArrowDown  class="Nav"/>
                            </div>
                        </div>
                        <div class="BotonBusqueda">
                            <input type="Button" value="BUSCAR"/>
                        </div>
                    </div>
                    <div class = "DesplegarNumero">
                        <div  class="ContenedorDesplegar">
                            <div class="divCheckBox">
                                <Checkbox checked={true}/>
                            </div>
                            <div class="TextoCheckBox">
                                <p>Desplegar número de página</p>
                            </div>
                        </div>

                    </div>
                    <div class = "EspacioMuerto"></div>
                    <div class = "DescargarResumen">
                        <button className="download-button">
                            DESCARGAR RESUMEN <GrDownload class="IconDownload" />
                        </button>
                    </div>
                </div>
                <div class = "Resumen">
                    <div class = "TextoResumen"></div>
                </div>
            </div>
        )
    }
}

export default Resumen;