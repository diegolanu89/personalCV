import React from "react";
import './AddEjercicio.css';
import GymServices from '../../services/GymServices'
import Loading from '../modals/Loading'
import arrow from '../slides/arrow_right.png';
class AddEjercicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            repeticiones: 0,
            series: 0,
            peso: 0,
            musculo: "",
            tipo: "",
            submitted: false,
            loading: false,
            max_series: 5,
            min_series: 1,

            max_repeticiones: 30,
            min_repeticiones: 1,

            min_peso: 1,
            max_peso: 200,

        };
        this.saveEjercicio = this.saveEjercicio.bind(this);
        this.setLoading = this.setLoading.bind(this);
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

        /*
        this.setState({ nombre });
        this.setState({ repeticiones });
        this.setState({ series });
        this.setState({ peso });*/
    }

    /*onChangePeso = e => {
        const peso = e.target.checked;
        this.setState({ peso });
    }*/

    onChangeNombre = e => {
        const nombre = e.target.value;
        this.setState({ nombre });
    }

    /*onChangeRepeticiones = e => {
        const repeticiones = e.target.value;
        this.setState({ repeticiones });
    }*/

    /*onChangeSeries = e => {
        const series = e.target.value;
        this.setState({ series });
    }*/

    onChangeTipo = e => {
        const tipo = e.target.value;
        this.setState({ tipo });
    }

    onChangeMusculo = e => {
        const musculo = e.target.value;
        this.setState({ musculo });
    }

    saveEjercicio() {
        this.setState({ loading: true, });
        var data = {}
        data['nombre'] = this.state.nombre
        data['repeticiones'] = this.state.repeticiones
        data['series'] = this.state.series
        data['peso'] = this.state.peso
        data['tipo'] = this.state.tipo
        data['musculo'] = this.state.musculo
        //ALERT Y MASK PARA FORMULARIO
        this.setLoading()
        GymServices.addEjercicio(data).then(() => {
            console.log("Created successfully!");
            this.setState({ submitted: true, });
            this.props.update();
        })
            .catch((e) => {
                this.setState({ loading: false, });
                console.log(e);
            });
    }

    setLoading() {
        if (this.state.loading === true) {
            this.setState({ loading: false, });
        } else
            this.setState({ loading: true, });
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

        return <div className="section_add_ejercicios " id="">

            <div className="section_form">
                <div className="section_title_add_ejercicios">ADICIONAR EJERCICIO</div>

                <div id="">
                    <div className="form-group input_add_div">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control input_add" id="nombre" required value={this.state.nombre}
                            onChange={this.onChangeNombre} name="nombre" />
                    </div>

                    <div className="form-group input_add_div">
                        <label htmlFor="tipo">Tipo</label>
                        <input type="text" className="form-control input_add" id="tipo" required value={this.state.tipo}
                            onChange={this.onChangeTipo} name="tipo" />
                    </div>

                    <div className="form-group input_add_div">
                        <label htmlFor="musculo">Músculo</label>
                        <input type="text" className="form-control input_add" id="musculo" required value={this.state.musculo}
                            onChange={this.onChangeMusculo} name="musculo" />
                    </div>

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
                        <Loading text={"Agregando Ejercicio"}></Loading>
                        : null}

                    <div id="nav_button_submit">

                        <button onClick={() => this.props.close()} className="salir_b" id="btn_rojo">
                            Cancelar
                        </button>

                        <button onClick={this.saveEjercicio} className="btn btn-success">
                            Guardar
                        </button>

                    </div>


                </div>
            </div>



        </div>;
    }

}
export default AddEjercicio;