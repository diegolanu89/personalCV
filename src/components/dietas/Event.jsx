import React from 'react'
import './Event.css'
import DietServices from '../../services/DietServices'
import Loading from '../modals/Loading'

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      text_loading: "",
      edit:false,
    };
  }

  onEdit = () => {
    this.props.setEdit();
  }

  onDelete = () => {
    console.log("DELETE")
    this.setLoading("Eliminando Comida")
    DietServices.deleteComida(this.props.event.date).then(res => {
      console.log("delete sucefully")
      this.setState({ loading: false, });
      this.props.cleanComida(this.props.event.date)
      //this.props.updateEvent(this.props.dateRelative)
    })
      .catch((e) => {
        this.setState({ loading: false, });
        console.log(e);
      });
  }

  setLoading(text) {
    if (this.state.loading === true) {
      this.setState({ loading: false, });
    } else {
      this.setState({ text_loading: text, });
      this.setState({ loading: true, });
    }
  }

  render() {

    return <div id="content_note">

      <div id="t_sh">
       {this.props.event.date}
      </div>

      {(this.props.event.almuerzo !== '') ?
        <div className="section">
          <div>Desayuno : {this.props.event.desayuno}</div>
        </div>
        : null}

      {(this.props.event.almuerzo !== '') ?
        <div className="section">
          <div>Almuerzo : {this.props.event.almuerzo}</div>
        </div>
        : null}

      {(this.props.event.almuerzo !== '') ?
        <div className="section">
          <div>Merienda : {this.props.event.merienda}</div>
        </div>
        : null}

      {(this.props.event.almuerzo !== '') ?
        <div className="section">
          <div>Cena : {this.props.event.cena}</div>
        </div>
        : null}

      {(this.props.event.almuerzo !== '') ?
        <div className="section">
          <div>Colaciones : {this.props.event.colaciones}</div>
        </div>
        : null}




      <div className='section'>
        <button className="" onClick={this.onDelete.bind()}>ELIMINAR</button>
        <button className="" onClick={this.onEdit.bind()}>EDITAR</button>
      </div>

      {(this.state.loading !== false) ?
        <Loading text={this.state.text_loading}></Loading>
        : null}

    </div>;
  }

}

export default Note;