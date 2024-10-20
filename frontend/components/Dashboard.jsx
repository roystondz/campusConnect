
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen dark:bg ">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your Dashboard! Here, you can manage clubs, schedule events, and track attendance.</p>

        {/* Example of additional sections */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          {/* Placeholder for event list */}
          <div className="mt-4 p-4 bg-white shadow rounded-lg">
            <p>No upcoming events. Create or manage events here!</p>
          </div>
        </section>

        {/* You can add more sections as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
