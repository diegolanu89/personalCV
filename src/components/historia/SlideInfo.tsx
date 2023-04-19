import React from "react";
import { useState, useEffect } from "react";
import './SlideInfo.css'

interface Props {
    info: string | boolean
    name?: string
    icons?: boolean
}

const SlideInfo: React.FC<Props> = ({ name, info, icons }) => {

    const [show, setShow] = useState<boolean>(false);
    const [show_text, setShowText] = useState<boolean>(false);
    const [icons_render, set_icons] = useState<any>()

    useEffect(() => {
        if (icons === true && info !== false) {
            set_icons((info as string).split(','))
        } else set_icons([])
        setShow(true)
    }, [icons, name, info])

    const setShowWithText = () => {
        setShow(true)
        setTimeout(() => {
            setShowText(true)
        }, 1000)
    }

    const clean = () => {
        setShow(false)
        setShowText(false)
    }




    return <div id='slide_content'>
        <div id="content_slider" onClick={() => show ? clean() : setShowWithText()}>
            {name}
            <div className={show ? "arrow_less" : "arrow_expand"}></div>
        </div>
        {show ?
            <div id="slider" onClick={() => show ? clean() : setShowWithText()}>

                {icons ?

                    icons_render.map((i: any) => <div className={i}></div>)

                    : show_text ? <div key='item_icon' id="text_slider">{info}</div> : null}


            </div> : null}
    </div>;


}

SlideInfo.defaultProps = {
    name: 'Información',

}

export default SlideInfo;