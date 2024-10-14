// import { Item } from './Item_Calendar';
import { memo } from 'react';

export const List = memo(function List({month, year }) {
    console.debug('List render');

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const startShift = (year, month) => {
        return new Date(year, month, 1).getDay() - 1; 
    };

    const renderCalendar = () => {
        const days = daysInMonth(year, month);
        const shift = startShift(year, month);
        let calendar = [];

        for (let m = 1 - shift; m <= days; m += 7) {
            let week = [];
            for (let i = m; i < m + 7; i++) {
                let cell = i < 1 || i > days ? '' : i; 
                week.push(<td key={i}>{cell}</td>);
            }
            calendar.push(<tr key={m}>{week}</tr>);
        }

        return <tbody>{calendar}</tbody>;
    };

    return <>
                <table>
                    <thead>
                        <tr>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>
                    </thead>
                    {renderCalendar()}
                </table>
        </>
});
