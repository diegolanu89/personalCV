
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "./Alert";
import './Login.css'


export const Login =()=> {

  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, pass);
      navigate("/");
    } catch (error) {
      var er = error as any
      if(er.message.substr(22,14) === 'user-not-found')
        setError('No existe el usuario ingresado');
      else
        setError(er.message.substr(10,100));
    }
  };


  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      var er=error as any
      setError(er.message.substr(10,100));
    }
  };

  const handleResetPassword = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!email) return setError("Escribe un email para resetear contraseña");
    try {
      await resetPassword(email);
      setError('Te enviamos un email. Chequeá tu casilla de email')
      setTimeout(() => {
        navigate("/");
      }, 5500)
    } catch (error) {
        var er = error as any
        setError(er.message.substr(10,100));
    }
  };

  return <div>
    <div className="section_top">
      Iniciar Sesión
    </div>

      <div className="section_center">
        <div className="rdiet_c"></div>

      {error && <Alert message={error} />}
        <form onSubmit={e=>handleSubmit(e)}>
          <div >
            <label htmlFor="email">Email</label>
            <div><input
              type="email"
              name="email"
              id="email"
              className="form_label"
              onChange={e => setEmail(e.target.value)}
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
                className="form_label"
                onChange={e => setPass(e.target.value)}
                placeholder="*************"
              />
            </div>
          </div>

          <div className="center_flex">
            <button className="bt_border" type="submit">Iniciar Sesión</button>
          </div>
        </form>
      </div>

      <div className="section_bottom">
          <div><button className="bt_border" onClick={e=>handleResetPassword(e)}>Perdiste la contraseña?</button></div>
          <div><button className="bt_border" onClick={e=>handleGoogleSignin()}>Google login</button></div>
          <div className="link_esp">No tenés Cuenta? <Link to="/register" >Registrate</Link></div>
      </div>
    </div>
  
}

export default Login;