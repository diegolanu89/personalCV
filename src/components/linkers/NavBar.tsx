import React from "react";
import LinkerBar from './LinkBar'
import MenuInterface from '../../interfaces/MenuInterface'
import { Logout } from '../sesion/Logout'

interface Props {
  menu?: boolean
  home?: boolean
  logout?: boolean
  volver?: () => void
}

const NavBar: React.FC<Props> = ({ menu, volver, home, logout }) => {

  return <div className="navbar">
    {menu ? <MenuInterface /> : null}
    {volver ? <LinkerBar back={true} funcion={volver} /> : null}
    {home ? <LinkerBar home={true} /> : null}
    {logout ? <Logout /> : null}
  </div>;


}

export default NavBar;