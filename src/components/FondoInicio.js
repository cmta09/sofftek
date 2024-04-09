import React from "react";
import './FondoInicio.css'

class MenuSuperior extends React.Component{
    render(){
        return(
            <div class = "Fondo">
                <div class="EsquinaSuperior"> 
                    <div class="Triangulo">
                        <div class= "Circulo"> </div>
                        <div class="Circulo2"></div>
                        <div class="Circulo3"></div>
                        <div class="Circulo4"></div>
                        <div class="Circulo5"></div>
                        <div class="Circulo6"></div>
                        <div class="Circulo7"></div>
                    </div>
                </div>
                <div class="Espacio">
                </div>
                <div class="EsquinaInferior"> 
                    <div class="Triangulo2">
                    <div class= "Circulo"> </div>
                        <div class="Circulo2"></div>
                        <div class="Circulo3"></div>
                        <div class="Circulo4"></div>
                        <div class="Circulo5"></div>
                        <div class="Circulo6"></div>
                        <div class="Circulo7"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuSuperior;