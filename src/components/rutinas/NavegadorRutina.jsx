import React from "react";
import GymServices from '../../services/GymServices'
import Rutinas from './Rutinas'
import DetalleRutina from './DetalleRutina'
import EjerciciosRutina from './EjerciciosRutina'
import { Link } from "react-router-dom";
import './NavegadorRutina.css';
import UnAvailable from '../modals/UnAvailable'
import Loading from "../modals/Loading";
import Alert from '../modals/Alert'
class NavegadorRutina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ejercicios : [],
            rutinas : [],
            ejercicio_select : null,
            rutina_select: null,
            modal_noDisponible:false,
            loading:true,

            modal_alert: false,
            msj_alert: ''
        };
        this.onDataChangeEjercicios = this.onDataChangeEjercicios.bind(this);
        this.onDataChangeRutinas = this.onDataChangeRutinas.bind(this);
        this.selectRutina = this.selectRutina.bind(this);
        this.selectEjercicio = this.selectEjercicio.bind(this);
        this.noDisponible = this.noDisponible.bind(this);
        this.clean = this.clean.bind(this);
        this.okAlert = this.okAlert.bind(this);
    }

    componentDidMount() {

        GymServices.getEjercicios()
            .then(res =>
                this.onDataChangeEjercicios(res)
            )
            .catch((e) => {
                console.log(e);
                this.setState({
                    loading: false,
                    modal_alert: true,
                    msj_alert: "No se puede acceder en este momento"
                });
            });

        GymServices.getRutinas()
            .then(res =>
                this.onDataChangeRutinas(res)
            )
            .catch((e) => {
                console.log(e);
                this.setState({
                    loading: false,
                    modal_alert: true,
                    msj_alert: "No se puede acceder en este momento"
                });
            });
    }

    onDataChangeEjercicios(items) {
        this.setState({ loading: false, });
        let ejercicios = []
        items.forEach((item) => {
            let nombre = item.nombre
            let repeticiones = item.repeticiones
            let tipo = item.tipo
            let musculo = item.musculo
            ejercicios.push({
                nombre: nombre,
                repeticiones: repeticiones,
                tipo:tipo,
                musculo:musculo
            });
        });
        this.setState({
            ejercicios: ejercicios,
        });
    }

    onDataChangeRutinas(items){
        this.setState({
            rutinas: items,
        });
    }

    selectRutina(rutina){
        this.clean()
        this.setState({
           rutina_select: rutina,
        });
    }

    selectEjercicio(ejercicio){
        var found =  this.state.ejercicios.find(e => e.nombre === ejercicio)
        if(found !== undefined){
            this.setState({ejercicio_select : found  });
           
        }else {
            this.setState({ejercicio_select : null  });
            this.noDisponible();
            setTimeout(() => { this.noDisponible() }, 3000);
            
        }
    }

    noDisponible(){
        if (this.state.modal_noDisponible === true) {
            this.setState({ modal_noDisponible: false, });
        } else
            this.setState({ modal_noDisponible: true, });
    }

    clean(){
        this.setState({ejercicio_select : null  });
        this.setState({rutina_select : null  });
    }

    okAlert() {
        this.setState({
            msj_alert: "",
            modal_alert: false
        });
    }


    render() {
       

        return <div className="menu" id="menu">

            <div className="section_link">
                <Link to="/">Volver</Link> {" "}
            </div>
            
            <div className="section">
                
                <Rutinas rutinas={this.state.rutinas} seleccionar={this.selectRutina}></Rutinas>
                

                {(this.state.rutina_select !== null) ?
                    <div>
                        <DetalleRutina rutina={this.state.rutina_select}></DetalleRutina>
                        <EjerciciosRutina  ejercicios={this.state.rutina_select.ejercicios} seleccionar={this.selectEjercicio}></EjerciciosRutina>
                        </div>
                    : null}

                {(this.state.modal_noDisponible !== false) ?
                        <UnAvailable msj={"Ejercicio no Disponible"}></UnAvailable>
                : null}

            </div>

            {(this.state.loading !== false) ?
                <Loading text={"Cargando Información"}></Loading>
            : null}

            {(this.state.modal_alert === true) ?
                <Alert event={this.okAlert} msj={this.state.msj_alert} />
                : null}
        </div>;
    }

}
export default NavegadorRutina;