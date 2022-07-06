import Navegador from "../components/historia/Navegador";
/*import { info_jobs } from '../assets/jobs.js'
import { jobs_title } from '../assets/jobs.js'
import { jobs_index } from '../assets/jobs.js'

import ncr from '../images/ncr.jpg';
import cetek from '../images/cetek.jpg';
import accesorios from '../images/accesorios.jpg';
import tecnico from '../images/tecnico.jpg';*/

import React from "react";

class SkillInterface extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
       
    };
    
}

  render() {

    //var img_jobs = [accesorios, tecnico, cetek, ncr]
    return (
    
      <Navegador types={[]}
      tittles={[]}
      img={[]}
      info_jobs={[]}/>
      )
    
    }

}

export default SkillInterface;