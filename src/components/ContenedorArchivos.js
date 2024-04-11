import React, { useState } from 'react';
import './Contenedor.css'
import { RiFileFill } from 'react-icons/ri'; // Importing the file icon from React Icons

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className="file-container">
      {/* Div para mostrar archivos */}
      <div className="file-grid">
        <label htmlFor="file-upload" className="upload-icon">Upload</label>
        <input id="file-upload" type="file" onChange={handleFileChange} multiple />
        {/* Mostrar archivos */}
        {files.map((file, index) => (
          <div key={index} className="file-icon">
            <RiFileFill size={24} />
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;