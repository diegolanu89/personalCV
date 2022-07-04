import React from "react";
import './RutinasDelete.css';
import GymServices from "../../services/GymServices";
import Loading from '../modals/Loading'
import ModalDelete from "../modals/ModalDelete";

class RutinasDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list_to_delete : [],
            loading : false,
            modal_delete:false,
        };
       this.eliminarSeleccionados = this.eliminarSeleccionados.bind(this);
       this.setLoading = this.setLoading.bind(this);
       this.delete = this.delete.bind(this);
    }

    componentDidUpdate() {
    }

    onChangeSelect= e => {
        if (this.state.modal_delete === true) {
            this.setState({ modal_delete: false, });}
        var list_to_delete = this.state.list_to_delete;
        if(e.target.checked){
            const ejercicio_name = e.target.value;
            list_to_delete.push(ejercicio_name)
            this.setState({ list_to_delete });
        }else{
            var filtered = list_to_delete.filter(function(value, index, arr){ 
                return value !== e.target.value;
            });
            this.setState({ list_to_delete : filtered});
        }
    }

    delete(){
        if (this.state.modal_delete === true) {
            this.setState({ modal_delete: false, });
        } else{
            this.setState({ modal_delete: true, });
        }
    }

    eliminarSeleccionados(){
        var list = this.state.list_to_delete;
        this.setLoading()
        for(var i=0;i<list.length;i++){
            // eslint-disable-next-line no-loop-func
            GymServices.deleteRutina(list[i]).then(() => {
                console.log("Deleted successfully!");
                if(i === list.length){
                    this.props.update()
                }
              })
              .catch((e) => {
                console.log(e);
              });
        }
    }

    setLoading() {
        if (this.state.loading === true) {
            this.setState({ loading: false, });
        } else
            this.setState({ loading: true, });
    }

    render() {
        
        var rutinas = this.props.rutinas
        var divs = [];

        for (var i = 0; i < rutinas.length; i++) {
                divs.push(
                        <div  key={i} className=" border form-check form-switch">
                            <input  key={i + 'b'} className="form-check-input" type="checkbox" id="ejercicio"
                                onChange={this.onChangeSelect} name="ejercicio" value={rutinas[i].nombre} />
                            <label  key={i + 'c'} className="form-check-label" htmlFor="ejercicio">{rutinas[i].nombre}</label>
                        </div>
                    )
        }

        return <div className="section" >
           
            <div>
                <div>SELECIONE PARA ELIMINAR</div>
                {divs}
            </div>

            {(this.state.list_to_delete.length > 0) ?
            <div>
                <button onClick={()=> this.delete()} className="btn btn-success">
                        Eliminar Seleccionados
                </button>
            </div> : null }

            {(this.state.modal_delete !== false) ?
                    <ModalDelete cancelar={this.delete} confirmar={this.eliminarSeleccionados}></ModalDelete>
                : null}

            {(this.state.loading !== false) ?
                <Loading text={"Eliminando seleccionados"}></Loading>
            : null}

        </div>;
    }

}
export default RutinasDelete;