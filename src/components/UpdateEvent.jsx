import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import EventFinder from '../apis/EventFinder';
import { EventsContext } from '../context/EventsContext';

const UpdateEvent = (props) => {
    const {id} = useParams();
    // navigate user back to homepage after updating event info
    let navigate = useNavigate();
    const { event } = useContext(EventsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const response = await EventFinder.get(`/${id}`)
            console.log(response.data.data) 
            setName(response.data.data.event.name)
            setLocation(response.data.data.event.location)
            setPriceRange(response.data.data.event.price_range)
        };

        fetchData()
    }, []);

    //handle submit function to update event via api
    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateEvent = await EventFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange,
        });
        navigate("/");
    };

    return (
        <div>
            <form action="">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input value = {name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>
              </div>

              <div className="form-group">
                  <label htmlFor="name">Location</label>
                  <input value = {location} onChange={e => setLocation(e.target.value)} id="location" className="form-control" type="text"/>
              </div>
              
              <label htmlFor="price_range">Price range</label>
              <div className="col">
                        <select value = {priceRange} 
                        onChange={e => setPriceRange(e.target.value)} 
                        className= "custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                     </div>
                     <button type = "submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateEvent;
