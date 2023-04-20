import Navegador from "../components/historia/Navegador";
import { info_travels, travels_title, travels_index, travels_info_pre, details } from '../assets/travels.js'
import madrid from '../images/madrid.png';
import nerja from '../images/nerja.png';
import alemania from '../images/alemania.png';
import holanda from '../images/holanda.png';
import france from '../images/france.png';
import roma from '../images/roma.png';
import React from "react";

const TravelInterface = () => {

    var img_travels = [france, holanda, alemania, roma, nerja, madrid]
    return <Navegador types={travels_index()}
        title={"Destinos del Tour"}
        tittles={travels_title()}
        img={img_travels}
        info_jobs={info_travels()}
        info_pre={travels_info_pre()}
        skills={false}
        details={details()} />

}

export default TravelInterface;