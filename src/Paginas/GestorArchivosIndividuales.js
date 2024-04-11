import React from 'react';
import ReactDOM from 'react-dom';
import MenuSuperior from '../components/MenuSuperiorInicio';
import GestorIndividual from './GestorIndividual';
import { BrowserRouter } from 'react-router-dom';

const Gestor = () => {

  return (
    <div>
      <MenuSuperior />
      <GestorIndividual />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Gestor />
  </BrowserRouter>,
  document.getElementById('root')
);

export default Gestor;