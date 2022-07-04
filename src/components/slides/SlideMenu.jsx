import React from "react";
import './SlideMenu.css'
import arrow from './arrow_right.png';
import { Link } from "react-router-dom";

class SlideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      desplegado: false,
    };
    this.desplegar = this.desplegar.bind(this);
  }

  desplegar() {
    if (this.state.desplegado === true)
      this.setState({ desplegado: false })
    else
      this.setState({ desplegado: true })
  }


  render() {

    var references = this.props.links
    var texts = this.props.texts
    var links = []
    for (let i = 0; i < references.length; i++) {
      if (texts[i] === "Volver") {
        links.push(<div key={i} id='link_slide_first'><Link to={references[i]}>
                        <img  id=  "icon_slide_arrow_inv" alt="item" src={arrow} onClick={() => this.desplegar()}></img>
                  </Link> {" "}</div>)
      } else
        links.push(<div key={i} id='link_slide'><Link to={references[i]}>{texts[i]}</Link> {" "}</div>)
    }


    return <div id="slide">

      {(this.state.desplegado === true) ?
        <div className="slide_desplegado" onClick={() => this.desplegar()}>
          {links}
        </div>
        :
        <div className="slide_oculto" onClick={() => this.desplegar()}>
          <img id="icon_slide_arrow" alt="item" src={arrow} onClick={() => this.desplegar()}></img>
        </div>
      }
    </div>;

  }
}

export default SlideMenu;