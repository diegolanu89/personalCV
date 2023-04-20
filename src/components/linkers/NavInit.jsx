import React from "react";
import './navinit.css';
import '../menu/Home.css';
import { Link } from "react-router-dom";

//import ruta from '../../assets/CV2020.pdf';

class NavInit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: this.props.now,
            loading: false,

        };

    }
    

    render() {
        let iconos_render= []
       const iconos= this.props.img_iconos
       const tittle = this.props.tittle_iconos
       const links = this.props.links_iconos

        for (var i = 0; i < iconos.length; i++) {
            iconos_render.push(
                        <div>
                        <Link   className='bot_icon_link'  to={links[i]}>
                            <img className="icon_init" alt="item" src={iconos[i]}></img>
                            <span>{tittle[i]}</span>
                        </Link> {" "}</div>
                   );
        }


        return <div id="conteiner_init">


            <div id="background_interno_init">
                <div id="filter_interno_init">
                    <div className="section_init_body" >

                        

                        <div id="cronica_init" style={{ backgroundPosition: 'center' }}>
                            <div id="filter_note_2">
                                <div className="conteiner_icons">
                                    {iconos_render}
                                </div>
                                    
                            </div>
                        </div>

                        

                        

                        




                    </div>
                </div>
            </div>


        </div>;

    }
}

/*
<div id="cronica_init" style={{ backgroundPosition: 'right' }}>
                            <div id="filter_note_1">
                                <div className="placa_1">
                                    <div className="img_per">
                                        <img id="img_personal" alt="item" src={this.props.img[0]}></img>
                                    </div>
                                    <div className="details_per">
                                        <div className="name_per">Diego Peyrano</div>
                                        <div className="posicion">
                                            <div>Posición Actual</div>
                                            <div>Desarrollador full stack</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="cronica_init" style={{ backgroundPosition: 'left' }}>
                            <div id="filter_note_1">
                                <div id="conteiner_img"></div>
                                <span></span>
                            </div>
                        </div>

                        <div id="cronica_init" style={{ backgroundPosition: 'right' }}>
                            <div id="filter_note_1">
                                <div className="placa_1">
                                    <div className="details_per">
                                        <div className="posicion">
                                            <div>Descargas</div>
                                            <div>Descargue mi CV en PDF</div>
                                        </div>
                                    </div>
                                    <div className="bot_placa">
                                        <button className="bot_planilla" >
                                            <a className="link" href={ruta} target="cv2020" download="CV" style={{ color: "white", textDecoration: 'none' }}>
                                                <img id="download" alt="item" src={this.props.img[1]}></img>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
*/

export default NavInit;