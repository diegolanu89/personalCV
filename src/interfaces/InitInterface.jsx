import NavInit from "../components/linkers/NavInit";
import { info_jobs } from '../assets/jobs.js'
import { jobs_title } from '../assets/jobs.js'
import { jobs_index } from '../assets/jobs.js'
import ncr from '../images/ncr.jpg';
import cetek from '../images/cetek.jpg';
import accesorios from '../images/accesorios.jpg';
import tecnico from '../images/tecnico.jpg';
import React from "react";

class InitInterface extends React.Component{
  render() {
    var img_jobs = [accesorios, tecnico, cetek, ncr]
    return (
      <NavInit types={jobs_index()}
      tittles={jobs_title()}
      update_info={()=>console.log("selected")} 
      info_jobs={info_jobs()}
      img ={img_jobs}
      title={'Bienvenido'}
      />
      )
    }
}

export default InitInterface;