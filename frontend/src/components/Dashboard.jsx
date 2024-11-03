import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

const Dashboard = () => {
  const location = useLocation();
  const {state} = location;
  return (
    <div className="flex min-h-screen text-gray-800 bg-lightPurple-100 dark:bg-gray-800 dark:text-gray-100">
      <Sidebar /> {/* Sidebar component */}
      {state?(
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-3xl font-semibold text-indigo-500 dark:text-gray-100">Overview</div>
          <div className="flex items-center space-x-4">
            
            {/* Add avatar or icon here */}
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Clients Card */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div>
              <h4 className="text-lg font-semibold ">Events Attended</h4>
              <div className="text-2xl font-bold">5</div>
              <div className="text-green-500">+12%</div>
            </div>
            <div className="text-green-500">
              <i className="text-3xl fas fa-users"></i> {/* Icon */}
            </div>
          </div>

          {/* Sales Card */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div>
              <h4 className="text-lg font-semibold">Certificates Earned</h4>
              <div className="text-2xl font-bold">4</div>
              <div className="text-red-500">-12%</div>
            </div>
            <div className="text-blue-500">
              <i className="text-3xl fas fa-shopping-cart"></i> {/* Icon */}
            </div>
          </div>

          {/* Performance Card */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div>
              <h4 className="text-lg font-semibold">Registered Events</h4>
              <div className="text-2xl font-bold">2</div>
              <div className="text-yellow-500">+2%</div>
            </div>
            <div className="text-yellow-500">
              <i className="text-3xl fas fa-chart-line"></i> {/* Icon */}
            </div>
          </div>

          {/* Alerts Card */}
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div>
              <h4 className="text-lg font-semibold">Events Absent</h4>
              <div className="text-2xl font-bold">1</div>
              <div className="text-blue-500">1%</div>
            </div>
            <div className="text-yellow-500">
              <i className="text-3xl fas fa-bell"></i> {/* Icon */}
            </div>
          </div>
        </div>

        {/* User Profile & Recent Activity */}
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
          {/* User Profile */}
          <div className="flex items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img
              className="w-16 h-16 mr-4 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
            <div>
              <h4 className="text-xl font-semibold">Good to see you,{state.name}</h4>
              <div className="text-gray-500 dark:text-gray-400">Last login 12 mins ago from 127.0.0.1</div>
              
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <h4 className="mb-4 text-xl font-semibold">Recent Participations</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="Person"
                  />
                  <div className="ml-4">
                    <h5 className="font-semibold">CodeClash</h5>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Mar 3, 2023 @ hackerearth</div>
                  </div>
                </div>
                
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="Person"
                  />
                  <div className="ml-4">
                    <h5 className="font-semibold">Dance With Me</h5>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Dec 1, 2023 @ taaleem</div>
                  </div>
                </div>
                
              </div>
              {/* Add more recent activity rows as needed */}
            </div>
          </div>
        </div>
      </div>
      ):(
        <p>No data passed</p>
      )}
    </div>
  );
};

export default Dashboard;
