import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './components/MenuNavegacion.css';
import Fondo from './components/FondoInicio'
import IniciarSesion from './components/Paginas/IniciarSesion';
import CrearCuenta from './components/Paginas/CrearCuenta';


const App = () => {
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
  <App />,
  document.getElementById('root')
);

export default App;
