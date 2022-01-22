import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventFinder from '../apis/EventFinder';
import AddReview from '../components/AddReview';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { EventsContext } from '../context/EventsContext';

const EventDetailPage = () => {
    const {id} = useParams();
    const {selectedEvent, setSelectedEvent} = useContext(EventsContext)

    //fetch a particular event name and render it on eventDetailPage via api
    useEffect(() => {
        const fetchData = async () => {

            try {
            const response = await EventFinder.get(`/${id}`);

            setSelectedEvent(response.data.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData()
    }, []);

    //only render event name when event name is selected
    return (
        <div>
            {selectedEvent && (
                <>
                <h1 className ="text-center display-1 text-capitalize">{selectedEvent.event.name}</h1>
                {/* Reviews has access to events and reviews */}
                <div className="text-center">
                {/* Render out the avr star rating in selected event via review counts in db */}
                    <StarRating rating={selectedEvent.event.average_rating} />
                    <span className="text-warning ml-1">
                        {selectedEvent.event.count ? `(${selectedEvent.event.count})` : "(0)"}
                    </span>
                </div>
                <div className="mt-3">
                    <Reviews reviews={selectedEvent.reviews}/>
                </div>
                <AddReview/>
                </>
            )}
        </div>
    );
};

export default EventDetailPage;
