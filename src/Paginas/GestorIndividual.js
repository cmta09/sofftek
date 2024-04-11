import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CgRename } from "react-icons/cg";
import { TfiViewGrid } from "react-icons/tfi";
import { BiSortAlt2 } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterAlt } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";

import './GestorIndividual.css'


const GestorIndividual = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);

    };

    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles([...files, ...selectedFiles]);
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
                    <div className="file-icon upload-icon">
                        <label htmlFor="file-upload" className="upload-icon">Upload</label>
                        <input id="file-upload" type="file" onChange={handleFileChange} multiple />
                    </div>
                    {files.map((file, index) => (
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GestorIndividual;