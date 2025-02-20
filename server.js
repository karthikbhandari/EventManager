const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 

//route specify 

//empty event list 
let events = [];



//post route to add event 
app.post('/addEvent',(req, res) => { 
    const {eventName, eventDay, recurrenceDay} = req.body; 


    const newEvent = { 
        eventName, 
        eventDay, 
        recurrenceDay
    };

    EventSource.push(newEvent);
    res.status(200).json({message: 'Event added to events list'},events);


});

//get route to get events

app.get('/events', (req,res) => { 
    res.status(200).json(events);
});


//server port start 
app.listen(3000, ()=> { 
    console.log("server is running on ");
    
});

