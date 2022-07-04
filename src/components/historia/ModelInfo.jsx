import React from "react";
import './model_info.css';
import arrow from '../slides/arrow_right.png';

class ModelInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      datos: {
        titulo: this.props.request.titulo,
        cargo: this.props.request.cargo,
        info: this.props.request.info,
        fecha_inicial: this.props.request.fecha_inicial,
        fecha_final: this.props.request.fecha_final,
        before: this.props.request.before,
        after: this.props.request.after
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange = (value) => {
    var ws = require('./ws.js')();
    var obtener_info = ws[value];
    var response = obtener_info()
    var datos = {}
    datos.titulo = response['titulo'];
    datos.cargo = response['cargo'];
    datos.info = response['info'];
    datos.fecha_inicial = response['fecha_inicial'];
    datos.fecha_final = response['fecha_final'];
    datos.before = response['before'];
    datos.after = response['after'];
    this.setState({ datos });
    this.props.update(datos)
  }

  handleUpdate = (datos) => {
    this.setState({ datos });
  }

  render() {

    return <div id="job">
      <div className="info_input" key="cash" id="info_job">
        <div id="fecha_ini">{this.state.datos.fecha_inicial}</div>
        <div id="fecha_fin">{this.state.datos.fecha_final}</div>
        <div id='tit_j'>{this.state.datos.titulo}</div>
        <div id='inf_j'>{this.state.datos.info}</div>
        <div id='cargo'>Cargo : {this.state.datos.cargo}</div>

      </div>

      <div className="info_input" id="ba" key="be">
        {this.state.datos.before ?
          <button className="bt_j_l" onClick={this.handleChange.bind(this, this.state.datos.before.toLowerCase())}>
            <img id="icon_slide_arrow_inv" alt="item" src={arrow} onClick={this.handleChange.bind(this, this.state.datos.before.toLowerCase())}></img>
            <span id="sl">Trabajo Anterior : {this.state.datos.before}</span>
          </button>
          :
          <button className="bt_j_l">
            Sin trabajos Anteriores
          </button>
        }
      </div>


      <div className="info_input" id="ba" key="af">
        {this.state.datos.after ?
          <button className="bt_j_r" onClick={this.handleChange.bind(this, this.state.datos.after.toLowerCase())}>

            <span id="sr">Trabajo Posterior : {this.state.datos.after} </span>
            <img id="icon_slide_arrow" alt="item" src={arrow} onClick={this.handleChange.bind(this, this.state.datos.after.toLowerCase())}></img>
          </button>
          :
          <button className="bt_j_r">
            Sin trabajos posteriores
          </button>}
      </div>
    </div>;

  }
}

export default ModelInfo;