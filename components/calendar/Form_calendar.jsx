import { memo, useState, useEffect } from 'react';
// import { List } from './List_Calendar';

export const Form = memo(function ({onSelectDate }) {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const handleMonthChange = (event) => {
   
        const selectedMonth = new Date(event.target.value).getMonth();
        setMonth(selectedMonth);
        onSelectDate(selectedMonth, year);
    };

    return  <>
            <div>
                <input 
                    type="month"  
                    onChange={handleMonthChange}
                />
            </div>
        </>
});
