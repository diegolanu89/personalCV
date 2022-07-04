

import React from "react";
//import GymServices from '../../services/GymServices'
import './DetalleRutina.css';


class DetalleRutina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ejercicio : [],
        };
        
    }

    componentDidMount() {

    }

    


    render() {

        var nombre = this.props.rutina.nombre
        

        return <div className="menu" id="menu">
           
            <div className="section font_app">
                <div>Detalle rutina</div>
                <div>Nombre:{nombre}</div>
                

            </div>
        </div>;
    }

}
export default DetalleRutina;