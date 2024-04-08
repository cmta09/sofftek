import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './components/MenuNavegacion.css';
import Lateral from './components/MenuLateral';
import Superior from './components/Menusuperior';
import Tablero from './components/TableroDeAnalisis';
import Resumen from './components/Resumen';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('analisis');

  const handleSelect = (option) => {
    setSelectedOption(option); // Actualiza el estado con la opción seleccionada
  };

  return (
    <div>
      <Superior />
      <div className="container">
        <Lateral onSelect={handleSelect} />
        {selectedOption === 'resumen' ? <Resumen /> : <Tablero />}
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
