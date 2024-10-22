import Sidebar from '/Sidebar';
import { Link } from 'react-router-dom';
import { format, isBefore, isAfter, isEqual } from 'date-fns'; // date-fns for date comparison

// Sample Event Data
const eventsData = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    description: 'An exciting conference about the latest in tech.',
    date: '2024-11-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    image: 'https://via.placeholder.com/300x150',
    rules: 'No outside food or drinks allowed. Masks are mandatory.',
    benefits: 'Networking with industry professionals, Tech goodies, Access to exclusive talks.',
    attendanceBenefits: true,
    price: 50,
  },
  {
    id: 2,
    title: 'Art Workshop',
    description: 'Learn painting and sketching from professionals.',
    date: '2024-10-25',
    time: '2:00 PM',
    location: 'Art Studio',
    image: 'https://via.placeholder.com/300x150',
    rules: 'Bring your own art supplies. No photography allowed.',
    benefits: 'Free access to the studio for one week, Art supplies discounts.',
    attendanceBenefits: false,
    price: 30,
  },
  // other events...
];

const EventList = () => {
  const currentDate = new Date();

  // Helper function to determine event status
  const getEventStatus = (eventDate) => {
    const eventDateTime = new Date(eventDate);
    if (isBefore(eventDateTime, currentDate)) {
      return 'completed';
    }
    if (isEqual(eventDateTime, currentDate)) {
      return 'ongoing';
    }
    return 'upcoming';
  };

  // Categorize events into Upcoming, Ongoing, and Completed
  const upcomingEvents = eventsData.filter(event => getEventStatus(event.date) === 'upcoming');
  const ongoingEvents = eventsData.filter(event => getEventStatus(event.date) === 'ongoing');
  const completedEvents = eventsData.filter(event => getEventStatus(event.date) === 'completed');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Events</h1>

        {/* Upcoming Events Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <Link to={`/event/${event.id}`} key={event.id}>
                  <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
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
                </Link>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-300">No upcoming events.</p>
            )}
          </div>
        </section>

        {/* Ongoing Events Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Ongoing Events</h2>
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
                    <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">
                      Ongoing
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-300">No ongoing events.</p>
            )}
          </div>
        </section>

        {/* Completed Events Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Completed Events</h2>
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
                    <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">
                      Completed
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-300">No completed events.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventList;
