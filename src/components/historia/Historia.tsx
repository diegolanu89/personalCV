import React from "react";
import './historia.css';
import '../menu/Home.css';

interface Props {
    types: string[]
    tittles: string[]
    update_info: (e: any) => (any)
    info_jobs: string[] | string
    img: string[]
    title: string
    skill_mode: boolean
    info_pre: string[] | string
    details?: string[] | string
}

const Historia: React.FC<Props> = ({ types, tittles, title, update_info, info_jobs, img, skill_mode, info_pre, details }) => {

    const mostrar_trabajo = (value: string) => {
        var ws = require('../../assets/' + info_jobs)();
        var obtener_info = ws[value];
        var response = obtener_info();
        update_info(response)
    }

    let jobs = []
    var tittle = tittles
    var iconos = img
    var isdetails = false
    if (details !== undefined) isdetails = true
    for (var i = 0; i < types.length; i++) {
        let type_ = types[i]
        jobs.push(<button key={i} className='bot_h' id={skill_mode ? "cronica_s" : "cronica"} style={skill_mode ? { backgroundPosition: 'right' } : {}}
            onClick={() => mostrar_trabajo(type_)} >
            <div id="conteiner_img"><img id={skill_mode ? "icono_h_s" : "icono_h"} alt="item" src={iconos[i]}></img></div>
            <span id="tittle_card">{tittle[i]}</span>
            <span id="descript_card">{skill_mode ? null : info_pre[i]}</span>
            <span id="oc_card">{skill_mode ? null : (isdetails ? details![i] : null)}</span>
        </button>);
    }

    return <div id="historia">

        <div className="section_title_body">{title}</div>
        <div className={skill_mode ? "section_history_skills" : "section_history_body"} >
            {jobs}
        </div>

    </div>;


}

export default Historia;