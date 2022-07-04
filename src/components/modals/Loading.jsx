import React from "react";
import './Loading.css';


class Loading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
       
    }

    componentDidUpdate() {
    }

    render() {

        return <div >
           
            <div className="absolute_loading">
                {(this.props.carga === true) ?
                       <div>
                    <div id="div_barra"> 
                        <div className="progressbar-container">
                                            <div className="progressbar-complete" style={{width: this.props.nivel}}>
                                                <div className="progressbar-liquid"></div>
                                            </div>
                                            <span className="porcentaje">{this.props.nivel}</span>
                        </div>
                    </div>
                    <div className="text_load">{this.props.text}</div>
                    </div>
                      
                    : 

                    <div>
                    <div id="spinner_conteiner">
                        <div id="loading-bar-spinner" className="spinner">
                            <div className="spinner-icon"></div>
                        </div>
                    </div>
                    <div className="text_load">{this.props.text}</div>
                    </div>
                }
               
            </div>
        </div>
    }

}
export default Loading;