import { useAuth } from "../../context/AuthContext";
import React from "react";



export function Salida({salida}){
    const { logout,  } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

   

    return (<div className="salida_modal">
                
                <div className="alert">
                    <div className="text_modal">Confirma que desea salir?</div>
                    <div className='nav_alert'>
                    <button id="btn_verde" className="btn_sta" onClick={()=>salida()}>Cancelar</button>
                    <button id="btn_rojo"  className="btn_sta" onClick={()=>handleLogout()}>Salir</button>
                    </div>
                </div>;




    </div>);
}