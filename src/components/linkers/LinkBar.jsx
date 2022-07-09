import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import volver from '../../images/arrow_right.png';
import home from '../../images/home.png';


class LinkerBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return <div >
      {this.props.function ?
        <div>
          <button id="link_button_volver" onClick={()=>this.props.function()}>
              <img  id=  "link_bar_img" alt="item" src={volver}></img>
          </button> {" "}
        </div>
        :
        <div>
          <Link  id="link_button" to={this.props.linker}>
              <img  id=  "link_bar_img" alt="item" src={home}></img>
          </Link> {" "}
        </div>

      }

    </div>;

  }
}

export default LinkerBar;