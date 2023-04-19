
import CvServices from "../../services/CvServices";
import { useAuth } from "../../context/AuthContext";
import React from "react";
import { Suspense, useEffect, useState } from "react";
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from "../../firebase";
//import GymServices from '../../services/GymServices';
import { useNavigate } from "react-router-dom";
//import './Home.css'
import Starting from "../modals/Starting";
import NavBar from "../linkers/NavBar";
import { User } from '../../api/types'


export const Home = () => {
    const [starting, setStarting] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            setStarting(false)
        }, 1000)

        CvServices.getFicha().then((e: unknown) => {
            var res = e as User
            if (res.new) navigate("/usuarioNuevo");
        })
            .catch((e) => {
                console.log(e);
            });
    });

    return <div>
        {(starting === true) ?
            <Starting />
            :
            <div>
                <div className="section_top ">
                    <NavBar
                        menu={true}
                        logout={true}
                    />
                    <span className="bolder large">Bienvenido</span> {user.displayName || user.email}
                </div>

                <div className="section_center_total">
                    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                        <Suspense fallback={<p>Cargando...</p>}>

                        </Suspense>
                    </FirebaseAppProvider>
                </div>
            </div>
        }
    </div>


}
export default Home;
