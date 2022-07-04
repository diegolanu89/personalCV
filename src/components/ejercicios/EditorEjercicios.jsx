import React from "react";
import GymServices from '../../services/GymServices'
import './EditorEjercicios.css';
import { Link } from "react-router-dom";
import Ejercicios from './Ejercicios';
import EjerciciosDelete from './EjerciciosDelete';
import AddEjercicio from './AddEjercicio';
import DetalleEjercicio from "./DetalleEjercicio";
import ModalDelete from "../modals/ModalDelete";
import Loading from "../modals/Loading";
import Alert from '../modals/Alert'
class EditorEjercicios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ejercicios: [],
            ejercicio_select: null,
            add: false,
            mode_delete: false,

            ejercicio_delete: null,
            modal_delete: false,
            loading: true,

            modal_alert: false,
            msj_alert: ''

        };
        this.onDataChangeEjercicios = this.onDataChangeEjercicios.bind(this);
        this.selectEjercicio = this.selectEjercicio.bind(this);
        this.modeDelete = this.modeDelete.bind(this);
        this.deleteEjercicio = this.deleteEjercicio.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.editarEjercicio = this.editarEjercicio.bind(this);
        this.addEjercicio = this.addEjercicio.bind(this);
        this.updateEjercicios = this.updateEjercicios.bind(this);
        this.cleanAll = this.cleanAll.bind(this);
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
    }

    onDataChangeEjercicios(items) {
        let ejercicios = []
        items.forEach((item) => {
            ejercicios.push({
                nombre: item.nombre,
                repeticiones: item.repeticiones,
                peso: item.peso,
                series: item.series,
            });
        });
        this.setState({ ejercicios: ejercicios, });
        this.setState({ add: false, });
        this.setState({ loading: false, });
    }

    selectEjercicio(ejercicio) {
        this.cleanAll()
        var found = this.state.ejercicios.find(e => e.nombre === ejercicio.nombre)
        if (found !== undefined) {
            this.setState({ ejercicio_select: found });
        } else {
            this.setState({ ejercicio_select: null });
        }
    }

    addEjercicio() {
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

    deleteEjercicio(id) {
        if (this.state.modal_delete === true) {
            this.setState({ modal_delete: false, });
            this.setState({ ejercicio_delete: null, });
        } else {
            this.setState({ modal_delete: true, });
            this.setState({ ejercicio_delete: id, });
        }
    }

    confirmDelete(id) {
        GymServices.deleteEjercicio(id).then(() => {
            console.log("Deleted successfully!");
            this.updateEjercicios()
        })
            .catch((e) => {
                console.log(e);
                this.setState({
                    loading: false,
                    modal_alert: true,
                    msj_alert: "No se puede acceder en este momento"
                });
            });
    }

    editarEjercicio(id, value) {
        GymServices.updateEjercicio(id, value).then(() => {
            console.log("Update successfully!");
            this.updateEjercicios()
        })
            .catch((e) => {
                console.log(e);
                this.setState({
                    loading: false,
                    modal_alert: true,
                    msj_alert: "No se puede acceder en este momento"
                });
            });
    }

    updateEjercicios() {
        this.cleanAll()
        this.setState({ loading: true, });
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
    }

    cleanAll() {
        this.setState({ add: false, });
        this.setState({ mode_delete: false, });
        this.setState({ modal_delete: false, });
        this.setState({ ejercicio_select: null, });
        this.setState({ ejercicio_delete: null, });
    }

    okAlert() {
        this.setState({
            msj_alert: "",
            modal_alert: false,
            ejercicio_select: null
        });
    }

    render() {

        return <div className="section_back_ejercicios" id="">
            <div className="section_bar_ejercicios">
                <Link to="/">Volver</Link> {" "}
            </div>

            <div className="section_title_ejercicios">
                EDITOR EJERCICIOS
            </div>

            <div className="section_ejercicios_body">
                <div className="slide_hor_scroll">
                    <button id="btn_verde" onClick={() => this.addEjercicio()}>ADD</button>
                    <button onClick={() => this.modeDelete()}>{(this.state.mode_delete === false) ? 'DELETE MODE' : 'NORMAL MODE'}</button>
                    <button onClick={() => this.updateEjercicios()}>UPDATE</button>
                </div>

                {(this.state.mode_delete === false) ? <div className="title_ejercicios">EJERCICIOS</div> : null}

                <div className="slide__scroll">
                    {(this.state.mode_delete === false) ?
                        <Ejercicios ejercicios={this.state.ejercicios} seleccionar={(this.selectEjercicio)}></Ejercicios>
                        : <EjerciciosDelete update={this.updateEjercicios} eliminar={this.deleteEjercicio} ejercicios={this.state.ejercicios}></EjerciciosDelete>
                    }

                    {(this.state.loading !== false) ?
                        <Loading text={"Cargando Información"}></Loading>
                        : null}

                    {(this.state.modal_alert === true) ?
                        <Alert event={this.okAlert} msj={this.state.msj_alert} />
                        : null}
                </div>

                <div>
                    {(this.state.add !== false) ?
                        <AddEjercicio update={this.updateEjercicios} close={this.addEjercicio}></AddEjercicio>
                        : null}

                    {(this.state.ejercicio_select !== null) ?
                        <DetalleEjercicio 
                            ok={ this.okAlert}
                            edit={true}
                            update={this.updateEjercicios}
                            editar={this.editarEjercicio}
                            eliminar={this.deleteEjercicio}
                            delete={true}
                            seleccionado={this.state.ejercicio_select}>
                        </DetalleEjercicio>
                        : null}

                    {(this.state.modal_delete !== false) ?
                        <ModalDelete ejercicio={this.state.ejercicio_delete} cancelar={this.deleteEjercicio} confirmar={this.confirmDelete}></ModalDelete>
                        : null}
                </div>
            </div>



        </div>;
    }

}
export default EditorEjercicios;