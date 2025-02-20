import React, { useState } from 'react';
import axios from 'axios';
function EventForm() {

    const [eventName, setEventName] = useState('');
    const [eventDay, setEventDay] = useState('');
    const [recurrenceDay , setRecurrenceDay] = useState('');

    const requiredDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];  
    

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await axios.post('http://localhost:3000/addEvent',{ 
                eventName,
                eventDay,
                recurrenceDay,
            });
            
        } catch(error){ 
            console.log("error adding new event");
            
        }
    };

  return (
    <div>
      <h2>Create some event</h2>
      <form onSubmit={handleSubmit}>
        <label> 
            Event name
            <input type = 'text' value = {eventName} onChange={(e) => setEventName(e.target.value)}></input>
        </label>
        <br/>
        <label> 
            event day 
            <select value={eventDay} onChange={(e) => setEventDay(e.target.value)}>
            <option value=" "> select the eventDay</option> 
            {requiredDays.map((day) => (
                <option key={day} value={day}>{day}</option>
            ))}
            </select>
        </label>
        <br/>
        <label>
            recurrenceDay
            <select value={recurrenceDay} onChange={(e) => setRecurrenceDay(e.target.value)}>
            <option > select the recurrenceday</option> 
            {requiredDays.map((day) => (
                <option key={day} value={day}>{day}</option>
            ))}
            </select>
        </label>

        <br/> 

        <button type= "submit"> Create an event</button>
      </form>
    </div>
  )
}

export default EventForm
