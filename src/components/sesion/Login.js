
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "./Alert";
import './Login.css'


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if(error.message.substr(22,14) === 'user-not-found')
        setError('No existe el usuario ingresado');
      else
        setError(error.message.substr(10,100));
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message.substr(10,100));
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribe un email para resetear contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un email. Chequeá tu casilla de email')
      setTimeout(() => {
        navigate("/");
      }, 5500)
    } catch (error) {
      setError(error.message.substr(10,100));
    }
  };

  return (
    <div className="section_back_login">
      <div id="section">
      <div className="section_bar_login">Iniciar Sesión</div>
      

      <div className="section_login_body">
      <div className="logotipo">CV Diego Peyrano</div>
      {error && <Alert message={error} />}
        <form onSubmit={handleSubmit}>
          <div >
            <label htmlFor="email">Email</label>
            <div><input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="tuemail@company.com"
            />
            </div>
          </div>

          <div >
            <label htmlFor="password" >Contraseña</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="*************"
              />
            </div>
          </div>

          <div>
            <button className="login_button sig_in" type="submit">Iniciar Sesión</button>
          </div>

          <div className="info_inicial right_info">
            Regístrese por favor, para poder acceder y descargar la información completa actualizada en pdf o verla online. 
              Muchas gracias. 
          </div>
        </form>
       
      </div>

      

      <div className="section_login_body nav_login">
        <div><button className="login_button no_border " onClick={handleResetPassword}>Perdiste la contraseña?</button></div>
        <div><button className="login_button google" onClick={handleGoogleSignin}>Google login</button></div>
      </div>

      <div className="section_login_body feet_login">
        
          <div>No tenés Cuenta?</div>
          <div className="foot_register">
            <Link to="/register" >
              Registrate
            </Link>
          </div>
        
      </div>
      </div>

      <div id="info_web">
        <div className="title_info">Bienvenidos a mi CV</div>
        <div className="subtitle_info">
          Aquí podrán encontrar información personal de mi desarrollo personal y profesional
        </div>
        <div className="info_inicial ">
          Regístrese por favor, para poder acceder y descargar la información completa actualizada en pdf o verla online. 
          Muchas gracias. 
        </div>
      </div>
    </div>
  );
}