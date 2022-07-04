import React from "react";
import './navegador.css';
import Historia from './Historia';
import ModelInfo from "./ModelInfo";
import HistoriaBar from "./HistoriaBar";

import { Link } from "react-router-dom";

class Navegador extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '',
            his: true,
        };
        this.handle_get_info = this.handle_get_info.bind(this);
        this.handle_get_info_modal = this.handle_get_info_modal.bind(this);
    }

    handle_get_info(response) {
        this.setState({ response });
        this.clean();
    };

    handle_get_info_modal(response){
        this.setState({ response });
    }

    clean=()=>{
        if(this.state.his)
            this.setState({ his:false });
        else
            this.setState({ his:true });
    }

    render() {

        return <div className="section_back_home home">
           
           <div id="conteiner">
           <div className="section_bar_home ">
                <Link to="/">Volver</Link> {" "}
            </div>
                    
            <div className="section_home_body">
            {(this.state.his) ?
                
                    <div >
                        <Historia  update_info={this.handle_get_info} />
                    </div>
                
                : null}

            {(this.state.his)===false ?
               
                    <div id="job">
                        <ModelInfo request={this.state.response} update={this.handle_get_info_modal}/>
                        <HistoriaBar actual={this.state.response} update_info={this.handle_get_info_modal}/>
                    </div>
                
                : null}
                </div>
        </div>
        </div>;

    }
}

export default Navegador;