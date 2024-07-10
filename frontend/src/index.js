import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/patients/:id',
      element: <PatientProfile/>,
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
