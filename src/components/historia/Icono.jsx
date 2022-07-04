import React from "react";


class Icono extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ruta: this.props.ruta,
    };
  }

  render() {
    //var ruta = require('../images/' + this.state.ruta + '.jpg');
    return <div id="imagen">
            <img alt="item" className="icono" src={''}></img>
    </div>;

  }
}

export default Icono;