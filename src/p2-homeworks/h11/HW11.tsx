import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Switch} from "antd";

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(80)
    const [disabled, setDisabled] = useState(false)

    const handleDisabledChange = () => {
        setDisabled(!disabled);
    };

    const onChangeRangeHandler = (value:number[] ) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange
                    disabled={disabled}
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange disabled={disabled}
                                  defaultValue={[value1, value2]}
                                  value={[value1, value2]}
                                  onChangeRange={onChangeRangeHandler}
                />
                <span>{value2}</span>
            </div>
            Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/>
        </div>
    )
}

export default HW11
