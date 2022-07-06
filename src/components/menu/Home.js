import { useAuth } from "../../context/AuthContext";
import React from "react";
import { Suspense, useEffect, useState } from "react";
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from "../../firebase";
import GymServices from '../../services/GymServices';
import { useNavigate } from "react-router-dom";
import './Home.css'
import Starting from "../modals/Starting";
import SlideMenu from '../slides/SlideMenu'

export function Home() {
    const [starting, setStarting] = useState(true);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setStarting(false)
          }, 1000)
        
        GymServices.getFicha().then((res) => {
                if (res.new === true) navigate("/usuarioNuevo");
        })
            .catch((e) => {
                console.log(e);
            });
    });


    const references = ['/play', '/navegadorDietas', '/skills', '/historia', '/editorRutinas', '/']
    const texts = ['Contacto', 'Descargar CV PDF', 'Skills', 'Trabajos', 'Informacion Personal', 'Volver']


    return (


        <div className="section_back_home home">

            {(starting === true) ?
                <Starting />
                :
                <div id="conteiner">
                    <div className="section_bar_home right" >
                        <a href="#!" onClick={handleLogout}>Cerrar sesión</a>
                    </div>

                    <div className="section_title_home ">
                        <span className="bolder large">Bienvenido</span> {user.displayName || user.email}
                    </div>

                    <div className="section_home_body" id="background_center">
                        <div id="filter">
                        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                            <Suspense fallback={<p>Cargando...</p>}>
                                <SlideMenu links={references} texts={texts} />
                            </Suspense>
                        </FirebaseAppProvider>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}
