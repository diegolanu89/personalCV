import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';       // add this
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
/*
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavegadorRutina from './components/menu/NavegadorRutina';
import EditorEjercicios from './components/menu/EditorEjercicios'
import EditorRutinas from './components/menu/EditorRutinas';
import { Login } from './components/sesion/Login'
import {Register} from './components/sesion/Register'
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/sesion/ProtectedRoute";*/

const app = (
      <App/>
);

ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();