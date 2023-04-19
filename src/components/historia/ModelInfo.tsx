import React from "react"
import './model_info.css'
import { useState } from "react"
import SlideInfo from "./SlideInfo"
import Card from "./CardViewer"

interface Props {
  request: any
  update_info: (e: any) => (any)
  info_jobs: string[] | string
  skills?: boolean
}

const ModelInfo: React.FC<Props> = ({ request, update_info, info_jobs, skills }) => {

  const [show, setShow] = useState<string>('flex');
  const [animation_active, SetAnimation_active] = useState<string>('');

  const handleChange = (value: string, derecha: boolean) => {
    SetAnimation_active(derecha ? 'slide_right 0.5s linear 1' : 'slide_left 0.5s linear 1')
    setTimeout(() => {
      setShow('none')
    }, 500);
    setTimeout(() => {
      var ws = require('../../assets/' + info_jobs)();
      var obtener_info = ws[value];
      var response = obtener_info()
      var datos = {
        titulo: response['titulo'],
        cargo: response['cargo'],
        info: response['info'],
        fecha_inicial: response['fecha_inicial'],
        fecha_final: response['fecha_final'],
        before: response['before'],
        after: response['after'],
        tecnologias: response['tecnologias'],
        descripcion: response['descripcion']
      }
      update_info(datos)
      setShow('flex')
      SetAnimation_active(derecha ? 'slide_right_end 0.5s linear 1' : 'slide_left_end 0.5s linear 1')
    }, 500);
  }

  return <div id="job" style={{ animation: animation_active, display: show }}>

    <div className="info_input" key="cash" id="info_job">
      <div id="fechas_bar">
        <div id="fecha_ini">{skills ? 'Desde ' : null}{request.fecha_inicial}</div>
        {skills === false ? <div id="fecha_fin">{request.fecha_final}</div> : null}
      </div>
      <div id='tit_j'>{request.titulo}</div>

      <div id="content_sl">
        {request.descripcion ? <Card info={request.descripcion}
          adition={request.tecnologias && skills === false ?
            <SlideInfo name={'Tecnologías'} info={request.tecnologias} icons={true} /> :
            null
          }
        /> : null}
      </div>

    </div>

    <div className="bar_model">
      <div className="info_input" id="ba" key="be">
        {request.before ?
          <button className="bt_j_l" onClick={() => handleChange(request.before.toLowerCase(), false)}>
            <div className="arrow_left" onClick={() => handleChange(request.before.toLowerCase(), false)}></div>
            <div>{request.before}</div>
          </button>
          :
          null
        }
      </div>

      <div className="info_input" id="ba" key="af">
        {request.after ?
          <button className="bt_j_r" onClick={() => handleChange(request.after.toLowerCase(), true)}>
            <div>{request.after}</div>
            <div className="arrow_right" onClick={() => handleChange(request.after.toLowerCase(), true)}></div>
          </button>
          :
          null}

      </div>
    </div>
  </div>;


}

export default ModelInfo;