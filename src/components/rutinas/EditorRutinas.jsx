import React from "react";
import GymServices from '../../services/GymServices'
import { Link } from "react-router-dom";
import Rutinas from './Rutinas'
import DetalleRutina from './DetalleRutina'
import EjerciciosRutina from './EjerciciosRutina'
import AddRutina from './AddRutina'
import RutinasDelete from './RutinasDelete'
import Loading from "../modals/Loading";
import Alert from '../modals/Alert'
import './EditorRutinas.css'
class EditorRutinas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ejercicios: [],
            rutinas: [],
            rutina_select: null,
            add: false,

            mode_delete: false,
            loading: true,
            modal_delete: false,

            modal_alert: false,
            msj_alert: ''
        };
        this.onDataChangeEjercicios = this.onDataChangeEjercicios.bind(this);
        this.onDataChangeRutinas = this.onDataChangeRutinas.bind(this);
        this.selectRutina = this.selectRutina.bind(this);
        this.modeDelete = this.modeDelete.bind(this);
        this.updateRutinas = this.updateRutinas.bind(this);
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
        let ejercicios = []
        items.forEach((item) => {
            let nombre = item.nombre
            let repeticiones = item.repeticiones
            let tipo = item.tipo
            let musculo = item.musculo
            ejercicios.push({
                nombre: nombre,
                repeticiones: repeticiones,
                tipo: tipo,
                musculo: musculo
            });
        });
        this.setState({
            ejercicios: ejercicios,
        });
    }

    onDataChangeRutinas(items) {
        this.setState({
            rutinas: items,
        });
        this.setState({ loading: false, });
    }

    selectRutina(rutina) {
        this.setState({ loading: true, });
        this.cleanAll()
        setTimeout(() => {
            this.setState({ add: false, });
            this.setState({ rutina_select: rutina, });
            this.setState({ loading: false, });
        }, 500)
    }

    addRutina() {
        this.cleanAll()
        if (this.state.add === true) {
            this.setState({ add: false, });
        } else
            this.setState({ add: true, });
    }

    modeDelete() {
        this.cleanAll()
        if (this.state.mode_delete === true) {
            this.setState({ mode_delete: false, });
        } else
            this.setState({ mode_delete: true, });
    }

    updateRutinas() {
        this.cleanAll()
        this.setState({ loading: true, });
        GymServices.getRutinas()
            .then(res =>
                this.onDataChangeRutinas(res)
            )
    }

    cleanAll() {
        this.setState({ add: false, });
        this.setState({ mode_delete: false, });
        this.setState({ rutina_select: null, });
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

            <div className="section font_app">
                EDITOR RUTINAS
            </div>

            <div className="section">
                <button onClick={() => this.addRutina()}>ADD</button>
                <button onClick={() => this.modeDelete()}>{(this.state.mode_delete === false) ? 'DELETE MODE' : 'NORMAL MODE'}</button>
                <button onClick={() => this.updateRutinas()}>UPDATE</button>
            </div>

            <div className="section">

                {(this.state.mode_delete === false) ?
                    <Rutinas rutinas={this.state.rutinas} seleccionar={this.selectRutina}></Rutinas>
                    : <RutinasDelete update={this.updateRutinas} eliminar={this.deleteRutina} rutinas={this.state.rutinas}></RutinasDelete>
                }

                {(this.state.rutina_select !== null) ?
                    <div>
                        <DetalleRutina rutina={this.state.rutina_select}></DetalleRutina>
                        <EjerciciosRutina ejercicios={this.state.rutina_select.ejercicios} ></EjerciciosRutina>
                    </div>
                    : null}

                {(this.state.add !== false) ?
                    <AddRutina update={this.updateRutinas} ejercicios={this.state.ejercicios} ></AddRutina>
                    : null}

                {(this.state.loading !== false) ?
                    <Loading text={"Cargando Información"}></Loading>
                    : null}

                

            </div>
            {(this.state.modal_alert === true) ?
                <Alert event={this.okAlert} msj={this.state.msj_alert} />
                : null}

        </div>;
    }

}
export default EditorRutinas;