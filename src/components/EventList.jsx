import React, {useEffect, useContext} from 'react';
import EventFinder from '../apis/EventFinder';
import { EventsContext } from '../context/EventsContext';
import { useNavigate } from 'react-router-dom'; 
import StarRating from './StarRating';

const EventList = (props) => {
  const {events, setEvents} = useContext(EventsContext)
//  Add updatepage redirect from update button via useNavigate 
  let navigate = useNavigate()
// Fetch data as soon as user components is on UI screen
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EventFinder.get("/");
                setEvents(response.data.data.events);
            } catch(err) {
                console.log(err)
            }  
        }   
        
        fetchData();
    }, []);
//Add function to delete an event via api
     const handleDelete = async (e, id) => {
         e.stopPropagation();
        try{
          const response = await EventFinder.delete(`/${id}`);
          setEvents(events.filter(event => {
              return event.id !== id
          }));
        } catch(err) {
            console.log(err);
        }
     };

     //update function to redirect to updatePage
     const handleUpdate = (e, id) => {
        e.stopPropagation();
         navigate(`/events/${id}/update`);
     };

     const handleEventSelect = (id) => {
         navigate(`/events/${id}`)
     }
     //Render out the Avr star rating of a selected event 
     const renderRating = (event) => {
         if(!event.count) {
             return <span className="text-warning">0 reviews</span>
         }
         return(
         <>
         <StarRating rating={event.id} />
         <span className="text-warning ml-1">{event.count}</span>
         </>
         );
     };

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Events</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.map(event =>{
                        return (
                            <tr onClick={() => handleEventSelect(event.id)} key= {event.id}>
                            <td className="text-capitalize">{event.name}</td>
                            <td className="text-capitalize">{event.location}</td>
                            <td>{"$".repeat(event.price_range)}</td>
                            <td>{renderRating(event)}</td>
                            <td>
                                 <button onClick={(e)=> handleUpdate(e, event.id)} className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                 <button onClick ={(e) => handleDelete(e, event.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        );                
                    })};

                    {/* <tr>
                        <td>SouthBank Walk</td>
                        <td>SouthBank </td>
                        <td> $$ </td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>

                    <tr>
                        <td>SouthBank Walk</td>
                        <td>SouthBank </td>
                        <td> $$ </td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
             </table>
        </div>
    );
};

export default EventList; 
