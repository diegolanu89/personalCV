import React from "react";

class CardPesoAltura extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peso:0,
            altura:0,
            ready:false
            
        };
        this.checkDatos = this.checkDatos.bind(this);
    }

    onChangePeso = e => {
        const peso = parseFloat(e.target.value);
        this.setState({ peso });
        setTimeout(() => {
            this.checkDatos()
         }, 1000)
    }

    onChangeAltura = e => {
        const altura = parseFloat(e.target.value);
        this.setState({ altura });
        setTimeout(() => {
            this.checkDatos()
         }, 1000)
    }

    checkDatos(){
        if((this.state.peso > 0) && (this.state.altura > 0)){
            this.setState({ ready:true });
        }
        else{
            this.setState({ ready:false });
        }
    }

    next(){
        var data = {}
        data['peso']=this.state.peso;
        data['altura']=this.state.altura;
        this.props.next(data)
    }

    back(){
        this.props.back('back')
    }
    

    render() {



        return <div className="card_ficha ultraflex">
            
                    <div className="form_type">
                        <label htmlFor="peso">Peso (kg)</label>
                        <input type="number" className="form_input" id="peso" required value={this.state.peso}
                            onChange={this.onChangePeso} name="peso" />
                    </div>

                    <div className="form_type">
                        <label htmlFor="altura">Altura (m)</label>
                        <input type="number" className="form_input" id="altura" required value={this.state.altura}
                            onChange={this.onChangeAltura} name="altura" />
                    </div>

                    <div className="nav_card nav_r">
                    {(!this.props.initcard) ?
                             <button  className="btn_sta" onClick={() => this.back()}>volver</button>
                        : null}

                    {(this.state.ready === true) ?
                             <button  className="btn_sta" onClick={() => this.next()}>Finalizar</button>
                        : null}
                    </div>
        </div>;
    }

}
export default CardPesoAltura;