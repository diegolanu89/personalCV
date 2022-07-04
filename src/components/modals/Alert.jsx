import React from "react";
import './Alert.css'

class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   
    return <div className="alert">
            <div>{this.props.msj}</div>
            <div><button className="alert_click" id="alert_click" onClick={this.props.event}>OK</button></div>
    </div>;

  }
}

export default Alert;