import React from "react";
import './ModalConfirm.css'

class ModalConfirm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
       
    }

    render() {

        return <div className="alert">
                    <div className="text_modal">{this.props.title}</div>
                    <div className='nav_alert'>
                    <button id="btn_verde" className="btn_sta" onClick={()=>this.props.confirmar(this.props.ejercicio)}>{this.props.si}</button>
                    <button id="btn_rojo"  className="btn_sta" onClick={()=>this.props.cancelar(this.props.ejercicio)}>{this.props.no}</button>
                    </div>
            </div>;
    }

}
export default ModalConfirm;