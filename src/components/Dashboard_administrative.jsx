import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [clubMembers] = useState([
    'John Doe', 'Jane Smith', 'Alice Brown', 'Bob White',
  ]);
  const [events, setEvents] = useState([
    { id: 1, name: 'CodeClash', date: '2023-03-03', participants: ['John Doe', 'Jane Smith'] },
    { id: 2, name: 'Dance With Me', date: '2023-12-01', participants: ['Alice Brown', 'Bob White'] },
  ]);
  const [formData, setFormData] = useState({ name: '', date: '', description: '' });
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCreateEvent = () => {
    setEvents([...events, { id: events.length + 1, ...formData, participants: [] }]);
    setFormData({ name: '', date: '', description: '' });
  };

  const handleDateClick = (date) => {
    setFormData({ ...formData, date: date.toISOString().split('T')[0] });
  };

  const toggleParticipantsModal = (event) => {
    setSelectedEvent(event);
    setShowParticipantsModal(!showParticipantsModal);
  };

  const toggleMembersModal = () => {
    setShowMembersModal(!showMembersModal);
  };

  return (
    <div className="flex min-h-screen bg-lightPurple-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-semibold text-indigo-500 dark:text-gray-100">Admin Dashboard</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardMetric title="Total Events" value={events.length} icon="calendar-alt" color="green" />
          <DashboardMetric
            title="Total Members in the Club"
            value={clubMembers.length}
            icon="users"
            color="blue"
            onClick={toggleMembersModal}
          />
          <DashboardMetric title="Feedback Score" value="4.5/5" icon="star" color="yellow" />
          <DashboardMetric title="Upcoming Events" value={events.filter(event => new Date(event.date) > new Date()).length} icon="bell" color="red" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Timeline events={events} />
          <EventCalendar events={events} onDateClick={handleDateClick} />
        </div>

        <div className="mt-8">
          <EventCreationForm formData={formData} setFormData={setFormData} handleCreateEvent={handleCreateEvent} />
        </div>
      </div>

      {showParticipantsModal && (
        <ParticipantsModal
          selectedEvent={selectedEvent}
          closeModal={() => setShowParticipantsModal(false)}
        />
      )}

      {showMembersModal && (
        <MembersModal
          members={clubMembers}
          closeModal={toggleMembersModal}
        />
      )}
    </div>
  );
};

// PropTypes for Dashboard
Dashboard.propTypes = {
  clubMembers: PropTypes.arrayOf(PropTypes.string),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      participants: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  formData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }),
  setFormData: PropTypes.func.isRequired,
  handleCreateEvent: PropTypes.func.isRequired,
  toggleMembersModal: PropTypes.func.isRequired,
  toggleParticipantsModal: PropTypes.func.isRequired,
  selectedEvent: PropTypes.object,
};

// Modal to view event participants
const ParticipantsModal = ({ selectedEvent, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h4 className="text-xl font-semibold mb-4">Participants of {selectedEvent?.name}</h4>
      <ul className="space-y-2">
        {selectedEvent?.participants.map((participant, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">{participant}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

ParticipantsModal.propTypes = {
  selectedEvent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  closeModal: PropTypes.func.isRequired,
};

// Modal to view all club members
const MembersModal = ({ members, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h4 className="text-xl font-semibold mb-4">All Club Members</h4>
      <ul className="space-y-2">
        {members.map((member, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">{member}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

MembersModal.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeModal: PropTypes.func.isRequired,
};

// DashboardMetric component for displaying metrics
const DashboardMetric = ({ title, value, icon, color, onClick }) => (
  <div
    className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center cursor-pointer`}
    onClick={onClick}
  >
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="text-2xl font-bold">{value}</div>
    </div>
    <div className={`text-${color}-500`}>
      <i className={`fas fa-${icon} text-3xl`}></i>
    </div>
  </div>
);

DashboardMetric.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

// Timeline component for listing events
const Timeline = ({ events }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold mb-4">Event Timeline</h4>
    <div className="space-y-4">
      {events.map(event => (
        <div key={event.id} className="flex justify-between items-center">
          <div>
            <h5 className="font-semibold">{event.name}</h5>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{new Date(event.date).toLocaleDateString()}</div>
          </div>
          <span className={`px-3 py-1 rounded-full text-white ${new Date(event.date) > new Date() ? 'bg-blue-500' : 'bg-gray-500'}`}>
            {new Date(event.date) > new Date() ? 'Upcoming' : 'Completed'}
          </span>
        </div>
      ))}
    </div>
  </div>
);

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Calendar component for displaying events by date
const EventCalendar = ({ events, onDateClick }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold mb-4">Event Calendar</h4>
    <Calendar
      onClickDay={onDateClick}
      tileClassName={({ date }) => {
        if (events.some(event => new Date(event.date).toLocaleDateString() === date.toLocaleDateString())) {
          return 'bg-green-500 text-white';
        }
        return '';
      }}
    />
  </div>
);

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDateClick: PropTypes.func.isRequired,
};

// EventCreationForm component to create new events
const EventCreationForm = ({ formData, setFormData, handleCreateEvent }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold mb-4">Create Event</h4>
    <form onSubmit={(e) => { e.preventDefault(); handleCreateEvent(); }}>
      <FormInput
        label="Event Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <FormInput
        label="Event Date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        type="date"
      />
      <FormInput
        label="Event Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <div className="mt-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Create Event</button>
      </div>
    </form>
  </div>
);

EventCreationForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  handleCreateEvent: PropTypes.func.isRequired,
};

// FormInput component for rendering input fields
const FormInput = ({ label, value, onChange, type = 'text' }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
      value={value}
      onChange={onChange}
    />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Dashboard;
