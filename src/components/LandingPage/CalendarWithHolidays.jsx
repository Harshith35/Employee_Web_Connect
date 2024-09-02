import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarWithHolidays.css';

// List of public holidays (day and month)
const publicHolidays = [
    { day: 1, month: 0 },  // New Year's Day (1st January)
    { day: 25, month: 11 },  // Christmas Day (25th December)
    { day: 4, month: 6 },  // Example Holiday (4th July)
    // Add more holidays here
];

const CalendarWithHolidays = () => {
    const [date, setDate] = useState(new Date());

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const isHoliday = publicHolidays.some(holiday => 
                holiday.day === date.getDate() &&
                holiday.month === date.getMonth()
            );

            if (isHoliday) {
                return 'highlight';
            }
        }
    };

    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
            />
        </div>
    );
};

export default CalendarWithHolidays;
