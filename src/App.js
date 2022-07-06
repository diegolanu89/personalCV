import * as React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NuevaFicha from './components/ficha/NuevaFicha';

import { Login } from './components/sesion/Login'
import { Register } from './components/sesion/Register'
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/sesion/ProtectedRoute";
import { Home } from './components/menu/Home';
import Navegador from "./components/historia/Navegador";

/*HISTORIA___________________________________________*/
import HistoriaInterface from './interfaces/HistoriaInterface'

/*SILLS*/

/*Educacion*/



function App() {
     

      return (
            <div>
                  <AuthProvider>
                        <BrowserRouter>
                              <Routes>
                                    <Route exact path="/" element={
                                          <ProtectedRoute>
                                                <Home />
                                          </ProtectedRoute>
                                    } />

                                    <Route path="/login" element={<Login />} />

                                    <Route path="/register" element={<Register />} />

                                    <Route path="/skills" element={
                                          <ProtectedRoute>
                                               
                                          </ProtectedRoute>
                                    } />

                                    <Route path="/historia" element={
                                          <ProtectedRoute>
                                                <HistoriaInterface/>
                                          </ProtectedRoute>
                                    } />

                                    <Route path="/educacion" element={
                                          <ProtectedRoute>
                                               
                                          </ProtectedRoute>
                                    } />

                                    <Route path="/usuarioNuevo" element={
                                          <ProtectedRoute>
                                                <NuevaFicha />
                                          </ProtectedRoute>
                                    } />



                              </Routes>

                        </BrowserRouter>
                  </AuthProvider>
            </div>

      );
}


export default App;