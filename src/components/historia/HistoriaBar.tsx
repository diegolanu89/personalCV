import React from "react";
import './historia.css';
import '../menu/Home.css';
import { useEffect } from "react";

interface Props {
    img: string[]
    actual: any
    update_info: (e: any) => (any)
    types: string[]
    tittles: string[]
    info_jobs: string[] | string
}

const HistoriaBar: React.FC<Props> = ({ img, actual, update_info, types, tittles, info_jobs }) => {

    const mostrar_trabajo = (value: string) => {
        var ws = require('../../assets/' + info_jobs)();
        var obtener_info = ws[value];
        var response = obtener_info();
        update_info(response)
    }

    useEffect(() => {
        var index = tittles
        var page = 'page_' + index.indexOf(actual.titulo)
        var element = document.getElementById(page)
        if (element !== null) {
            element.scrollIntoView(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actual])


    let jobs = []
    var tittle = tittles
    var imagenes = img
    for (var i = 0; i < types.length; i++) {
        let type_ = types[i]
        jobs.push(
            <div key={i + 'p'} id={'page_' + i.toString()}>
                <button key={i} id={actual.titulo === tittle[i] ? 'cronica_slide_selected' : 'cronica_slide'}
                    onClick={() => mostrar_trabajo(type_)} >
                    <img id="icono_h_bar" alt="item" src={imagenes[i]}></img>
                </button>
            </div>
        );
    }

    return <div id="scroll_history">
        {jobs}
    </div>;

}

export default HistoriaBar;