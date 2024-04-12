import './Documento.css'
import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";


const Documento = ({index, isActive, onClick}) => {
    return (
        <div 
            key={index} 
            className="file-icon file" 
            style={{
                backgroundColor: isActive ? '#CDEFEB' : ''
            }}
            onClick={onClick}
        >
            <div 
                className='icon' 
                style={{
                    color: isActive ? 'white' : '#c8c8c8'
                }}
            >
                <BsFileEarmarkText />
            </div>
            <div className='nombre'>
                <p>File{index}</p>
            </div>
        </div>
    );
};
export default Documento;