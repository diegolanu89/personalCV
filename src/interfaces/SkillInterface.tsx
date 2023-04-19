import Navegador from "../components/historia/Navegador";
import { info_skills, skills_title, skills_index } from '../assets/skills'

import javascript from '../images/js.png';
import react from '../images/react.png';
import angular from '../images/angular.png';
import java from '../images/java.png';
import django from '../images/django.png';

import React from "react";

const SkillInterface = () => {
  var img_skills = [javascript, react, angular, java, django]

  return (

    <Navegador types={skills_index()}
      title={"Skills"}
      tittles={skills_title()}
      img={img_skills}
      skills={true}
      info_jobs={info_skills()} />
  )



}

export default SkillInterface;