import React from 'react'
import AddEvent from '../components/AddEvent';
import EventList from '../components/EventList';
import Header from '../components/Header';

//Connect Header to Home Component
const Home = () => {
    return (
        <div>
            <Header/>
            <AddEvent/>
            <EventList/>
        </div>
    );
};

export default Home;
