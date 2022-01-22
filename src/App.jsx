import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import EventDetailPage from './routes/EventDetailPage'; 
import { EventsContextProvider } from './context/EventsContext';

const App = () =>{ 
  return ( <EventsContextProvider>
    <Router>
      <div className="container">
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/events/:id/update" element ={<UpdatePage/>}/>
          <Route path = "/events/:id" element ={<EventDetailPage/>}/>
        </Routes>
        </div> 
    </Router>
  </EventsContextProvider>
  )
};

export default App;
