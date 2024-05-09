import React, { useState } from 'react';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

function ReservationCalendar() {
    const [date, setDate] = useState(null);

    return (
        <div>
            <h3>Reserve a Table</h3>
            <div className="p-fluid p-grid p-formgrid">
                <div className="p-field p-col-12 p-md-4">
                    <label htmlFor="datetime">Date and Time</label>
                    <PrimeCalendar 
                        id="datetime" 
                        value={date} 
                        onChange={(e) => setDate(e.value)} 
                        showTime 
                        dateFormat="dd/mm/yy"
                        hourFormat="24" />
                </div>
            </div>
        </div>
    );
}

export default ReservationCalendar;
