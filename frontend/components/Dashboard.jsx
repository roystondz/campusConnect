import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Profile Overview */}
        <div className="bg-purple-600 text-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p>Name: User Name</p>
          <p>Email: user@example.com</p>
          <a href="/profile" className="text-yellow-200 hover:underline">Edit Profile</a>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-purple-600 text-white shadow-md rounded-lg p-4 col-span-2">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <ul className="list-disc list-inside">
            <li>Posted a new message on the forum</li>
            <li>Liked a post from John Doe</li>
            <li>Commented on your friend’s picture</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-purple-600 text-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <ul className="list-disc list-inside">
            <li>You have a new message from Jane.</li>
            <li>New friend request from Bob.</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-purple-600 text-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="list-disc list-inside">
            <li><a href="/create-post" className="text-yellow-200 hover:underline">Create a New Post</a></li>
            <li><a href="/messages" className="text-yellow-200 hover:underline">View Messages</a></li>
          </ul>
        </div>

        {/* Community Highlights */}
        <div className="bg-purple-600 text-white shadow-md rounded-lg p-4 col-span-2">
          <h2 className="text-xl font-semibold">Community Highlights</h2>
          <ul className="list-disc list-inside">
            <li>Check out the latest post from the community!</li>
            <li>Join the discussion about upcoming events.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
