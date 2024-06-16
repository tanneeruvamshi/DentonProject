import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import emailjs from 'emailjs-com';

function ReservationCalendar() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDateTime(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedDate = selectedDateTime.toLocaleDateString();
    const selectedTime = selectedDateTime.toLocaleTimeString();
    const reservationDetails = {
      customerName: name,
      reservationDate: selectedDate,
      reservationTime: selectedTime,
    };

    try {
      await emailjs.send(
        'service_zxqqual',
        'template_3in8aup',
        reservationDetails,
        'H7eBPYy0wU1CJNx91'
      );
      setReservationSubmitted(true);
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <div>
      <Typography variant="h3">Reserve a Table</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date and Time"
            value={selectedDateTime}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
            openTo="year"
            views={['year', 'month', 'day', 'hours', 'minutes']}
            minDateTime={new Date()}
            required
          />
        </LocalizationProvider>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      {reservationSubmitted && <Typography>Reservation submitted successfully!</Typography>}
    </div>
  );
}

export default ReservationCalendar;
