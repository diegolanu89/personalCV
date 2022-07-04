import React from "react"
import { armarBalanceoContableMock } from './armarBalanceoContable'
//import { obtenerConfiguracionCajeroMock } from './obtenerConfiguracionCajero'
//import { ConfiguracionCajeroResponse, AuditarTiraAuditoriaRequest } from './types'

//import { EMPTY, forkJoin, map, Observable, OperatorFunction, switchMap, tap, of, concatMap } from "rxjs";
import { switchMap} from "rxjs";
interface Props {
    title?: string
    subtitle?: string
    event: (n: string) => void
}



const Play: React.FC<Props> = ({ title, event }) => {


    /*const setRequest = (configuracionCajero: ConfiguracionCajeroResponse, descripcion: any) => {
        const transaction: AuditarTiraAuditoriaRequest = {
            fechaHora: new Date(),
            idTransaccion: "",
            ipTerminal: configuracionCajero.ipTerminal,
            identificacion: configuracionCajero.sessionId,
            descripcion: descripcion,
            actor: "SUPERVISOR",
        }
        return transaction
    }*/


   

    const handlePlay = () => {
        const initBalanceo$ =
            armarBalanceoContableMock().pipe(
                //map(armarBalanceo => ({ armarBalanceo })),
                //tap(console.log),

                switchMap(armarBalanceo =>{
                    console.log("GIRANDO")
                    return "armarBalanceo"
                }),

        

                )
                /*switchMap(configuracionCajero => 
                    return of(configuracionCajero)
                }),
                map(configuracionCajero => ({ configuracionCajero })),*/
            


        initBalanceo$.subscribe(initBalanceo => {
                //console.log(initBalanceo$)
        });
    }



    return (
        <div className="section">
            {title}
            <div className="section">
                <button onClick={() => handlePlay()}>PLAY OBSERVABLE NOW</button>
            </div>
        </div>
    )
}

Play.defaultProps = {
    title: 'Play',
    subtitle: '',
};

export default Play