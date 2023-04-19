import { useAuth } from "../../context/AuthContext";
import React from "react";

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
            <div className="login_out" onClick={()=>handleLogout()}></div>
    );
}
