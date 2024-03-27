import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css'; // Import the CSS file

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    event_name: '',
    city_name: '',
    date: '',
    time: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/events', eventData);
      alert('Event added successfully!');
      setEventData({
        event_name: '',
        city_name: '',
        date: '',
        time: '',
        latitude: '',
        longitude: ''
      });
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="form-container"> {/* Apply the CSS class */}
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input type="text" name="event_name" value={eventData.event_name} onChange={handleChange} required />
        <label>City Name:</label>
        <input type="text" name="city_name" value={eventData.city_name} onChange={handleChange} required />
        <label>Date:</label>
        <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
        <label>Time:</label>
        <input type="time" name="time" value={eventData.time} onChange={handleChange} required />
        <label>Latitude:</label>
        <input type="number" name="latitude" value={eventData.latitude} onChange={handleChange} required />
        <label>Longitude:</label>
        <input type="number" name="longitude" value={eventData.longitude} onChange={handleChange} required />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
