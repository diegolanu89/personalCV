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

    const handleFranceDates = (d: Date) => {
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const offset = 2; // UTC of FRANCE is +02.00
        const france = utc + (3600000 * offset);
        const franceTimeNow = new Date(france);
        return franceTimeNow
    }

    const handleDate = (dateUTC: Date) => {
        var d = handleFranceDates(dateUTC)
        return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)
    }

    const handleDue = (d: Date) => {
        const actual_time = new Date()
        const actualTimeFrance = handleFranceDates(actual_time)
        const franceTimeCard = handleFranceDates(d)
        if (actualTimeFrance > franceTimeCard) {
            return true
        } else return false
    }

    useEffect(() => {
        var jobs: any = []
        for (var i = 0; i < info.length; i++) {
            jobs.push(<div className={info[i].date ? (handleDue(info[i].date) ? 'disabled_card' : 'normal') : 'normal'} key={i} id={info[i].small ? "cardh" : "card"} ref={i === 0 ? bottomRef : null}>
                {info[i].date ? <div id="dateCard">{handleDate(info[i].date)}</div> : null}
                <div id="content_img_C">
                    <div className="back_imgc"><div id="icono_c" className={info[i].icon}></div></div>
                    <div id="conteiner_tittle">
                        <div id="tittle_c">{info[i].titulo}</div>
                        <div id="subtittle_c">{info[i].subtitulo}</div>
                    </div>
                </div>
                {info[i].descripcion.length !== 0 ? <div id="decripcionC">{info[i].descripcion}</div> : null}
                {info[i].links ? <div id="decripcionC">
                    {info[i].links.map((e: any) => <div id="linkers">{e.text} <a href={e.link}>Ver</a></div>)}
                </div> : null}
            </div>);
        }
        setCard(jobs)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info])

    return <div id="historia" >
        <div className="section_history_body" onScroll={handleScroll} >
            {cards}
            {adition}
            {cards.length >= 2 ?
                <div><div className='arrow_less' onClick={() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}></div></div>
                : null}
            {isTop === true ? <div id="reference"><div className='arrow_down'></div></div> : null}
        </div>

    </div>;
}

CardViewer.defaultProps = {

}

export default CardViewer;