import Navegador from "../components/historia/Navegador";
import { info_jobs, jobs_title, jobs_index, jobs_info_pre } from '../assets/jobs.js'
import ncr from '../images/ncr.jpg';
import cetek from '../images/cetek.jpg';
import accesorios from '../images/accesorios.jpg';
import tecnico from '../images/tecnico.jpg';
import React from "react";

const HistoriaInterface = () => {

  var img_jobs = [tecnico, accesorios, cetek, ncr]
  return <Navegador types={jobs_index()}
    title={"Lugares de Trabajo"}
    tittles={jobs_title()}
    img={img_jobs}
    info_jobs={info_jobs()}
    info_pre={jobs_info_pre()}
    skills={false} />

}

export default HistoriaInterface;