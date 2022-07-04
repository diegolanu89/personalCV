import { useRef, useState} from 'react';
import React from 'react'
import { jsPDF } from 'jspdf';
import './Reporte.css'
import moment from 'moment'
import Loading from "../modals/Loading";

function Reporte(props) {

  const pdfRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const [loadingCharge, setLoadingCharge] = useState('0%')
  const [loadingText, setLoadingText] = useState("Cargando información")
  const [show_reporte,mostrar_reporte]=useState(false)
  const [reporte,set_Reporte]=useState([])


  const generarReporte = () => {
    mostrar_reporte(false)
    console.log("Generando Reporte")
    setLoading(true);
    setLoadingText('Cargando comidas');
    charger(null,0,100,5)
    renderizarReporte()
  }


  const descargarPdf=()=>{
    console.log("Descargando PDF")
    const content = pdfRef.current;
    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save('sample.pdf');
      },
      html2canvas: { scale: 0.5 }
    });
  }

  const charger=(event,min,max,jump)=>{
    var counter = min
    var looper = setInterval(function(){ 
      counter++;
      if (counter === max){
        clearInterval(looper);
        setLoading(false);
        if(event !== null)
            event()
      }
        setLoadingCharge(counter.toString() + '%')
    }, jump);
  }
    
const renderizarReporte=()=>{
    var comidas = ['Desayuno', 'Almuerzo', 'Merienda', 'Cena', 'Colaciones']
    const dias = ['domingo', 'lunes','martes','miércoles','jueves','viernes','sábado'];
    var doc = []
    
    var fecha_inicial = new Date(props.date.getFullYear(),props.date.getMonth(),1)
    var fecha_final = new Date(props.date.getFullYear(),props.date.getMonth() + 1,0)
    var partes = 4
    if((fecha_final.getDate()) >28) partes = 5
    var fecha_comida = new Date(props.date.getFullYear(),props.date.getMonth(),1)

    var filas =[]
    for(let i=0;i<partes;i++){
      var celdas_fechas = []

      for(let j=0;j<7;j++){
          fecha_inicial.setDate(fecha_inicial.getDate() + (i === 0 && j === 0?0:1))
          if(j===0)celdas_fechas.push(<td key={"i"+ j + i}>{""}</td>)
          celdas_fechas.push(<td key={"o"+ j + i}>{dias[fecha_inicial.getDay()] + ' - ' + moment(fecha_inicial).format("DD")}</td>)
      }

      filas.push(<tr key={i + 'f'}>{celdas_fechas}</tr>)
      for(let x=0;x<5;x++){
        var celdas_comidas = []
        for(let k=0;k<7;k++){
          if(k===0)celdas_comidas.push(<td key={"x"+ k + x}>{comidas[x]}</td>)
          fecha_comida.setDate(fecha_comida.getDate() + (i === 0 && x === 0 && k === 0? 0:1))
          celdas_comidas.push(<td key={"o"+ k + x}>{getComidasDia(fecha_comida,comidas[x])}</td>)
        }
        fecha_comida.setDate(fecha_comida.getDate() - 7)
        filas.push(<tr key={'p' + i + x}>{celdas_comidas}</tr>)
      }
      fecha_comida.setDate(fecha_comida.getDate() + 7)

    }

    doc.push(<table key="tabl"><tbody>{filas}</tbody></table>)
    set_Reporte(doc)
    mostrar_reporte(true)
}

const getComidasDia=(fecha,comida)=>{
  fecha = moment(fecha).format("DD-MM-YYYY")
  var filtered = props.datos.filter(function(value, index, arr){ 
    return value.date === fecha
  });
  if(filtered.length === 1){
    return filtered[0][comida.toLowerCase()]
  }
  return  ' - '
}

return (

  <div className='section'>
    <div>{moment(props.date).format("DD-MM-YYYY")}</div>
    <div>
      <button onClick={generarReporte}>Generar Reporte</button>
      {(loading !== false) ?
      <Loading text={loadingText} carga={true} nivel={loadingCharge}></Loading>
      : null}
    </div>

    {((show_reporte) && (props.generated)) ?
      <div>
          <div ref={pdfRef} className="section reporte">
            {reporte}
          </div>
          <div>
            <button onClick={descargarPdf}>Descargar Reporte</button>
            <button onClick={()=>mostrar_reporte(false)}>Cerrar Reporte</button>
         </div>
      </div>
    : null }
    
  </div>
);
}

export default Reporte;