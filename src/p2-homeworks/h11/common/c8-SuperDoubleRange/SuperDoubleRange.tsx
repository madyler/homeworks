import React from 'react'
import {Slider} from "antd";
import s from "../c7-SuperRange/SuperRange.module.css";
import 'antd/dist/antd.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    disabled?: boolean
    defaultValue?: [number, number]
    onChange?: (value: [number, number]) => void
    min?: number
    max?: number
    step?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({...restProps}) => {
    return (
        <>
            <Slider range
                    className={s.range}
                    onChange={restProps.onChangeRange}
                    {...restProps}
            />
        </>
    )
}

export default SuperDoubleRange
