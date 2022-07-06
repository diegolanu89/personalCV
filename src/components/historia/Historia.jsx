import React from "react";
import './historia.css';
import '../menu/Home.css';
import ncr from '../../images/ncr.jpg';
import cetek from '../../images/cetek.jpg';
import accesorios from '../../images/accesorios.jpg';
import tecnico from '../../images/tecnico.jpg';
import {jobs_title} from '../../assets/jobs.js'
import {jobs_index} from '../../assets/jobs.js'

class Historia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: this.props.now,
            explanation: "Lugares de Trabajo",
            loading: false,
            request: '',
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.mostrar_trabajo = this.mostrar_trabajo.bind(this);
    }

    handleChangeTitle = (val) => {
        this.setState({ show_reception: val });
    };

    mostrar_trabajo = (value) => {
        var ws = require('../../assets/ws.js')();
        var obtener_info = ws[value];
        var response = obtener_info();
        var datos = {}
        datos.titulo = response['titulo'];
        datos.cargo = response['cargo'];
        datos.info = response['info'];
        datos.fecha_inicial = response['fecha_inicial'];
        datos.fecha_final = response['fecha_final'];
        datos.before = response['before'];
        datos.after = response['after'];
        this.props.update_info(response)
    }

    render() {
        let jobs = []
        var types = jobs_index()
        var tittle = jobs_title()
        var iconos = [accesorios,tecnico,cetek,ncr]
        for (var i = 0; i < types.length; i++) {
            jobs.push(<button key={i} className='bot_h' id='cronica'
                    onClick={this.mostrar_trabajo.bind(this, types[i])} >
                        <img  id= "icono_h" alt="item" src={iconos[i]}></img>
                        <span>{tittle[i]}</span>
                    </button>);
        }

        return <div id="conteiner">
            <div className="section_title_body">{this.state.explanation}</div>
            <div className="section_history_body" >
                {jobs}
            </div>
        </div>;

    }
}

export default Historia;