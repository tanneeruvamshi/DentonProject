import React from 'react';
import Calendar from './Calendar';
// If there are additional components like a booking form, import them here

const Reservation = () => {
    return (
        <div className="reservation-container">
            <h2>Make a Reservation</h2>
            <Calendar />
            {/* Include additional components like a booking form here if necessary */}
        </div>
    );
};

export default Reservation;
