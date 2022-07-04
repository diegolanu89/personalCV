import React from "react";
import './Ejercicios.css';


class Ejercicios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
       
    }

    componentDidUpdate() {
    }

    render() {
        
        var ejercicios = this.props.ejercicios
        var values = this.props.ejercicios
        var buttons = [];

        for (var i = 0; i < ejercicios.length; i++) {
                let value = values[i]
                buttons.push(<button className="button_ejer" key={i} onClick={() => this.props.seleccionar(value)}> {ejercicios[i].nombre}</button>)
        }


        return <div className="" id="">
           
           {(this.props.ejercicios.length !== 0) ?
            <div className="grilla_ejercicios">
                {buttons}
            </div>
            : <div className="">
            <div>NO HAY EJERCICIOS PRESIONE ADD PARA AGREGARLOS</div>
            </div>}
        </div>;
    }

}
export default Ejercicios;