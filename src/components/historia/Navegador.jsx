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

    handle_get_info_modal(response) {
        this.setState({ response });
    }

    clean = () => {
        if (this.state.his)
            this.setState({ his: false });
        else
            this.setState({ his: true });
    }

    render() {

        return <div className="section_back_home home">

            <div id="conteiner">

                {this.state.his ?
                    <div className="section_bar_home ">
                        <Link to="/">Home</Link> {" "}
                    </div>
                    :
                    <div className="section_bar_home ">
                        <a onClick={() => this.clean()}>Volver </a> {" "}
                    </div>


                }

                <div className="section_home_body background" id="background_center">
                    <div className="blur">
                        {(this.state.his) ?

                            <div >
                                <Historia types={this.props.types} 
                                tittles={this.props.tittles} 
                                update_info={this.handle_get_info} 
                                info_jobs={this.props.info_jobs}
                                img ={this.props.img}
                                />
                            </div>

                            : null}

                        {(this.state.his) === false ?

                            <div id="job">
                                <ModelInfo  request={this.state.response} 
                                update={this.handle_get_info_modal} 
                                info_jobs={this.props.info_jobs}/>

                                <HistoriaBar img ={this.props.img} 
                                actual={this.state.response} 
                                update_info={this.handle_get_info_modal} 
                                types={this.props.types} 
                                tittles={this.props.tittles}
                                info_jobs={this.props.info_jobs}
                                />
                            </div>

                            : null}
                    </div>
                </div>
            </div>
        </div>;

    }
}

export default Navegador;