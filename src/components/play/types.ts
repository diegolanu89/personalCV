
export type Cassetes = {
    idCassette: string;
    moneda: string;
    denominacion: number;
    cargaInicial: {
        cantidad: number;
        monto: number;
    },
    incremento: {
        cantidad: number;
        monto: number;
    },
    disminucion: {
        cantidad: number;
        monto: number;
    },
    dispensado: {
        cantidad: number;
        monto: number;
    },
    total: {
        cantidad: number;
        monto: number;
    }
}


export type Balanceos = {
    fechaHoraDesde: Date;
    fechaHoraHasta: Date;
    cassettes: Cassetes[];
    recycler: {
        cantidad: number;
        monto: number;
    };
    observaciones: string[];
    finished: boolean;   
}

export type ArmarBalanceoContableResponse = {
    ip: string;
    balanceos: Balanceos[];
    operaciones: any[];
    transacciones: any[];
    observaciones: string[];
    incluirOperaciones: boolean
}

export type ConfiguracionCajeroResponse = {
    codigoSucursal: string;
    habilitado: boolean;
    enServicio: boolean;
    pinSupervisor: string;
    pinSupervisorAdmin: string;
    timeoutBackEnd: number;
    timeoutInactivity: number;
    ipTerminal: string;
    version: string;
    sessionId: string;
    cantidadMaxBilletesCassettes: number;
    cantidadMaxBilletesRecycler: number;
    lumidigmEnabled: boolean;
    buildDateTime: string;
    listDenominaciones: number[];
}

export type AuditarTiraAuditoriaRequest = {
    fechaHora: Date,
    idTransaccion: string,
    ipTerminal: string,
    identificacion: string,
    descripcion: string,
    actor: string,
}
