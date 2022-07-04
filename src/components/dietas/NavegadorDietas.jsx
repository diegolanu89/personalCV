import React from "react";
import './NavegadorDietas.css'
import { Link } from 'react-router-dom'
import CalendarSelector from "./CalendarSelector";

class NavegadorDietas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        return <div id="slide">

            <div className="section_link">
                <Link to="/">Volver</Link> {" "}
            </div>

            <div className="section font_app">DIETA</div>

            <div className="section font_app">Seleccione un día para agendar comidas</div>

            <div className='section font_app'>
                <CalendarSelector/>
            </div>
            
        </div>;

    }
}

export default NavegadorDietas;