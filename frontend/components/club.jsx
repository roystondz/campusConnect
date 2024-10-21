import { useState } from 'react';


const Clubs = () => {
  const [selectedClub, setSelectedClub] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const clubs = [
    {
      id: 1,
      name: 'Photography Club',
      description: 'A club for students interested in photography and visual arts.',
      details: 'This club focuses on photography skills, including camera handling, editing techniques, and visual storytelling. We organize regular photography walks and workshops with industry professionals.',
      members: 120,
      icon: '📷',
      logo: 'https://via.placeholder.com/80x80?text=Photography+Logo', // Placeholder logo URL
      photos: [
        'https://via.placeholder.com/400x300?text=Photo+1',
        'https://via.placeholder.com/400x300?text=Photo+2',
        'https://via.placeholder.com/400x300?text=Photo+3',
      ],
    },
    {
      id: 2,
      name: 'Robotics Club',
      description: 'A place where students collaborate to build robots and participate in competitions.',
      details: 'Robotics club offers hands-on experience in building, programming, and controlling robots. We take part in national and international robotics competitions and host events for beginner to advanced level participants.',
      members: 80,
      icon: '🤖',
      logo: 'https://via.placeholder.com/80x80?text=Robotics+Logo',
      photos: [
        'https://via.placeholder.com/400x300?text=Robot+1',
        'https://via.placeholder.com/400x300?text=Robot+2',
        'https://via.placeholder.com/400x300?text=Robot+3',
      ],
    },
    // Add more clubs here...
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % selectedClub.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? selectedClub.photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">Clubs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => {
                setSelectedClub(club);
                setCurrentPhotoIndex(0); // Reset photo index on click
              }}
            >
              <div className="flex items-center mb-4">
                <img src={club.logo} alt={`${club.name} Logo`} className="w-12 h-12 rounded-full mr-4" />
                <h2 className="text-xl font-semibold">{club.name}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{club.description}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">{club.members} members</div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Club View with Glass Effect */}
        {selectedClub && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" // Highest z-index here
            onClick={() => setSelectedClub(null)}
          >
            <div
              className="relative bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-lg w-full text-gray-800 dark:text-gray-100 pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className="flex items-center mb-6">
                <img src={selectedClub.logo} alt={`${selectedClub.name} Logo`} className="w-16 h-16 rounded-full mr-4" />
                <h2 className="text-2xl font-bold">{selectedClub.name}</h2>
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{selectedClub.details}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{selectedClub.members} members</div>

              {/* Carousel for Photos */}
              {selectedClub.photos && (
                <div className="relative w-full h-64 mb-4">
                  <img
                    src={selectedClub.photos[currentPhotoIndex]}
                    alt={`Photo ${currentPhotoIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Previous Button */}
                  <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 "
                    onClick={prevPhoto}
                  >
                    ◀
                  </button>
                  {/* Next Button */}
                  <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 "
                    onClick={nextPhoto}
                    title=">"
                  >
                     ▶
                  </button>
                </div>
              )}

              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
                onClick={() => setSelectedClub(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clubs;
