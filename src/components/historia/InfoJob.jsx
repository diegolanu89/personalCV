import React from "react";
import './InfoJob.css';
import HistoriaBar from "./HistoriaBar";
import ModelInfo from "./ModelInfo";

class InfoJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      explanation: this.props.text,
      response: this.props.response,
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);

  }

  handleChangeTitle = (val) => {
    console.log("function");
  };

  render() {
    return <div id="conteiner">
      <ModelInfo request={this.props.actual} update={this.props.update_info}/>
      <HistoriaBar actual={this.props.actual} update_info={this.props.update_info}/>
    </div>;

  }
}

export default InfoJob;