import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "./Alert";
import GymServices from '../../services/GymServices'
import Loading from "../modals/Loading";
import './Register.css'

export function Register() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      setLoadingText('Creando usuario');

      await signup(user.email, user.password);
      setLoadingCharge('10%')
      setLoadingText('Añadiendo datos');
      GymServices.initUser(user.email).then(() => {
        console.log("USUARIO INICIADO");
        setLoadingCharge('20%')
        setLoadingText('Añadiendo Ejercicios');
        GymServices.initEjercicios(user.email).then(() => {
          console.log("EJERCICIOS INICIADOS");
          setLoadingCharge('70%')
          setLoadingText('Añadiendo Rutinas');
          GymServices.initRutinas(user.email).then(() => {
            console.log("RUTINAS INICIADOS");
            setLoadingCharge('100%')
            setLoadingText('¡Listo!');
            setTimeout(() => {
              setLoading(false);
              navigate("/usuarioNuevo");
            }, 1000)
          }).catch((e) => {
            console.log(e);
          });
        })
          .catch((e) => {
            console.log(e);
          });
      })
        .catch((e) => {
          console.log(e);
        });



    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="section_back_login">
      <div id="section">
      {error && <Alert message={error} />}
      <div className="section_bar_login">Registro de Usuario</div>

      <div className="section_login_body">

      {(loading !== false) ?
        <Loading text={loadingText} carga={true} nivel={loadingCharge}></Loading>
        : <div className="logotipo">CV DIEGO PEYRANO</div>}
      

        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email">Email</label>
            <div><input
              type="email"
              id="email"
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="*************"
            />
            </div>
          </div>

          <button className="login_button sig_in">Registrar</button>

        </form>
      </div>



      <div className="section_login_body nav_login">
        <div>¿Ya tenés cuenta?</div>
        <div className="foot_register">
          <Link to="/login" className="text-blue-700 hover:text-blue-900">
            Iniciar sesión
          </Link>
        </div>

      </div>

      </div>
    </div>
  );
}