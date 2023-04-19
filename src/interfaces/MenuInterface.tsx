import React from "react";
import SlideMenu from "../components/slides/SlideMenu";

const Menunterface = () => {

    const references = ['/', '/', '/skills', '/historia', '/usuarioNuevo', '/']
    const texts = ['Contacto', 'Descargar CV PDF', 'Skills', 'Trabajos', 'Cambiar Datos de usuario', 'Volver']
    const icons = ['chat', 'download', 'star', 'badge', 'edit', 'arrow_back']

    return <SlideMenu links={references} texts={texts} icons={icons} />
}

export default Menunterface;