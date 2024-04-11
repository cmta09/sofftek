import './Documento.css'
import React, {useState} from "react";
import { BsFileEarmarkText } from "react-icons/bs";


const Documento = ({index}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);

    };
    return (
        <div key={index} className="file-icon file" style={{
            backgroundColor: isActive ? '#CDEFEB' : ''
            }}
            onClick={handleClick}>
            <div className='icon' 
                style={{
                color: isActive ? 'white' : '#c8c8c8'
                }}>
            <BsFileEarmarkText /></div>
            <div className='nombre'><p>File{index}</p></div>
        </div>
    );
};
export default Documento;