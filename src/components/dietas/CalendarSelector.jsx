import React from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'
import Schedule from './Schedule'
import Event from './Event'
import './CalendarSelector.css'
import Loading from '../modals/Loading'
import DietServices from '../../services/DietServices'
import tenedor from './tenedor.png';
import EditEventComida from './EditEventComida'
import Reporte from './Reporte'
import Alert from '../modals/Alert'

class CalendarSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateState: new Date(),
      dateRelative:new Date(),
      schedule: false,
      calendar: true,
      date_selected: "",
      content: [],
      loading:false,
      text_loading:'',
      edit:false,
      show_event:false,
      event_selected:null,
      modal_alert:false,
      msj_alert:'',
      reportGenerated:true,
    };

    this.changeDate = this.changeDate.bind(this);
    this.select_day = this.select_day.bind(this);
    this.updateCalendar = this.updateCalendar.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setTextLoading = this.setTextLoading.bind(this);
    this.onActiveStartDateChangeHandler = this.onActiveStartDateChangeHandler.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.okAlert = this.okAlert.bind(this);
    this.cleanComida = this.cleanComida.bind(this);
    this.addContent = this.addContent.bind(this);
    this.reportGenerated = this.reportGenerated.bind(this);
  }

  componentDidMount() {
    this.updateCalendar(new Date())
  }

  checkDateContent(fecha,contenido){
    var filtered = contenido.filter(function(value, index, arr){ 
      return value.date.substring(3, 5) === moment(fecha).format("MM")
    });
    if(filtered.length >= 1){
      return true
    }
      return false
  }

  updateCalendar(date){
        var precontent = this.state.content;
        this.setLoading()
        this.setTextLoading("Actualizando")
            DietServices.getEventCalendarPerMonth(null,date).then(res => {
                console.log("update succefully")
                this.setState({ content :  precontent.concat(res), 
                                loading: false, 
                                show_event: false,
                                schedule:false});
            })
                .catch((e) => {
                    this.setState({ loading: false, 
                                    show_event: false,
                                    schedule:false,
                                    modal_alert:true,
                                    msj_alert:"No se puede acceder en este momento"
                                  });
                    console.log(e);
                });
    }

  changeDate = (dateState) => {
    this.setState({ dateState });
  };

  select_day = (date) => {
    var date_selected = moment(date).format("DD-MM-YYYY")
    var dates = this.state.content
    var exist_event = dates.find(e => e.date === date_selected)
    if (exist_event) {
      this.setState({
        show_event : true,
        date_selected: date,
        event_selected: exist_event,
        schedule: false,
        edit:false
      });
    } else {
      this.setState({ 
        edit:false,
        schedule: true, 
        show_event:false, 
        date_selected: date });
    }
  }

  setTextLoading(text){
      this.setState({ text_loading: text, });
  }

  setLoading() {
        if (this.state.loading === true) {
            this.setState({ loading: false, });
        } else
            this.setState({ loading: true, });
    }

    onActiveStartDateChangeHandler = ({ activeStartDate, value, view }) => {
      if(!this.checkDateContent(new Date(activeStartDate),this.state.content)){
        this.updateCalendar(new Date(activeStartDate))
      }
      this.setState({dateRelative:new Date(activeStartDate),
        schedule: false,
        show_event : false,
        reportGenerated:false,
      })
      setTimeout(() => {
        this.setState({reportGenerated:true})
      }, 500)
    };


  setEdit(){
    this.setState({ schedule: false, });
    this.setState({show_event:false});

    if (this.state.edit === true) {
      this.setState({ edit: false, });
  } else
      this.setState({ edit: true, });
  }

  okAlert(){
    this.setState({ msj_alert: "", 
                  modal_alert:false
              });
  }

  cleanComida(fecha){
    var filtered = this.state.content.filter(function(value, index, arr){ 
      return value.date !== fecha
    });
    this.setState({ content: filtered, });
  }

  addContent(data){
    var new_content = this.state.content
    this.setState({ content: new_content.concat(data), });
  }

  reportGenerated(type){
    this.setState({reportGenerated:type})
  }

  render() {
    
    const mark = this.state.content.map(e => e.date)
    return <div id="content_calendar">
      {(this.state.calendar) ?
        <div style={{ animation: 'aparecer 1s forwards' }}>
          <Calendar
            value={this.state.dateState}
            onActiveStartDateChange={this.onActiveStartDateChangeHandler}
            onChange={this.changeDate}
            tileClassName={({ date, view }) => { //para poner la class
              if (mark.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                return "highlight"
              }
            }}
            tileContent={({ date, view }) => { //Para poner contenido (texto u objetos)
              if (mark.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                  return <img id="icon_calendar"alt="item"  src={tenedor} onClick={this.select_day.bind(this, date)}></img>
              }else 
                  return <div id="cell_calendario" onClick={this.select_day.bind(this, date)}> </div>
            }}
          />
        </div>
        : null}
  
      {(this.state.schedule) ?
        <div id="section">
          <div style={{ animation: 'aparecer 1s forwards' }}>
            <Schedule 
              date={this.state.date_selected}
              updateEvent={this.updateCalendar}
              dateRelative={this.state.dateRelative ? this.state.dateRelative:this.state.dateState}
              addContent={this.addContent}
            ></Schedule>
          </div>
        </div>
        : null}

      {(this.state.edit) ?
        <div id="section">
          <div style={{ animation: 'aparecer 1s forwards' }}>
            <EditEventComida 
              date={this.state.date_selected}
              updateEvent={this.updateCalendar}
              dateRelative={this.state.dateRelative ? this.state.dateRelative:this.state.dateState}
            ></EditEventComida>
          </div>
        </div>
        : null}

      {(this.state.show_event) ?
        <div id="section">
          <div style={{ animation: 'aparecer 1s forwards' }}>
            <Event 
              date={this.state.date_selected} 
              event={this.state.event_selected}
              updateEvent={this.updateCalendar}
              dateRelative={this.state.dateRelative ? this.state.dateRelative : this.state.dateState}
              setEdit={this.setEdit}
              cleanComida={this.cleanComida}
            ></Event>
          </div>
        </div>
        : null}

      {(this.state.loading !== false) ?
                <Loading text={this.state.text_loading}></Loading>
            : null}

      {((this.checkDateContent(this.state.dateRelative,this.state.content))&&(this.state.reportGenerated)) ? //corregir
              <Reporte
                datos={this.state.content}
                date={this.state.dateRelative}
                generated={this.state.reportGenerated}
              />
      :null}

      {(this.state.modal_alert === true)?
          <Alert event={this.okAlert} msj={this.state.msj_alert}/>
    :null}
           

    </div>;
  }

}

export default CalendarSelector;