import React from "react";
import './SlideMenu.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface Props {
  links: string[]
  texts: string[]
  icons: string[]
}


export const SlideMenu = ({ links, texts, icons }: Props) => {

  const [desplegado, setDesplegado] = useState<boolean>(false)
  const [elements, setElements] = useState<any[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    var elem = []
    for (let i = 0; i < links.length; i++) {
      elem.push(<div key={i} id='link_slide' onClick={() => navigate(links[i])}>
        <div className={icons[i]}></div>
        <div>{texts[i]}</div>
      </div>)
    }
    setElements(elem)
  }, [links, texts, icons, navigate]);


  return <div id="slide">

    {(desplegado === true) ?
      <div className='slide_desplegado'>
        <div className='menu_burger' onClick={() => setDesplegado(false)}></div>
        <div id='links_expands' onClick={() => setDesplegado(false)}>{elements}</div>

      </div>
      :
      <div className='menu_burger' onClick={() => setDesplegado(true)}></div>
    }
  </div>;


}

export default SlideMenu;