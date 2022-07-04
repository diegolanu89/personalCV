import React from "react";
import GymServices from '../../services/GymServices'
import './DetalleEjercicio.css';
import EditEjercicio from './EditEjercicio'
import Loading from "../modals/Loading";
class DetalleEjercicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            edit_null: true,
            nombre: "",
            repeticiones: 0,
            series: 0,
            peso: 0,
            loading: false,
        };
        this.setEdit = this.setEdit.bind(this)
        this.finalizarSubmit = this.finalizarSubmit.bind(this);
        this.updateEjercicio = this.updateEjercicio.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }

    componentDidMount() {
        this.setState({
            nombre: this.props.seleccionado.nombre,
            repeticiones: this.props.seleccionado.repeticiones,
            series: this.props.seleccionado.series,
            peso: this.props.seleccionado.peso,
        });
    }

    setEdit() {
        if (this.state.edit === true) {
            this.setState({ edit: false, });
        } else
            this.setState({ edit: true, });
    }

    finalizarSubmit() {
        this.setEdit()
        this.updateEjercicio()
    }

    cancelar() {
        this.setEdit()
    }

    updateEjercicio() {
        this.setState({ loading: true, });
        GymServices.getEjercicio(this.state.nombre).then((res) => {
            console.log("Update front!");
            this.setState({
                nombre: res.nombre,
                repeticiones: res.repeticiones,
                series: res.series,
                peso: res.peso,
            })
            this.setState({ loading: false, });
        })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {

        return <div className="detalle_ejercicio">

            <div className="nombre_ejercicio">{this.state.nombre}</div>
            {(this.state.loading !== false) ?
                <div className="loading_edit">
                    <Loading text={"Cargando Información"}></Loading>
                </div>
                : null}

            <div className="content_detail">
                <div className="details">
                    <div className="detail_ejercicio">
                        <div>Repeticiones</div>
                        <div>{this.state.repeticiones}</div>
                    </div>
                    <div className="detail_ejercicio">
                        <div>Series</div>
                        <div>{this.state.series}</div>
                    </div>
                </div>

                <div className="detail_peso">
                    <div>Peso</div>
                    <div>{this.state.peso}<span className="kg">kg</span></div>
                </div>
            </div>
            {(this.state.edit_null !== false) ?
                <div className="slide_hor_scroll">
                    <button onClick={() => this.props.eliminar(this.props.seleccionado.nombre)}>Eliminar</button>
                    <button onClick={() => this.setEdit()}>{(this.state.edit === false) ? 'EDITAR' : 'DESCARTAR'}</button>
                </div>
                : null}

            {(this.state.edit !== false) ?
                <EditEjercicio
                    ejercicio={this.props.seleccionado}
                    finalizar={this.finalizarSubmit}
                    cancelar={this.cancelar}
                    update={this.props.update}
                >
                </EditEjercicio>
                : null}

            <div className="ok_detail ultraflex">
                <button className="btn_sta" id="btn_verde" onClick={() => this.props.ok()}>OK</button>
            </div>


        </div>;
    }

}
export default DetalleEjercicio;