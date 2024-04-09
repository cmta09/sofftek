import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Fondo from '../components/FondoInicio'
import IniciarSesion from './IniciarSesion';
import CrearCuenta from './CrearCuenta';
import { BrowserRouter } from 'react-router-dom';


const Inicio = () => {
  const [selectedOption, setSelectedOption] = useState('IniciarSesion');

  const handleSelect = (option) => {
    setSelectedOption(option); // Actualiza el estado con la opción seleccionada
  };

  return (
    <div>
      <Fondo />
      {selectedOption === 'IniciarSesion' ? (
        <IniciarSesion onSelect={handleSelect} />
      ) : (
        <CrearCuenta onSelect={handleSelect}/>
      )}

    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Inicio />
  </BrowserRouter>,
  document.getElementById('root')
);

export default Inicio;
