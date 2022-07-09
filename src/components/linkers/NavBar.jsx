import React from "react";
import LinkerBar from './LinkBar'
import MenuInterface from '../../interfaces/MenuInterface'
import {Logout} from '../sesion/Logout'

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   
    return <div className="navbar">
                {this.props.menu?<MenuInterface/>:null}
                {this.props.volver?<LinkerBar volver={true} function={this.props.volver}/>:null}
                {this.props.home?<LinkerBar home={true} linker="/"/>:null}
                {this.props.logout?<Logout />:null}
            </div>;

  }
}

export default NavBar;