import Sidebar from '../components/Sidebar';

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: 'Photography Club',
      description: 'A club for students interested in photography and visual arts.',
      members: 120,
      icon: '📷',
      progress: 85,
    },
    {
      id: 2,
      name: 'Robotics Club',
      description: 'A place where students collaborate to build robots and participate in competitions.',
      members: 80,
      icon: '🤖',
      progress: 72,
    },
    {
      id: 3,
      name: 'Drama Club',
      description: 'A club for aspiring actors and playwrights, with regular performances.',
      members: 45,
      icon: '🎭',
      progress: 90,
    },
    {
      id: 4,
      name: 'Music Club',
      description: 'For musicians and music enthusiasts, with opportunities to perform and collaborate.',
      members: 95,
      icon: '🎵',
      progress: 65,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Clubs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div key={club.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{club.icon}</span>
                  <h2 className="text-xl font-semibold">{club.name}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{club.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">{club.members} members</div>
                  <div className="font-semibold text-green-500">+{club.progress}% progress</div>
                </div>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${club.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
