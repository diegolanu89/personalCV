import React from "react";
import './NuevaFicha.css';
import CardNombreEdad from "./CardNombreEdad";
import ModalConfirm from "../modals/ModalConfirm"
import {Salida} from "../modals/Salida"
import Loading from "../modals/Loading";
import CvServices from '../../services/CvServices'
import { Navigate } from 'react-router-dom';
class NuevaFicha extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            altura: 0,
            peso: 0,
            edad: 0,
            object: [
                <CardNombreEdad next={this.onchangeNombreEdad} back={this.handleChangeFicha} />,
               
            ],
            length: 2,
            actual: 0,
            back: false,
            next: false,
            confirmar: false,
            loading: false,
            loading_charge: '0%',
            loading_porcent: "Cargando Datos personales",
            redirect: false,
            alertError: false,
            salida:false,
        };
        this.handleChangeFicha = this.handleChangeFicha.bind(this);
        this.onchangeNombreEdad = this.onchangeNombreEdad.bind(this);
        this.setModalConfirm = this.setModalConfirm.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.submit = this.submit.bind(this);
        this.alertError = this.alertError.bind(this);
        this.salida = this.salida.bind(this)
    }
    

    handleChangeFicha = (move) => {
        var actual = this.state.actual
        if (move === 'next') {
            if (actual < this.state.length - 1) {
                actual++;
                this.setState({ actual });
            }
        } else {
            if (actual > 0) {
                actual--;
                this.setState({ actual });
            }
        }
    }

    onchangeNombreEdad = (data) => {
        this.setState({ nombre: data.nombre });
        this.setState({ apellido: data.apellido });
        this.setModalConfirm()
    }

    

    submit = () => {
        this.setState({ alertError: false, });
        console.log("SUBMIT")
        this.setModalConfirm()
        const data = {}
        data['nombre'] = this.state.nombre
        data['apellido'] = this.state.apellido
        data['new'] = false
        this.setLoading();
        this.setState({ loading_charge: '50%' })
        setTimeout(() => {
            CvServices.updateFicha(data).then(() => {
                this.setState({ loading_charge: '75%' })
                console.log('Ficha update')
                setTimeout(() => {
                    this.setState({ loading_charge: '100%' })
                }, 1000)
                setTimeout(() => {
                    this.setState({ redirect: true })
                }, 2000)
            })
                .catch((e) => {
                    this.setState({ loading_charge: '0%' })
                    setTimeout(() => {
                        this.setLoading();
                        this.alertError();
                        console.log(e);
                    }, 500)
                });
        }, 500)
    }

    setModalConfirm = () => {
        if (this.state.confirmar === true)
            this.setState({ confirmar: false })
        else
            this.setState({ confirmar: true })
    }


    setLoading() {
        if (this.state.loading === true) {
            this.setState({ loading: false, });
        } else
            this.setState({ loading: true, });
    }

    alertError() {
        if (this.state.alertError === true) {
            this.setState({ alertError: false, });
        } else
            this.setState({ alertError: true, });
    }

    salida() {
        if (this.state.salida === true) {
            this.setState({ salida: false, });
        } else
            this.setState({ salida: true, });
    }

    render() {


        return <div id="conteiner">
           
            <div className="section_bar_home right">
                <a href="#!" onClick={()=>this.salida()}>Cerrar sesión</a>
                </div>

            <div className="section_title_home">COMPLETE SUS DATOS PERSONALES
                {(this.state.loading !== false) ?
                    <Loading text={this.state.loading_porcent} carga={true} nivel={this.state.loading_charge}></Loading>
                    : null}
            </div>

            <div className="section_home_body">
                {this.state.object[this.state.actual]}
                <div className="logotipo_right_min">CV</div>
            </div>

            {(this.state.confirmar === true) ?
                <ModalConfirm
                    title={'¿Confirma los datos Ingresados?'}
                    confirmar={this.submit}
                    cancelar={this.setModalConfirm}
                    si={'Sí'}
                    no={'No'}
                />
                : null}

            {(this.state.alertError === true) ?
                <ModalConfirm
                    title={'Ocurrió un error ¿Desea intentar de nuevo?'}
                    confirmar={this.submit}
                    cancelar={this.alertError}
                    si={'Reintentar'}
                    no={'Cancelar'}
                />
                : null}

            {this.state.redirect ? (<Navigate push to="/" />) : null}

            {this.state.salida ? (<Salida  salida={this.salida}/>) : null}
            
        </div>;
    }



}
export default NuevaFicha;