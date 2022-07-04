import React from "react";
import './AddRutina.css';
import GymServices from '../../services/GymServices'
import Loading from '../modals/Loading'

class AddRutina extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            dias:"",
            submitted: false,
            loading:false,
            ejercicios:[],
            tipo:"Cardiovascular",
            list_to_add : [],
        };
        this.saveEjercicio = this.saveEjercicio.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.clean = this.clean.bind(this);
    }

    componentDidMount() {
    }

    filterEjercicios(e){
        var tipo = this.state.tipo
        var filtered = e.filter(function(value, index, arr){ 
            return value.props.tipo === tipo
        });
        return filtered
    }

    onChangeSelect= e => {
        var list_to_add = this.state.list_to_add;
        if(e.target.checked){
            const ejercicio_name = e.target.value;
            list_to_add.push(ejercicio_name)
            this.setState({ list_to_add });
        }else{
            var filtered = list_to_add.filter(function(value, index, arr){ 
                return value !== e.target.value;
            });
            this.setState({ list_to_add : filtered});
        }
    }

    onChangeNombre = e => {
        const nombre = e.target.value;
        this.setState({ nombre });
    }

    onChangeDias = e => {
        const dias = e.target.value;
        this.setState({ dias });
    }

    onChangeTipo = e => {
        this.clean();
        const tipo = e.target.value;
        this.setState({ tipo });
    }


    saveEjercicio() { this.setState({ loading: true, });
        var data = {}
        data['nombre'] = this.state.nombre
        data['dias'] = this.state.dias
        data['ejercicios'] = this.state.list_to_add
        this.setLoading()
            GymServices.addRutina(data).then(() => {
                console.log("Created successfully!");
                this.setState({ submitted: true, });
                this.props.update();
            })
                .catch((e) => {
                    console.log(e);
                });
    }

     setLoading() {
        if (this.state.loading === true) {
            this.setState({ loading: false, });
        } else
            this.setState({ loading: true, });
    }

    clean(){
        this.setState({ list_to_add: [], });
    }

    render() {

        var ejercicios = this.props.ejercicios
        var divs = [];

        for (var i = 0; i < ejercicios.length; i++) {
                divs.push(
                        <div  key={i} className=" border form-check form-switch" tipo={ejercicios[i].tipo}>
                            <input  key={i + 'b'} className="form-check-input" type="checkbox" id="ejercicio"
                                onChange={this.onChangeSelect} name="ejercicio" value={ejercicios[i].nombre} />
                            <label  key={i + 'c'} className="form-check-label" htmlFor="ejercicio">{ejercicios[i].nombre}</label>
                        </div>
                    )
        }

        return <div className="section" id="">
            
            <div className="section">
                <div>ADICIONAR RUTINA</div>

                <div>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" required value={this.state.nombre}
                            onChange={this.onChangeNombre} name="nombre" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dias">Días</label>
                        <input type="number" className="form-control" id="dias" required value={this.state.dias}
                            onChange={this.onChangeDias} name="dias" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <select className="form-control form-control-sm" id="tipo" required value={this.state.tipo} onChange={this.onChangeTipo}>
                            <option value="Cardiovascular" defaultValue>Cardiovascular</option>
                            <option value="Aeróbico">Aeróbico</option>
                            <option value="musculación">musculación</option>
                            <option value="Funcional">Funcional</option>
                            <option value="Crossfit">Crossfit</option>
                        </select>
                    </div>
                
                    {(this.state.tipo !== "") ?
                    <div className="section">
                        <div>ADICIONAR EJERCICIOS DE RUTINA</div>
                        {this.filterEjercicios(divs)}
                    </div>
                     : null}

                     
                    

                    <button onClick={this.saveEjercicio} className="btn btn-success">
                        Guardar
                    </button>
                </div>
            </div>

            

            {(this.state.loading !== false) ?
                <Loading text={"Agregando Rutina"}></Loading>
            : null}

        </div>;
    }

}
export default AddRutina;