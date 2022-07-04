import React from "react";
import './EjerciciosRutina.css';
import DetalleEjercicio from "../ejercicios/DetalleEjercicio";


class EjerciciosRutina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ejercicio_seleccionado: null
        };
        this.seleccionar = this.seleccionar.bind(this);
    }

    componentDidUpdate() {

    }

    seleccionar(ejercicio_seleccionado) {
        this.setState({ ejercicio_seleccionado });
    }

    render() {

        var ejercicios = this.props.ejercicios
        var values = this.props.ejercicios
        var buttons = [];

        for (var i = 0; i < ejercicios.length; i++) {
            let value = values[i]
            buttons.push(<button key={i} onClick={() => this.seleccionar(value)}> {ejercicios[i]}</button>)
        }


        return <div className="menu" id="menu">

            <div className="section font_app">
                <div>EJERCICIOS</div>
                {buttons}
            </div>

            {(this.state.ejercicio_seleccionado !== null) ?
                <div id="section font_app">
                    <DetalleEjercicio
                        update={this.updateEjercicios}
                        eliminar={this.deleteEjercicio}
                        seleccionado={this.state.ejercicio_seleccionado}
                        edit={false}
                    ></DetalleEjercicio>
                </div>

                : null}
        </div>;
    }

}
export default EjerciciosRutina;