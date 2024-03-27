import React from 'react';
import './App.css';
import EventForm from './components/EventForm';
import EventFinder from './components/EventFinder';

function App() {
  return (
    <div className="App">
      <h1>Event Management System</h1>
      <EventForm />
      <EventFinder />
    </div>
  );
}

export default App;
