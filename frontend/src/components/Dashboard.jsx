
import Sidebar from '../components/sidebar'; // Assuming you have a Sidebar component

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-lightPurple-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <Sidebar /> {/* Sidebar component */}

      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-semibold text-indigo-500 dark:text-gray-100">Overview</div>
          <div className="flex items-center space-x-4">
            
            {/* Add avatar or icon here */}
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Clients Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold ">Events Attended</h4>
              <div className="text-2xl font-bold">5</div>
              <div className="text-green-500">+12%</div>
            </div>
            <div className="text-green-500">
              <i className="fas fa-users text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Sales Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Certificates Earned</h4>
              <div className="text-2xl font-bold">4</div>
              <div className="text-red-500">-12%</div>
            </div>
            <div className="text-blue-500">
              <i className="fas fa-shopping-cart text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Performance Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Registered Events</h4>
              <div className="text-2xl font-bold">2</div>
              <div className="text-yellow-500">+2%</div>
            </div>
            <div className="text-yellow-500">
              <i className="fas fa-chart-line text-3xl"></i> {/* Icon */}
            </div>
          </div>

          {/* Alerts Card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Events Absent</h4>
              <div className="text-2xl font-bold">1</div>
              <div className="text-blue-500">1%</div>
            </div>
            <div className="text-yellow-500">
              <i className="fas fa-bell text-3xl"></i> {/* Icon */}
            </div>
          </div>
        </div>

        {/* User Profile & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* User Profile */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
            <div>
              <h4 className="text-xl font-semibold">Good to see you, Royston!</h4>
              <div className="text-gray-500 dark:text-gray-400">Last login 12 mins ago from 127.0.0.1</div>
              
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Recent Participations</h4>
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
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Mar 3, 2023 @ hackerearth</div>
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
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Dec 1, 2023 @ taaleem</div>
                  </div>
                </div>
                
              </div>
              {/* Add more recent activity rows as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
