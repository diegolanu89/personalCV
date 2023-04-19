import React from "react";
import './navegador.css';
import Historia from './Historia';
import ModelInfo from "./ModelInfo";
import HistoriaBar from "./HistoriaBar";
import NavBar from "../linkers/NavBar";
import { useState } from "react";

interface Props {
    types: string[]
    title: string
    tittles: string[]
    img: string[]
    skills: boolean
    info_jobs: string[] | string
    info_pre: string[] | string
}

const Navegador: React.FC<Props> = ({ types, title, tittles, img, skills, info_jobs, info_pre }) => {

    const [response, setResponse] = useState<any>(null);
    const [his, setHis] = useState<boolean>(true);

    const handle_get_info = (response: any) => {
        setResponse(response)
        clean();
    };

    const update_info_modal = (response: any) => {
        setResponse(response)
    }

    const clean = () => {
        his ? setHis(false) : setHis(true)
    }

    return <div id="navegador">

        {his ?
            <NavBar
                menu={true}
                home={true}
                logout={true}
            />
            :
            <NavBar
                menu={true}
                home={true}
                logout={true}
                volver={() => clean()}
            />
        }
        {(his) ?
            <div >
                <Historia types={types}
                    tittles={tittles}
                    update_info={handle_get_info}
                    info_jobs={info_jobs}
                    img={img}
                    title={title}
                    skill_mode={skills ? true : false}
                    info_pre={info_pre}
                />
            </div>
            : null}

        {(his) === false ?
            <div id="contenedor_historia">
                <ModelInfo request={response}
                    update_info={update_info_modal}
                    info_jobs={info_jobs}
                    skills={skills} />

                <HistoriaBar img={img}
                    actual={response}
                    update_info={update_info_modal}
                    types={types}
                    tittles={tittles}
                    info_jobs={info_jobs}
                />
            </div>
            : null}
    </div>;
}

export default Navegador;