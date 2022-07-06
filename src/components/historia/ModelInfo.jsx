import React from "react";
import './model_info.css';
import arrow from '../slides/arrow_right.png';

class ModelInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animation_active: null,
      show:'flex',
    };
    this.handleChange = this.handleChange.bind(this);
    this.set_animation = this.set_animation.bind(this);
  }

  handleChange = (value, derecha) => {
    this.set_animation(derecha?'slide_right 0.5s linear 1':'slide_left 0.5s linear 1')
    setTimeout(() => {
      this.setState({ show: 'none' });
    }, 500);
    setTimeout(() => {
      var ws = require('../../assets/ws.js')();
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
      this.props.update(datos)
      this.setState({ show: 'flex' });
      this.set_animation(derecha?'slide_right_end 0.5s linear 1':'slide_left_end 0.5s linear 1')
    }, 500);
  }

  set_animation = (direction) => {
    this.setState({ animation_active: direction });
  }

  render() {
    
    return <div id="job" style={{ animation: this.state.animation_active , display:this.state.show}}>
      <div id="background_interno">
        <div id="filter_interno">
      <div className="info_input" key="cash" id="info_job">
        <div id="fechas_bar">
            <div id="fecha_ini">{this.props.request.fecha_inicial}</div>
            <div id="fecha_fin">{this.props.request.fecha_final}</div>
        </div>
        <div id='tit_j'>{this.props.request.titulo}</div>
        <div id='inf_j'>{this.props.request.info}</div>
        <div id='cargo'>Función: {this.props.request.cargo}</div>

      </div>

      <div className="bar_model">
      <div className="info_input" id="ba" key="be">
        {this.props.request.before ?
          <button className="bt_j_l" onClick={this.handleChange.bind(this, this.props.request.before.toLowerCase(), false)}>
            <img id="icon_slide_arrow_inv" alt="item" src={arrow} onClick={this.handleChange.bind(this, this.props.request.before.toLowerCase(), false)}></img>
            <span id="sl">Trabajo Anterior : {this.props.request.before}</span>
          </button>
          :
          <button className="bt_j_l">
            Sin trabajos Anteriores
          </button>
        }
      </div>


      <div className="info_input" id="ba" key="af">
        {this.props.request.after ?
          <button className="bt_j_r" onClick={this.handleChange.bind(this, this.props.request.after.toLowerCase(), true)}>

            <span id="sr">Trabajo Posterior : {this.props.request.after} </span>
            <img id="icon_slide_arrow" alt="item" src={arrow} onClick={this.handleChange.bind(this, this.props.request.after.toLowerCase(), true)}></img>
          </button>
          :
          <button className="bt_j_r">
            Sin trabajos posteriores
          </button>}
      </div>
      </div>
      </div>
      </div>
    </div>;

  }
}

export default ModelInfo;