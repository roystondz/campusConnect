import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close sidebar after 5 seconds of being open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 5000);
      return () => clearTimeout(timer); // Cleanup timer when component unmounts
    }
  }, [isOpen]);

  // Toggle between dark and light mode

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        className="p-4 bg-blue-500 text-white fixed top-4 left-4 z-20 rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 z-10 w-64 h-full bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out shadow-lg lg:relative lg:translate-x-0 lg:w-64`}
      >
        {/* Sidebar Header */}
        

        {/* Sidebar Navigation */}
        <nav className="py-6 px-2">
          <ul className="space-y-3">
            <li>
              <a href="/dashboard" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="/profile" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Profile
              </a>
            </li>
            <li>
              <a href="/clubs" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Clubs
              </a>
            </li>
            <li>
              <a href="/events" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Events
              </a>
            </li>
            <li>
              <a href="/notifications" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Notifications
              </a>
            </li>
            <li>
              <a href="/certificates" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Certificates
              </a>
            </li>
            <li>
              <a href="/settings" className="block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
                Settings
              </a>
            </li>
            <li>
              <a href="/logout" className="block p-3 rounded-lg bg-red-500 text-white hover:bg-red-600">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default Sidebar;
