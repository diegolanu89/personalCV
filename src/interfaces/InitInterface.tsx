import NavInit from "../components/linkers/NavInit";
import { info_jobs } from '../assets/jobs.js'
import { jobs_title } from '../assets/jobs.js'
import { jobs_index } from '../assets/jobs.js'


import perfil from '../images/perfil_foto.jpeg';
import arrow from '../images/arrow_right.png';

import contact from '../images/contact.png';
import agenda from '../images/agenda.png';
import educacion from '../images/educacion.png';
import  skill from '../images/skill.png';
import telefono from '../images/telefono.png';
import trabajo from '../images/trabajo.png';
import certificado from '../images/certificado.png';

import React from "react";

const  InitInterface=()=>{
    const img_jobs = [perfil,arrow]
    const img_iconos = [trabajo,educacion,skill,contact,agenda,telefono,certificado]
    const tittle_iconos = ["Trabajos","Educación","Skills","Contactos","Agenda","LLámame","Certificados"]
    const links_iconos = ["/historia","/","/skills","/","/","/","/"]

    return <NavInit types={jobs_index()}
      tittles={jobs_title()}
      update_info={()=>console.log("selected")} 
      info_jobs={info_jobs()}
      img ={img_jobs}
      img_iconos={img_iconos}
      tittle_iconos={tittle_iconos}
      links_iconos={links_iconos}
      title={'Bienvenido'}
      />
}

export default InitInterface;