import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "./Alert";
//import GymServices from '../../services/GymServices'
import Loading from "../modals/Loading";
import './Register.css'

export const Register = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)
  const [loadingCharge, setLoadingCharge] = useState('0%')
  const [loadingText, setLoadingText] = useState("Cargando información")

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      setLoadingText('Creando usuario');

      await signup(user.email, user.password);
      setLoadingCharge('10%')
      setLoadingText('Añadiendo datos');

      console.log("USUARIO INICIADO");
      setLoadingCharge('100%')
      navigate("/");

    } catch (error) {
      var er = error as any
      setError(er.message);
    }
  }


  return <div>


    <div className="section_top">
      Registro de Usuario
    </div>


    <div className="section_center">
      <div className="rdiet_c"></div>

      {error && <Alert message={error} />}

      {(loading !== false) ?
        <Loading text={loadingText} carga={true} nivel={loadingCharge}></Loading>
        : null}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <div><input
            type="email"
            id="email"
            className="form_label"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password">Contraseña</label>
          <div><input
            type="password"
            id="password"
            className="form_label"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
          </div>
        </div>
        <div className="center_flex">
          <button className="bt_border" >Registrar</button>
        </div>
      </form>
    </div>

    <div className="section_bottom">
      <div className="link_esp">Ya tenés Cuenta? <Link to="/login" >Inicia sesión</Link></div>
    </div>


  </div>

}

export default Register;