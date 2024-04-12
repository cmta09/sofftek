import React from 'react';
import ReactDom from 'react-dom';
import Inicio from './Paginas/Inicio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArchivosIndividuales from './ArchivosIndividual';
import Gestor from './Paginas/GestorArchivosIndividuales';
import Contenedor from './components/ContenedorArchivos';
import Loading from './components/Loading';
import Recuperar from './Paginas/RecuperarContra';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/Menu",
    element: <ArchivosIndividuales/>,
  },
  {
    path: "/Individual",
    element: <Gestor/>,
  },
  {
    path: "/Upload",
    element: <Contenedor/>,
  },
  {
    path: "/Loading",
    element: <Loading/>,
  },
  {
    path: "/Recuperar",
    element: <Recuperar/>,
  },
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

