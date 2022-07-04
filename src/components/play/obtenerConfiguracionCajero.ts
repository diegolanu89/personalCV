import {Observable, of } from "rxjs";
import { ConfiguracionCajeroResponse } from "./types";


export const obtenerConfiguracionCajeroMock = (): Observable<ConfiguracionCajeroResponse> => {

   

    const responseMock: ConfiguracionCajeroResponse = {
        "habilitado": true,
        "enServicio": true,
        "pinSupervisor": "368ade811e4380cb6ab47e05131fa9d2bbc3a48650bdb8053fa1e7dee81c487574e94b2c66b3a04ef1d8650eb8eabaff7a97e9163ed7229eb8d30b3b1e8a9cca",
        "pinSupervisorAdmin": "33837284",
        "timeoutBackEnd": 30000,
        "timeoutInactivity": 300000,
        "ipTerminal": "172.16.129.1",
        "version": "dev.version",
        "sessionId": "7429db831d5c7ac8",
        "codigoSucursal": "103",
        "cantidadMaxBilletesCassettes": 2300,
        "cantidadMaxBilletesRecycler": 2000,
        "lumidigmEnabled": false,
        "buildDateTime": "dev.time",
        "listDenominaciones": [
            100,
            200,
            500,
            1000
        ]
    }

   
        return of(responseMock)
    

}
