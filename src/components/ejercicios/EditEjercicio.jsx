import React from "react";
import './EditEjercicio.css';
import GymServices from '../../services/GymServices'
import arrow from '../slides/arrow_right.png';
import Loading from "../modals/Loading";
class EditEjercicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            repeticiones: 0,
            series: 0,
            peso: 0,
            submitted: false,

            max_series: 5,
            min_series: 1,

            max_repeticiones: 30,
            min_repeticiones: 1,

            min_peso: 1,
            max_peso: 200,

            loading: false,
        };
        this.saveEjercicio = this.saveEjercicio.bind(this);
        this.onSetDefault = this.onSetDefault.bind(this);
        this.aumentar = this.aumentar.bind(this);
        this.disminuir = this.disminuir.bind(this);
    }

    componentDidMount() {
        this.onSetDefault()
    }

    componentDidUpdate() {
        var actual_r = this.state.repeticiones
        var actual_s = this.state.series
        var actual_p = this.state.peso
        var ref1 = document.getElementById('page_repeticiones_' + actual_r.toString())
        var ref2 = document.getElementById('page_series_' + actual_s.toString())
        var ref3 = document.getElementById('page_peso_' + actual_p.toString())
        if (ref1) { ref1.scrollIntoView(); }
        setTimeout(() => {
            if (ref2) { ref2.scrollIntoView(); }
        }, 700)
        setTimeout(() => {
            if (ref3) { ref3.scrollIntoView(); }
        }, 1000)
    }

    onSetDefault() {
        var nombre = this.props.ejercicio.nombre
        var repeticiones = this.props.ejercicio.repeticiones
        var series = this.props.ejercicio.series
        var peso = this.props.ejercicio.peso ? this.props.ejercicio.peso : 10
        this.setState({ nombre });
        this.setState({ repeticiones });
        this.setState({ series });
        this.setState({ peso });
    }

    saveEjercicio() {
        this.setState({ loading: true, });
        var id = this.props.ejercicio.nombre
        var data = {}
        data['repeticiones'] = this.state.repeticiones
        data['series'] = this.state.series
        data['peso'] = this.state.peso

        var keys = Object.keys(data)
        for (var i = 0; i < keys.length; i++) {
            if (this.props.ejercicio[keys[i]] !== data[keys[i]]) {
                var value = {}
                value[keys[i]] = data[keys[i]]
                GymServices.updateEjercicio(id, value).then(() => {
                    console.log("Update successfully!");
                    this.setState({ loading: false, });
                    setTimeout(() => {
                        this.props.finalizar()
                    }, 500);
                })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        }
    }

    aumentar(type) {
        var siguiente = this.state[type] + 1
        if (siguiente <= this.state["max_" + type]) {
            document.getElementById('page_' + type + '_' + siguiente.toString()).scrollIntoView();
            setTimeout(() => {
                this.setState({ [type]: siguiente });
            }, 500)
        }
    }

    disminuir(type) {
        var anterior = this.state[type] - 1
        if (anterior >= this.state["min_" + type]) {
            document.getElementById('page_' + type + '_' + anterior.toString()).scrollIntoView();
            setTimeout(() => {
                this.setState({ [type]: anterior });
            }, 500)
        }
    }

    render() {

        var pages_repeticiones = []
        var pages_series = []
        var pages_peso = []
        for (let i = 0; i < 31; i++) {
            pages_repeticiones.push(<scroll-page key={i + 'r'} id={"page_repeticiones_" + i.toString()}>{i}</scroll-page>)
        }
        for (let i = 0; i < 6; i++) {
            pages_series.push(<scroll-page key={i + 's'} id={"page_series_" + i.toString()}>{i}</scroll-page>)
        }
        for (let i = 0; i < 201; i++) {
            pages_peso.push(<scroll-page key={i + 'p'} id={"page_peso_" + i.toString()}><span>{i}</span></scroll-page>)
        }

        return <div className="menu_edit" id="">

            <div className="nombre_ejercicio">Editar {this.state.nombre}</div>
            <div>

                <div className="center_edit">
                    <span>REPETICIONES</span>
                    <button id="disminuir" className="btn_sta" onClick={() => this.disminuir('repeticiones')}>
                        <img id="arrow_down" alt="item" src={arrow} onClick={() => this.disminuir('repeticiones')}></img>
                    </button>
                    <scroll-container>
                        {pages_repeticiones}
                    </scroll-container>
                    <button id="aumentar" className="btn_sta" onClick={() => this.aumentar('repeticiones')}>
                        <img id="arrow_up" alt="item" src={arrow} onClick={() => this.aumentar('repeticiones')}></img>
                    </button>
                </div>

                <div className="center_edit">
                    <span>SERIES</span>
                    <button id="disminuir" className="btn_sta" onClick={() => this.disminuir('series')}>
                        <img id="arrow_down" alt="item" src={arrow}></img>
                    </button>
                    <scroll-container>
                        {pages_series}
                    </scroll-container>
                    <button id="aumentar" className="btn_sta" onClick={() => this.aumentar('series')}>
                        <img id="arrow_up" alt="item" src={arrow}></img>
                    </button>
                </div>

                <div className="center_edit">
                    <span>PESO</span>
                    <button id="disminuir" className="btn_sta" onClick={() => this.disminuir('peso')}>
                        <img id="arrow_down" alt="item" src={arrow}></img>
                    </button>
                    <scroll-container>
                        {pages_peso}
                    </scroll-container>
                    <button id="aumentar" className="btn_sta" onClick={() => this.aumentar('peso')}>
                        <img id="arrow_up" alt="item" src={arrow}></img>
                    </button>
                </div>


                {(this.state.loading !== false) ?
                    <div className="loading_edit">
                        <Loading text={"Cargando Información"}></Loading>
                    </div>
                    : null}



                <div className="ultraflex_space margin_ex">
                    <button onClick={this.props.cancelar} className="salir_b btn_sta" id="btn_rojo">
                        CANCELAR
                    </button>
                    <button onClick={this.saveEjercicio} className="btn_sta" id="btn_verde">
                        GUARDAR
                    </button>
                </div>

            </div>

        </div>;
    }

}
export default EditEjercicio;