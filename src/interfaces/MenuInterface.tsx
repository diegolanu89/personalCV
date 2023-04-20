import React from "react";
import SlideMenu from "../components/slides/SlideMenu";

const MenuInterface = () => {

    const references = ['/', '/', '/skills', '/historia', '/travels', '/']
    const texts = ['Contacto', 'Descargar CV PDF', 'Skills', 'Trabajos', 'Viajes', 'Volver']
    const icons = ['chat', 'download', 'star', 'badge', 'edit', 'arrow_back']

    return <SlideMenu links={references} texts={texts} icons={icons} />
}

export default MenuInterface;