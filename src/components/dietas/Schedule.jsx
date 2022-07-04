import React from 'react'
import moment from 'moment'
import './Schedule.css'
import Loading from '../modals/Loading'
import DietServices from '../../services/DietServices'

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      desayuno: '',
      almuerzo: '',
      merienda: '',
      cena: '',
      colaciones: '',
      loading: false,
      input:true
    };

    this.addComida = this.addComida.bind(this);
    this.onChangeComida = this.onChangeComida.bind(this);
  }

  onChangeComida = e => this.setState({
    [e.target.name]:
      e.target.value
  });

  addComida = () => {
    var fecha = moment(this.props.date).format("DD-MM-YYYY")
    var data = {}
    data['año'] = fecha.substring(6, 10)
    data['dia'] = fecha.substring(0, 2)
    data['mes'] = fecha.substring(3, 5)
    data['date'] = fecha
    data['almuerzo'] = this.state.almuerzo
    data['desayuno'] = this.state.desayuno
    data['colaciones'] = this.state.colaciones
    data['cena'] = this.state.cena
    data['merienda'] = this.state.merienda
    this.setState({ input: false, });
    this.setLoading()
    DietServices.addCalendarEventDiet(data).then(() => {
      console.log("Added successfully!");
      this.setLoading()
      this.props.addContent(data)
      //this.props.updateEvent(this.props.dateRelative)
    })
      .catch((e) => {
        this.setLoading()
        console.log(e);
      });
  }

  setLoading() {
    if (this.state.loading === true) {
      this.setState({ loading: false, });
    } else
      this.setState({ loading: true, });
  }


  render() {
    return <div id="content_schedule">

      {(this.state.loading !== false) ?
        <Loading text={"Agregando Comida"}></Loading>
        : null}


      
      {(this.state.input !== false) ?
        <div className='section'>

          <div id="t_sh">
            <div id="title_sh">{moment(this.props.date).format('MMMM Do YYYY')}</div>
            <div id="title_sht">Schedule</div>
          </div>

          <div className='section'>
            <div className="form-group">
              <label htmlFor="desayuno">Desayuno</label>
              <input type="text" className="form-control" id="desayuno" required value={this.state.desayuno}
                onChange={this.onChangeComida} name="desayuno" />
            </div>
          </div>

          <div className='section'>
            <div className="form-group">
              <label htmlFor="almuerzo">Almuerzo</label>
              <input type="text" className="form-control" id="almuerzo" required value={this.state.almuerzo}
                onChange={this.onChangeComida} name="almuerzo" />
            </div>
          </div>

          <div className='section'>
            <div className="form-group">
              <label htmlFor="merienda">Merienda</label>
              <input type="text" className="form-control" id="merienda" required value={this.state.merienda}
                onChange={this.onChangeComida} name="merienda" />
            </div>
          </div>

          <div className='section'>
            <div className="form-group">
              <label htmlFor="cena">Cena</label>
              <input type="text" className="form-control" id="cena" required value={this.state.cena}
                onChange={this.onChangeComida} name="cena" />
            </div>
          </div>

          <div className='section'>
            <div className="form-group">
              <label htmlFor="colaciones">Colaciones</label>
              <input type="text" className="form-control" id="colaciones" required value={this.state.colaciones}
                onChange={this.onChangeComida} name="colaciones" />
            </div>
          </div>

          <div className='section'>
            <button className="" onClick={this.addComida.bind()}>SUBMIT</button>
          </div>

        </div>
        : null}
     
    </div>;
  }
}

export default Schedule;