import React from "react";
import './MenuNavegacion.css'

class TableroDeAnalisis extends React.Component{
    render(){
        return(
            <div class = "Tablero">
                <div class = "Titulo"><p><b>Tablero</b> / Impact of Climate Change on Water Resources: A Review</p></div>
                <div class= "FilaSuperior">
                    <div class = "PanelTerminosFre">
                        <div class="TituloGraph">
                            <p>Terminos Repetidos</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                    <div class = "PanelFrecuencia">
                        <div class="TituloGraph">
                            <p>Frecuencia Terminos Deseados</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                    <div class = "PanelBiblio">
                        <div class="TituloGraph">
                            <p>Datos Bibliograficos</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                </div>
                <div class="FilaInferior">
                    <div class = "PanelAnalisis">
                        <div class="TituloGraph">
                            <p>Analisis General</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                    <div class = "PanelMalla">
                        <div class="TituloGraph">
                            <p>Malla de Terminos</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                    <div class = "PanelTemas">
                        <div class="TituloGraph">
                            <p>Temas Relacionados</p>
                        </div>
                        <div class="ContenidoGraph"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default TableroDeAnalisis;