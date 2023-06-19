import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { Calendar4Week } from 'react-bootstrap-icons';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    console.log(date);
    setDate(date);
  };

  const NavigationComponent = (props) => {
    console.log(props.label);


    return (
      <>
        <Stack style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', }}>
          <Calendar4Week size={30} />
          <p style={{ fontSize: '20', margin: 0, fontWeight: 'bold', flex: 2 }}>Renewal Calendar</p>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{props.label.slice(0, -4)}</p>
        </Stack>
      </>
    )
  }

  return (
    <Stack style={{ borderRadius: 20, backgroundColor: 'white', padding: 20, paddingTop: 10, boxShadow: "0 0.3rem 1rem #36454F", }}>
      <Calendar
        className={'container'}
        onChange={onChange}
        value={date}
        prev2Label={null}
        next2Label={null}
        showNavigation={true}
        navigationLabel={NavigationComponent}
      />
    </Stack>
  );
};

export default CalendarComponent;