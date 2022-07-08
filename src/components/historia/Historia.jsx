import React from "react";
import './historia.css';
import '../menu/Home.css';

class Historia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: this.props.now,
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
        var ws = require('../../assets/' + this.props.info_jobs)();
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
        var types = this.props.types
        var tittle = this.props.tittles
        var iconos = this.props.img
        for (var i = 0; i < types.length; i++) {
            jobs.push(<button key={i} className='bot_h' id={this.props.skill_mode?"cronica_s":"cronica"}
                    onClick={this.mostrar_trabajo.bind(this, types[i])} >
                        <img  id= {this.props.skill_mode?"icono_h_s":"icono_h"} alt="item" src={iconos[i]}></img>
                        <span>{tittle[i]}</span>
                    </button>);
        }

        return <div id="conteiner">
            <div id="background_interno">
                <div id="filter_interno">
            <div className="section_title_body">{this.props.title}</div>
            <div className={this.props.skill_mode?"section_history_skills":"section_history_body"} >
                {jobs}
            </div>
            </div>
            </div>
        </div>;

    }
}

export default Historia;