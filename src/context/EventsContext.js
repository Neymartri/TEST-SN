// Set up context API 
import React, {useState, createContext} from "react";

export const EventsContext = createContext();
//UseState to store the list of Events in backends 
export const EventsContextProvider = props => {
    const [events, setEvents] = useState([]);

// Render the selected event the user has clicked on
    const [selectedEvent, setSelectedEvent] = useState(null);

//Render UI for adding new events
    const addEvents = (event) => {
        setEvents([...events, event]);
    };
    return (
        <EventsContext.Provider value={{events, 
            setEvents, 
            addEvents, 
            selectedEvent, 
            setSelectedEvent
        }}>
            {props.children}
        </EventsContext.Provider>
    )
}