import React from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.css'

interface Props {
  back?: boolean
  home?: boolean
  funcion?: () => void
}

const LinkerBar: React.FC<Props> = ({ back, funcion, home }) => {
  const navigate = useNavigate();

  return <div >
    {back ?
      <div className="arrow_back" onClick={() => funcion!()}></div>
      :
      <div className="home" onClick={() => navigate("/")}></div>
    }

  </div>;


}

export default LinkerBar;