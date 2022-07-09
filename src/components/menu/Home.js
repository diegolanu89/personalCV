import { useAuth } from "../../context/AuthContext";
import React from "react";
import { Suspense, useEffect, useState } from "react";
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from "../../firebase";
import CvServices from "../../services/CvServices";
import { useNavigate } from "react-router-dom";
import './Home.css'
import Starting from "../modals/Starting";
import NavBar from "../linkers/NavBar";

export function Home() {

    const [starting, setStarting] = useState(true);
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    
    

    useEffect(() => {
        setTimeout(() => {
            setStarting(false)
          }, 1000)
        
          CvServices.getFicha().then((res) => {
                if (res.new === true) navigate("/usuarioNuevo");
        })
            .catch((e) => {
                console.log(e);
            });
    });

    return (


        <div className="section_back_home home">

            {(starting === true) ?
                <Starting />
                :
                <div id="conteiner">
                    <NavBar
                        menu={true}
                        logout={true}
                    />

                    <div className="section_title_home ">
                        <span className="bolder large">Bienvenido</span> {user.displayName || user.email}
                    </div>

                    <div className="section_home_body" id="background_center">
                        <div id="filter">
                        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                            <Suspense fallback={<p>Cargando...</p>}>
                                
                            </Suspense>
                        </FirebaseAppProvider>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}
