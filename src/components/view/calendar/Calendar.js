import React, { useState, useEffect } from 'react';
import './Calendar.scss'
import {myContext} from '../ganeral/Womens'


const Calendar = () => {
    const [currentCalendarData, setCurrentCalendarData] = useState([]);
    const [daysStr] = useState(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])
    function getDateCells(firstDayOfMonth, lastDayOfMonth) {
        const intDay = firstDayOfMonth.getDay();
        const lastDate = lastDayOfMonth.getDate();
        let index = 0;
        let calendardata = [];
        let celll = {
            cellId: 0,
            dateOnly: -1,
            day: -1,
            dayStr: '',
            state: false,
            val: 0
        }
        for (let i = 0; i < 42; i++) {
            celll = {
                cellId: 0,
                dateOnly: -1,
                day: -1,
                dayStr: '',
                state: false,
                val: i
            }
            if (intDay + index === i) {
                if (index < lastDate) {
                    celll = {
                        dateOnly: (index + 1),
                        day: i % 7,
                        dayStr: daysStr[i % 7],
                        state: true,
                        val: i
                    };
    
                }
                index = index + 1;
                console.log('index', index)
                console.log('celll + ', celll)

            }


            calendardata.push(celll)
            console.log('calendardata + ', celll)
        }
        return calendardata;
    }
    useEffect(() => {
        let date = new Date();
        let data = getDateCells(new Date(date.getFullYear(), date.getMonth(), 1), new Date(date.getFullYear(), date.getMonth() + 1, 0))
        setCurrentCalendarData(data);
    }, [])


    return (
        <div>
          <h2 className="text-center">React calendar</h2>
            <div className="month-calendar">
                <div className="grid-container">
                    {currentCalendarData.map(row =>

                        <div className="grid-item" key={row.val}>
                            <h3>{row.dateOnly}</h3>

                        </div>
                    )}
                </div>
            </div>
            <myContext.Consumer>{data => <h5>Roll no: {data.roll} and School: {data.school}</h5>}</myContext.Consumer>
        </div>
    )

}
export default Calendar;