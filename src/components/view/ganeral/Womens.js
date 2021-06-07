import React from 'react';
import Calendar from '../calendar/Calendar';
export const myContext = React.createContext();
const Womens = (props) =>  {
        return (
            <div>
                <h1 className="text-center text-danger">This is Womens</h1>
                <myContext.Provider value={{roll: 12, school: 'Dnyaneshwar vidyalaya'}}>
                <Calendar/>
            </myContext.Provider>
            </div>
        );
}

export default Womens;
