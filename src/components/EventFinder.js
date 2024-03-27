import React, { useState } from 'react';
import axios from 'axios';
import './EventFinder.css'; // Import the CSS file

const EventList = () => {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    date: ''
  });

  const [events, setEvents] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/api/events/find?latitude=${formData.latitude}&longitude=${formData.longitude}&date=${formData.date}`);
      console.log("response :-", response.data.events);
      setEvents(response.data.events);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Failed to fetch events. Please try again.');
    }
  };

  return (
    <div className="list-container"> {/* Apply the CSS class */}
      <h2>Find Events</h2>
      <form onSubmit={handleSubmit}>
        <label>Latitude:</label>
        <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} required />
        <label>Longitude:</label>
        <input type="number" name="longitude" value={formData.longitude} onChange={handleChange} required />
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Find Events</button>
      </form>
      <div>
  <h3>Events:</h3>
  <ul>
    {events && events.map((event, index) => (
      <li key={index}>
        <div className="event-details">
          <span className="event-name">{event.event_name}</span>
          <span className="event-city">in {event.city_name}</span>
          <span className="event-date">on {event.date}</span>
          <span className="event-weather">- Weather: {event.weather}</span>
          <span className="event-distance">- Distance: {event.distance_km} km</span>
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default EventList;
