import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalenderDate = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className='flex justify-center mt-24'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default CalenderDate;