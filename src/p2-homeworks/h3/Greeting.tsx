import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
    addUser: () => void
    setError: (error: string) => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError}
) => {
    const inputClass = error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback}
                   className={inputClass} onClick={() => setError('')}/>
            <span className={s.errorText}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
