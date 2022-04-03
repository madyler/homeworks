import React from 'react'
import s from './Message.module.css'


type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.block}>
                <div className={s.name}>
                {props.name}
                </div>
                {props.message}
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
