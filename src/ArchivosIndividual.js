import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './ArchivosIndividuales.css';
import Lateral from './components/MenuLateral';
import Superior from './components/Menusuperior';
import Tablero from './Paginas/TableroDeAnalisis';
import Resumen from './Paginas/Resumen';
import VistaPrevia from './Paginas/VistaPrevia';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('analisis');
  const [selectedComponent, setSelectedComponent] = useState(<Tablero/>);

  const handleSelect = (option) => {
    setSelectedOption(option); // Actualiza el estado con la opción seleccionada

    // Determina qué componente mostrar según la opción seleccionada
    switch (option) {
      case 'resumen':
        setSelectedComponent(<Resumen />);
        break;
      case 'vista':
        setSelectedComponent(<VistaPrevia />);
        break;
      case 'analisis':
        setSelectedComponent(<Tablero />);
        break;
      default:
        setSelectedComponent(<Tablero />);
        break;
    }
  };

  return (
    <div>
      <Superior />
      <div className="container">
        <Lateral onSelect={handleSelect} />
        {selectedComponent}
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export default App;


/* 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './MenuNavegacion.css';
import Lateral from './components/MenuLateral';
import Superior from './components/Menusuperior';
import Tablero from './Paginas/TableroDeAnalisis';
import Resumen from './Paginas/Resumen';
import VistaPrevia from './Paginas/VistaPrevia';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('analisis');
  const [selectedComponent, setSelectedComponent] = useState(<Tablero/>);

  const handleSelect = (option) => {
    setSelectedOption(option); // Actualiza el estado con la opción seleccionada

    // Determina qué componente mostrar según la opción seleccionada
    switch (selectedOption) {
      case 'resumen':
        setSelectedComponent(<Resumen />);
        break;
      case 'vista':
        setSelectedComponent(<VistaPrevia />);
        break;
      case 'analisis':
        setSelectedComponent(<Tablero />);
        break;
      default:
        setSelectedComponent(<Resumen />);
        break;
    }
  };

  return (
    <div>
      <Superior />
      <div className="container">
        <Lateral onSelect={handleSelect} />
        {selectedComponent}
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

export default App;

*/