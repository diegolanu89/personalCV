import { useAuth } from "../../context/AuthContext";
import React from "react";
import login from '../../images/login.png';

export function Logout() {
    const { logout } = useAuth();
    
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (


        <div className="cerrar_sesion">
                <button  id="link_button" onClick={()=>handleLogout()}>
                    <img  id=  "link_bar_img" alt="item" src={login}></img>
                </button>
        </div>

    );
}
