import { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    username: 'johndoe123', // default username
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: '',
    confirmPassword: '',
    notifications: true,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');
    // Handle form submission logic
    console.log('Settings updated:', formData);
    alert('Settings updated successfully!');
  };

  return (
    <div className="p-6 bg-lightPurple-100 dark:bg-gray-800 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Settings</h1>

        {/* Settings Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message */}
          {error && <div className="text-red-500">{error}</div>}

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Email (disabled if not editable) */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              disabled // Make email non-editable or manage separately
              className="w-full p-3 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Password Update */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Password</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-lg font-medium mb-2 text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-900">Enable</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
