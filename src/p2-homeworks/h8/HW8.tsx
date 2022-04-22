import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {SuperInput} from "./SuperInputH8special";

export type UserType = {
    _id: number
    name: string
    age: number
}
export type ActionType = {
    type: string
    payload: 'up' | 'down' | number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [age, setAge] = useState<any>(18)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            {p.name}, {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: age}))

    return (
        <div>
            <hr/>
            homeworks 8
            <br/>
            -------------------
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div>
                <SuperButton onClick={checkAge}>check</SuperButton>
                <SuperInput value={age} type={"number"} onChangeText={setAge}/>
            </div>
        </div>
    )
}

export default HW8
