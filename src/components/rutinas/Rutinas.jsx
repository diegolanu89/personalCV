

import React from "react";
//import GymServices from '../../services/GymServices'
import './Rutinas.css';


class Rutinas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rutinas : [],
        };
        
    }

    componentDidMount() {
        
    }

    


    render() {
        var opciones = this.props.rutinas
        var values = this.props.rutinas
        var buttons = [];

        for (var i = 0; i < opciones.length; i++) {
            let value = values[i]
            buttons.push(<button key={i} onClick={() => this.props.seleccionar(value)}> {opciones[i].nombre}</button>)
        }

        return <div className="section font_app">
           
            <div>
                <div>Rutinas</div>
                {buttons}
               

            </div>
        </div>;
    }

}
export default Rutinas;