import Navegador from "../components/historia/Navegador";
import { info_skills } from '../assets/skills.js'
import { skills_title } from '../assets/skills.js'
import { skills_index } from '../assets/skills.js'

import javascript from '../images/javascript.png';
import react from '../images/React.jpg';
import angular from '../images/Angular.jpg';
import java from '../images/Java.jpg';

import React from "react";

class SkillInterface extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
       
    };
    
}

  render() {

    var img_skills = [javascript, react, angular, java]

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