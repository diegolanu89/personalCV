import React from "react";
import './navinit.css';
import '../menu/Home.css';

class NavInit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            now: this.props.now,
            loading: false,

        };

    }

    render() {
       
             //   <div id="conteiner_img"><img id="icono_h" alt="item" src={iconos[i]}></img></div>
               

        return <div id="conteiner_init">


            <div id="background_interno_init">
                <div id="filter_interno_init">
                    <div className="section_init_body" >



                    
                        <div id="cronica_init" style={{ backgroundPosition: 'right' }}>
                            <div id="filter_note_1">
                                <div id="conteiner_img"></div>
                                <span></span>
                            </div>
                        </div>
                   
                        <div id="cronica_init" style={{ backgroundPosition: 'right' }}>
                            <div id="filter_note_1">
                                <div id="conteiner_img"></div>
                                <span></span>
                            </div>
                        </div>

                        <div id="cronica_init" style={{ backgroundPosition: 'center' }}>
                            <div id="filter_note_1">
                                <div id="conteiner_img"></div>
                                <span></span>
                            </div>
                        </div>

                        <div id="cronica_init" style={{ backgroundPosition: 'left' }}>
                            <div id="filter_note_1">
                                <div id="conteiner_img"></div>
                                <span></span>
                            </div>
                        </div>




                    </div>
                </div>
            </div>


        </div>;

    }
}

export default NavInit;