import React from "react";
import SlideMenu from "../components/slides/SlideMenu";

class Menunterface extends React.Component{
  render() {

    const references = ['/play', '/navegadorDietas', '/skills', '/historia', '/editorRutinas', '/']
    const texts = ['Contacto', 'Descargar CV PDF', 'Skills', 'Trabajos', 'Informacion Personal', 'Volver']
   
    return (
     
        <SlideMenu links={references} texts={texts} />
     
      )
    }
}

export default Menunterface;