import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CgRename } from "react-icons/cg";
import { TfiViewGrid } from "react-icons/tfi";
import { BiSortAlt2 } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterAlt } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import UploadFile from '../components/Upload';
import Documento from "../components/Documento";

import './GestorIndividual.css'


const GestorIndividual = () => {

    const [files, setFiles] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const handleToggleUpload = () => {
        setIsShown(!isShown);
    };

    const handleCloseUpload = () => {
        setIsShown(false);
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles([...files, ...selectedFiles]);
    };
    const handleDocumentoClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };
    
    return(
        <div class = "GestorIndividual">
            <div className="BarraHerramientas">
                <div className="Decoracion"></div>
                <div className="Barra">
                    <div className="NuevoFolder">
                        <div className="Icono">
                            <IoMdAddCircleOutline />
                        </div>
                        <div className="Texto">
                            <p>Folder</p>
                        </div>
                    </div>
                    <div className="Division">
                    </div>
                    <div className="Herramientas2">
                        <div className="Delete">
                            <div className="Icono">
                                <AiOutlineDelete  />
                            </div>
                        </div>
                        <div className="Rename">
                            <div className="Icono">
                                <CgRename  />
                            </div>
                        </div>
                    </div>
                    <div className="Division"></div>
                    <div className="Herramientas3">
                        <div className="Ordenar">
                            <div className="Icono">
                                <BiSortAlt2 />
                            </div>
                            <div className="Texto">
                                <p>Ordenar</p>
                            </div>
                        </div>
                        <div className="Vista">
                            <div className="Icono">
                                <TfiViewGrid />
                            </div>
                            <div className="Texto">
                                <p>Vista</p>
                            </div>
                        </div>
                    </div>
                    <div className="Division"></div>
                    <div className="Espacio"></div>
                    <div className="BarraBusqueda">
                        <div className="Buscar">
                            <div className="Icono">
                                <IoMdSearch />
                            </div>
                            <div className="Input">
                                <input type="text" placeholder="Busca en tus archivos"></input>
                            </div>
                            <div className="Icono">
                                <MdOutlineFilterAlt />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Decoracion"></div>
            </div>
            <div className="file-lines">
                <div className="file-grid">
                    <div className="file-icon upload-icon" onClick={handleToggleUpload}>
                        {/*<label htmlFor="file-upload" className="upload-icon">Upload</label>
                        <input id="file-upload" type="file" onChange={handleFileChange} multiple />*/}
                        <MdOutlineLibraryAdd />
                    </div>
                    {files.map((file, index) => (
                        <Documento 
                            index={index}
                            isActive={index === activeIndex}
                            onClick={() => handleDocumentoClick(index)}
                        />
                    ))}
                </div>
            </div>
            {isShown && <UploadFile onClose={handleCloseUpload} />}
        </div>
    )
}

export default GestorIndividual;