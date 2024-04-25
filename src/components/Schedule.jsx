import React, { useState, useEffect } from "react";
import "./Schedule.css";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventRoom, setNewEventRoom] = useState("");

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const addEvent = () => {
    const updatedEvents = [
      ...events,
      { title: newEventTitle, time: newEventTime, room: newEventRoom },
    ];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    // Очищаем поля ввода после добавления события
    setNewEventTitle("");
    setNewEventTime("");
    setNewEventRoom("");
  };

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1); // Удаление элемента из массива по индексу
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div>
      <h2>My Schedule</h2>
      {events.map((event, index) => (
        <Event key={index} event={event} onDelete={() => deleteEvent(index)} />
      ))}
      <div className="add-event-form">
        <input
          type="text"
          placeholder="Event Title"
          value={newEventTitle}
          onChange={(e) => setNewEventTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Time"
          value={newEventTime}
          onChange={(e) => setNewEventTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Room"
          value={newEventRoom}
          onChange={(e) => setNewEventRoom(e.target.value)}
        />
        <button onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
}

const Event = ({ event, onDelete }) => {
  return (
    <div className="event-container">
      <div className="event-title">{event.title}</div>
      <div className="event-time">{event.time}</div>
      <div className="event-room">{event.room}</div>
      <button  className="delete-button" onClick={onDelete} >Delete</button>
    </div>
  );
};
