import React from "react";
import './historia.css';
import '../menu/Home.css';
import ncr from '../../images/ncr.jpg';

class HistoriaBar extends React.Component {

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
        var ws = require('./ws.js')();
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
        //this.props.getInfo(response)
        this.props.update_info(response)
    }

    

    render() {
        let jobs = []
        var types = ['accesorios', 'tecnico', 'cetek', 'ncr']
        var tittle = ['Accesorios Sur','Técnico Informático','Cetek','NCR']
        for (var i = 0; i < types.length; i++) {
            jobs.push(<button key={i} id={this.props.actual.titulo ===tittle[i]?'cronica_slide_selected':'cronica_slide'} 
                    onClick={this.mostrar_trabajo.bind(this, types[i])} >
                        <img  id= "icono_h" alt="item" src={ncr}></img>
                    </button>);
        }

        return <div id="his_slide">
                <div    id="scroll_history">
                    {jobs}
                </div>
                
            </div>;

    }
}

export default HistoriaBar;