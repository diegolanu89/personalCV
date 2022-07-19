import React from "react";
import SlideMenu from "../components/slides/SlideMenu";

class Menunterface extends React.Component{
  render() {

    const references = ['/play', '/navegadorDietas', '/skills', '/historia', '/usuarioNuevo', '/']
    const texts = ['Contacto', 'Descargar CV PDF', 'Skills', 'Trabajos', 'Cambiar Datos de usuario', 'Volver']
   
    return (
     
        <SlideMenu links={references} texts={texts} />
     
      )
    }
}

export default Menunterface;