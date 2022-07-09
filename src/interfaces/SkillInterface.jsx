import Navegador from "../components/historia/Navegador";
import { info_skills } from '../assets/skills.js'
import { skills_title } from '../assets/skills.js'
import { skills_index } from '../assets/skills.js'

import javascript from '../images/js.png';
import react from '../images/react.png';
import angular from '../images/angular.png';
import java from '../images/java.png';
import django from '../images/django.png';

import React from "react";

class SkillInterface extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
       
    };
    
}

  render() {

    var img_skills = [javascript, react, angular, java,django]

    return (
    
      <Navegador types={skills_index()}
      title={"SKILLS"}
      tittles={skills_title()}
      img={img_skills}
      skills={true}
      info_jobs={info_skills()}/>
      )
    
    }

}

export default SkillInterface;