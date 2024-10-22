
import Sidebar from './Sidebar';  // Import the Sidebar component

const eventsData = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    description: 'An exciting conference about the latest in tech.',
    date: '2024-11-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    image: 'https://via.placeholder.com/300x150', // Placeholder image URL
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
    title: 'Art Workshop',
    description: 'Learn painting and sketching from professionals.',
    date: '2024-10-25',
    time: '2:00 PM',
    location: 'Art Studio',
    image: 'https://via.placeholder.com/300x150',
  },
];

const EventList = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Events */}
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Upcoming Events</h1>
        
        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventsData.length > 0 ? (
            eventsData.map((event) => (
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
            <p className="text-gray-500 dark:text-gray-300">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
