import React from "react";
import { useState, useEffect, useRef } from "react";
import './CardViewer.css'
import { DetailsJob } from './types'

interface Props {
    info: DetailsJob[]
    icons?: boolean
    adition: any | null
}

const CardViewer: React.FC<Props> = ({ info, adition }) => {

    const [cards, setCard] = useState<any[]>([]);
    const [isTop, setIsTop] = useState<boolean>(true)
    const bottomRef = useRef<null | HTMLDivElement>(null);


    const handleScroll = (e: React.UIEvent<HTMLElement>) => {

        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (bottom) {
            console.log("BOTTOM")
            setIsTop(false)
        } else {
            setIsTop(true)
        }
        /*if (e.currentTarget.scrollTop === 0) {
            console.log("TOOOOP")
        }*/
    }

    useEffect(() => {
        console.log("update card")
        var jobs: any = []
        for (var i = 0; i < info.length; i++) {
            jobs.push(<div key={i} id={info[i].small ? "cardh" : "card"} ref={i === 0 ? bottomRef : null}>
                <div id="content_img_C">
                    <div className="back_imgc"><div id="icono_c" className={info[i].icon}></div></div>
                    <div id="conteiner_tittle">
                        <div id="tittle_c">{info[i].titulo}</div>
                        <div id="subtittle_c">{info[i].subtitulo}</div>
                    </div>
                </div>
                {info[i].descripcion.length !== 0 ? <div id="decripcionC">{info[i].descripcion}</div> : null}
            </div>);
        }
        setCard(jobs)
    }, [info])

    return <div id="historia" >
        <div className="section_history_body" onScroll={handleScroll} >
            {cards}
            {adition}
            {cards.length >= 2 && adition ?
                <div><div className='arrow_less' onClick={() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}></div></div>
                : null}
            {isTop === true && adition ? <div id="reference"><div className='arrow_down'></div></div> : null}
        </div>

    </div>;
}

CardViewer.defaultProps = {

}

export default CardViewer;