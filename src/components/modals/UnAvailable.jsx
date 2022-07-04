import React from "react";
import './UnAvailable.css';


class UnAvailable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
       
    }

    componentDidUpdate() {
    }

    render() {

        return <div >
           
            <div className="section">
                <div>{this.props.msj}</div>
            </div>
        </div>;
    }

}
export default UnAvailable;