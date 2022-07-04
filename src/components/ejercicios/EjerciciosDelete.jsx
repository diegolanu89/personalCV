import React from "react";
import './EjerciciosDelete.css';
import GymServices from "../../services/GymServices";
import Loading from '../modals/Loading'

class EjerciciosDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list_to_delete : [],
            loading : false,
        };
       this.eliminarSeleccionados = this.eliminarSeleccionados.bind(this);
       this.setLoading = this.setLoading.bind(this);
    }

    componentDidUpdate() {
    }

    onChangeSelect= e => {
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

    eliminarSeleccionados(){
        var list = this.state.list_to_delete;
        this.setLoading()
        for(var i=0;i<list.length;i++){
            // eslint-disable-next-line no-loop-func
            GymServices.deleteEjercicio(list[i]).then(() => {
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
        
        var ejercicios = this.props.ejercicios
        var divs = [];

        for (var i = 0; i < ejercicios.length; i++) {
                divs.push(
                        <div  key={i} className=" border form-check form-switch">
                            <input  key={i + 'b'} className="form-check-input" type="checkbox" id="ejercicio"
                                onChange={this.onChangeSelect} name="ejercicio" value={ejercicios[i].nombre} />
                            <label  key={i + 'c'} className="form-check-label" htmlFor="ejercicio">{ejercicios[i].nombre}</label>
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
                <button onClick={()=> this.eliminarSeleccionados()} className="btn btn-success">
                        Eliminar Seleccionados
                </button>
            </div> : null }

            {(this.state.loading !== false) ?
                <Loading text={"Eliminando seleccionados"}></Loading>
            : null}

        </div>;
    }

}
export default EjerciciosDelete;