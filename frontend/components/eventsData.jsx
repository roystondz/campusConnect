import Sidebar from './Sidebar';  // Import the Sidebar component
import { useState, useEffect } from 'react';

const eventsData = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    description: 'An exciting conference about the latest in tech.',
    date: '2024-11-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    title: 'Art Workshop',
    description: 'Learn painting and sketching from professionals.',
    date: '2024-10-25',
    time: '2:00 PM',
    location: 'Art Studio',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    title: 'Completed Event',
    description: 'A past event to show completed events.',
    date: '2023-09-10',
    time: '10:00 AM',
    location: 'Old Hall',
    image: 'https://via.placeholder.com/300x150',
  },
];

const EventList = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);

  useEffect(() => {
    const now = new Date();
    
    const upcoming = [];
    const ongoing = [];
    const completed = [];

    eventsData.forEach(event => {
      const eventDate = new Date(event.date + ' ' + event.time);
      
      if (eventDate > now) {
        upcoming.push(event);
      } else if (eventDate.toDateString() === now.toDateString()) {
        ongoing.push(event);
      } else {
        completed.push(event);
      }
    });

    setUpcomingEvents(upcoming);
    setOngoingEvents(ongoing);
    setCompletedEvents(completed);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Events */}
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Events</h1>
        
        {/* Upcoming Events */}
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{event.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Register
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-300">No upcoming events found.</p>
          )}
        </div>

        {/* Ongoing Events */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Ongoing Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ongoingEvents.length > 0 ? (
            ongoingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{event.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-300">No ongoing events found.</p>
          )}
        </div>

        {/* Completed Events */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 dark:text-white">Completed Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {completedEvents.length > 0 ? (
            completedEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{event.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-300">No completed events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
