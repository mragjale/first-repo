import React, { useState, useReducer } from 'react';
import Chaild from './Chaild'

const initState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increament':
            return state + 1;
        case 'decreament':
            return state - 1;
        case 'reset':
            return initState;
        default:
            return state;
    }
}


export const userContext = React.createContext()
export const CounterContext = React.createContext()
const Parrent = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    const [userData] = useState({
        name: 'ghanshyam',
        job: 'SW developer'
    })
    const [companyName, setName] = useState('whiz it services')
    const [arrayData] = useState(['Wakeup', 'eat', 'sleep'])
    return (
        <CounterContext.Provider value={{ counterValue: count, dispatchMethod: dispatch }}>
            <userContext.Provider value={{ userData, companyName, arrayData, setName }}>
                <div>

                    <Chaild />

                </div>
            </userContext.Provider>
        </CounterContext.Provider>
    )
}
export default Parrent;