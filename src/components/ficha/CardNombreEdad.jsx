import React from "react";

class CardNombreEdad extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            ready: false,
        };
        this.checkDatos = this.checkDatos.bind(this);

    }

    onChangeApellido = e => {
        const apellido = e.target.value;
        this.setState({ apellido });
        setTimeout(() => {
            this.checkDatos()
        }, 1000)
    }

    onChangeNombre = e => {
        const nombre = e.target.value;
        this.setState({ nombre });
        setTimeout(() => {
            this.checkDatos()
        }, 1000)
    }

    checkDatos() {
        if ((this.state.nombre !== '') && (this.state.apellido !== '')) {
            this.setState({ ready: true });
        }
        else {
            this.setState({ ready: false });
        }
    }

    next() {
        var data = {}
        data['nombre'] = this.state.nombre;
        data['apellido'] = this.state.apellido;
        this.props.next(data)
    }

    render() {



        return <div className="card_ficha ultraflex">
            <div id="blur_ficha">
                <div id="background_interno">
                    <div id="filter_interno">
                        <div id="conteiner_card">
                            <div className="form_type">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form_input" id="nombre" required value={this.state.nombre}
                                    onChange={this.onChangeNombre} name="nombre" />
                            </div>

                            <div className="form_type">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" className="form_input" id="apellido" required value={this.state.apellido}
                                    onChange={this.onChangeApellido} name="apellido" />
                            </div>


                            {(this.state.ready === true) ?
                                <div className="nav_card">
                                    <button className="btn_sta" onClick={() => this.next()}>Continuar</button>
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>

        </div>;
    }

}
export default CardNombreEdad;