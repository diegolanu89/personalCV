import React from "react";


class ModalDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
       
    }

    componentDidUpdate() {
    }

    render() {

        return <div className="section font_app">
                    ¿ESTAS SEGURO QUE DESEAS ELIMINAR ESTE EJERCICIO?
                    <div>
                    <button onClick={()=>this.props.confirmar(this.props.ejercicio)}>SI</button>
                    <button onClick={()=>this.props.cancelar(this.props.ejercicio)}>NO</button>
                    </div>
            </div>;
    }

}
export default ModalDelete;