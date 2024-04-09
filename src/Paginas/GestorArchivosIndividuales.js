import React from 'react';
import ReactDOM from 'react-dom';
import MenuSuperior from '../components/MenuSuperiorInicio';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menusuperior';

const Gestor = () => {

  return (
    <div>
      <MenuSuperior />
      <Menu/>
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