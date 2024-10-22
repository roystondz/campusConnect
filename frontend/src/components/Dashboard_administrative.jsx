import Sidebar from '../components/Sidebar'; // Assuming you have a Sidebar component

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-lightPurple-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Sidebar /> {/* Sidebar component */}

      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-semibold text-indigo-500 dark:text-gray-100">Admin Overview</div>
          <div className="flex items-center space-x-4">
            {/* Admin avatar or icon */}
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Events Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Total Events Created</h4>
              <div className="text-2xl font-bold">12</div>
              <div className="text-green-500">+5%</div>
            </div>
            <div className="text-green-500">
              <i className="fas fa-calendar-alt text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Participants Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Total Participants</h4>
              <div className="text-2xl font-bold">150</div>
              <div className="text-blue-500">+10%</div>
            </div>
            <div className="text-blue-500">
              <i className="fas fa-users text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Feedback Score */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Feedback Score</h4>
              <div className="text-2xl font-bold">4.5/5</div>
              <div className="text-yellow-500">+1.2%</div>
            </div>
            <div className="text-yellow-500">
              <i className="fas fa-star text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Upcoming Events</h4>
              <div className="text-2xl font-bold">3</div>
              <div className="text-red-500">-1 event</div>
            </div>
            <div className="text-red-500">
              <i className="fas fa-bell text-3xl"></i> {/* Icon */}
            </div>
          </div>
        </div>

        {/* Event Creation & Management Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Event Creation */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Create a New Event</h4>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Event Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter event name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Event description"
                ></textarea>
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create Event
              </button>
            </form>
          </div>

          {/* Recent Event Registrations */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Manage Event Registrations</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="Participant"
                  />
                  <div className="ml-4">
                    <h5 className="font-semibold">John Doe</h5>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Registered for CodeClash</div>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="Participant"
                  />
                  <div className="ml-4">
                    <h5 className="font-semibold">Jane Smith</h5>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Registered for Dance With Me</div>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Remove
                </button>
              </div>
              {/* Add more participants as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
