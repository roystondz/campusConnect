// EventDetail.js
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Sample events data with rules, benefits, and price added
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
    price: 50 // Paid event
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
    price: 0 // Free event
  },
  // other events...
];

const EventDetail = () => {
  const { id } = useParams(); // Get event ID from URL params
  const event = eventsData.find(event => event.id === parseInt(id)); // Find event by ID
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);

  // Simulate a payment gateway URL (In real life, this could be an actual payment gateway URL)
  const paymentGatewayURL = "https://example.com/payment-gateway";

  const handleRegisterClick = () => {
    const confirmRegistration = window.confirm(
      event.price > 0 
        ? `This event costs $${event.price}. Are you sure you want to proceed to payment?`
        : 'Are you sure you want to register for this free event?'
    );

    if (confirmRegistration) {
      if (event.price > 0) {
        // Redirect to payment gateway for paid events
        window.location.href = `${paymentGatewayURL}?eventId=${event.id}&price=${event.price}`;
      } else {
        // Directly register for free events
        setIsRegistered(true);
      }
    }
  };

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 dark:bg-gray-800 min-h-screen">
      {/* Event Image */}
      <img src={event.image} alt={event.title} className="w-full max-w-lg h-64 object-cover rounded-lg" />
      
      <div className="mt-4">
        {/* Event Title */}
        <h2 className="text-3xl font-bold dark:text-white">{event.title}</h2>

        {/* Event Description */}
        <p className="text-gray-700 dark:text-gray-300 mt-4">{event.description}</p>

        {/* Date, Time, and Location */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {event.date} | {event.time}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.location}</p>

        {/* Event Rules */}
        <h3 className="text-xl font-semibold dark:text-white mt-6">Event Rules</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{event.rules}</p>

        {/* Benefits */}
        <h3 className="text-xl font-semibold dark:text-white mt-6">Event Benefits</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{event.benefits}</p>

        {/* Attendance Benefits */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Attendance Benefits: {event.attendanceBenefits ? 'Yes' : 'No'}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold dark:text-white mt-4">Price: {event.price > 0 ? `$${event.price}` : 'Free'}</p>

        {/* Register Button */}
        <button
          onClick={handleRegisterClick}
          className={`mt-6 px-4 py-2 rounded ${
            isRegistered ? 'bg-green-600 text-white cursor-default' : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
          disabled={isRegistered}
        >
          {isRegistered ? 'Registered' : event.price > 0 ? `Proceed to Payment ($${event.price})` : 'Register for Free'}
        </button>
      </div>

      {/* Back to Events Button */}
      <button
        className="mt-4 text-indigo-500"
        onClick={() => navigate('/events')}
      >
        Back to Events
      </button>
    </div>
  );
};

export default EventDetail;
