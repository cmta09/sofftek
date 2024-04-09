import React from 'react';
import ReactDom from 'react-dom';
import Inicio from './Paginas/Inicio';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArchivosIndividuales from './ArchivosIndividual';
import Gestor from './Paginas/GestorArchivosIndividuales';

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
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

