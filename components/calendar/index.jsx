import React, { useState } from 'react';
import { Form } from "./Form_calendar";
import { List } from './List_Calendar';

export function AppCalendar() {
    const [month, setMonth] = useState(new Date().getMonth()),
     [year, setYear] = useState(new Date().getFullYear()),
     handleSelectDate = (selectedMonth, selectedYear) => {
        setMonth(selectedMonth);
        setYear(selectedYear);
    };

    return   <fieldset>
            <legend>Calendar</legend>
            <Form onSelectDate={handleSelectDate} />
            <List month={month} year={year} />
        </fieldset>
}
