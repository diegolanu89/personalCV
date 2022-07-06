import * as React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NuevaFicha from './components/ficha/NuevaFicha';
import Skill from './components/skill/Skill'

import { Login } from './components/sesion/Login'
import { Register } from './components/sesion/Register'
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/sesion/ProtectedRoute";
import { Home } from './components/menu/Home';
import Navegador from "./components/historia/Navegador";


import {info_jobs} from './assets/jobs.js'
import {jobs_title} from './assets/jobs.js'
import {jobs_index} from './assets/jobs.js'

import ncr from './images/ncr.jpg';
import cetek from './images/cetek.jpg';
import accesorios from './images/accesorios.jpg';
import tecnico from './images/tecnico.jpg';

function  App () {
      var img_jobs = [accesorios,tecnico,cetek,ncr]
           
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
                                                      <Skill />
                                                </ProtectedRoute>
                                          } />

                                          <Route path="/historia" element={
                                                <ProtectedRoute>
                                                      <Navegador types={jobs_index()} 
                                                      tittles={jobs_title()}
                                                      img={img_jobs}
                                                      info_jobs={info_jobs()}
                                                      />
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