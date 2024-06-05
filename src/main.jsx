import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./components/Error.jsx";
import Home from './pages/Home.jsx';
import Azienda from './pages/Azienda.jsx';
import Servizi from './pages/Servizi.jsx';
import Contatti from './pages/Contatti.jsx';
import Orari from './components/Orari.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/azienda",
    element: <Azienda />,
    errorElement: <Error />
  },
  {
    path: "/servizi",
    element: <Servizi />,
    errorElement: <Error />
  },
  {
    path: "/contatti",
    element: <Contatti />,
    errorElement: <Error />
  },
  {
    path: "/orari",
    element: <Orari />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)