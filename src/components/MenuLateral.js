import React, { useState } from "react";
import './MenuNavegacion.css'
import { LiaFileAlt } from "react-icons/lia";
import { FaRegChartBar } from "react-icons/fa";
import { TfiClip } from "react-icons/tfi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const MenuLateral = ({onSelect}) => {
    // Estado para mantener el div seleccionado
    const [selectedDiv, setSelectedDiv] = useState('analisis');

    // Función para manejar el clic en un div del menú
    const handleDivClick = (div) => {
        setSelectedDiv(div); // Actualizar el div seleccionado
        onSelect(div);
        console.log(selectedDiv);
    };

    return(
        <div className="lateral">
            <div className="menuLateral">
                {/* Divs del menú lateral */}
                <div className="BotonMenuLateral">
                    <div class={`${selectedDiv === 'analisis' ? 'BotonSeleccion' : 'BotonCuadrado'}`} onClick={() => handleDivClick('analisis')}>
                        <FaRegChartBar className="IconoMenu"/>
                    </div>
                </div>
                <div className="BotonMenuLateral">
                    <div class={`${selectedDiv === 'resumen' ? 'BotonSeleccion' : 'BotonCuadrado'}`} onClick={() => handleDivClick('resumen')}>
                        <LiaFileAlt className="IconoMenu"/>
                    </div>
                </div>
                <div className="BotonMenuLateral">
                    <div class={`${selectedDiv === 'vista' ? 'BotonSeleccion' : 'BotonCuadrado'}`} onClick={() => handleDivClick('vista')}>
                        <TfiClip className="IconoMenu"/>
                    </div>
                </div>
            </div>
            <div className="EspacioMuerto"></div>
            <div className="Chatbot">
                <div className="BotonCuadrado2">
                    <IoChatboxEllipsesSharp className="IconoChat"/>
                </div>
            </div>
        </div>
    )
};
export default MenuLateral;