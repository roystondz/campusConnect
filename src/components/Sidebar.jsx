import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location (URL)

  // Auto-close sidebar after 5 seconds of being open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 5000);
      return () => clearTimeout(timer); // Cleanup timer when component unmounts
    }
  }, [isOpen]);

  // Function to check if the current route matches the sidebar link
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        className="p-4 bg-blue-500 text-white fixed top-13 left-4 z-20 rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 z-10 w-64 h-full bg-lightPurple-100 dark:bg-gray-800 transition-transform duration-300 ease-in-out shadow-lg lg:relative lg:translate-x-0 lg:w-64`}
      >
        {/* Sidebar Navigation */}
        <nav className="py-6 px-2">
          <ul className="space-y-3">
            <li>
              <Link
                to="/events"
                className={`block p-3 rounded-lg ${
                  isActive('/events')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/clubs"
                className={`block p-3 rounded-lg ${
                  isActive('/clubs')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Clubs
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`block p-3 rounded-lg ${
                  isActive('/notifications')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Notifications
              </Link>
            </li>
            <li>
              <Link
                to="/certificates"
                className={`block p-3 rounded-lg ${
                  isActive('/certificates')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`block p-3 rounded-lg ${
                  isActive('/settings')
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block p-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
