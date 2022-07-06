import React from "react";
import './historia.css';
import '../menu/Home.css';

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

    componentDidUpdate=()=>{
        this.center_item_selected()
    }

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

    center_item_selected=()=>{
        var index = this.props.tittles
        var page = 'page_' + index.indexOf(this.props.actual.titulo)
        document.getElementById(page).scrollIntoView();
    }

    render() {
        let jobs = []
        var types = this.props.types
        var tittle = this.props.tittles
        var imagenes = this.props.img
        for (var i = 0; i < types.length; i++) {
            jobs.push(
                <scroll-page  key={i + 'p'} id={'page_' + i.toString()}>
                    <button key={i} id={this.props.actual.titulo ===tittle[i]?'cronica_slide_selected':'cronica_slide'} 
                    onClick={this.mostrar_trabajo.bind(this, types[i])} >
                        <img  id= "icono_h_bar" alt="item" src={imagenes[i]}></img>
                    </button>
                    </scroll-page>
                    );
        }

        return <div id="his_slide">
                <div    >
                <scroll-container id="scroll_history">
                        {jobs}
                </scroll-container>
                    
                </div>
                
            </div>;

    }
}

export default HistoriaBar;