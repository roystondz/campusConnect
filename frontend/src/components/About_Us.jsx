// src/components/AboutUs.jsx



const AboutUs = () => {
  return (
    <div className="p-6 bg-lightPurple-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-600">About Us</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We are dedicated to empowering students by offering a platform to explore their passions and interests
            through various clubs, events, and activities. Our goal is to nurture creativity, foster innovation,
            and build a strong community where students can thrive.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-600">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
            <li>A wide variety of student-led clubs in areas such as photography, robotics, music, and more.</li>
            <li>Opportunities to participate in events and competitions.</li>
            <li>Tools for tracking personal progress and certificates earned from various activities.</li>
            <li>Access to a vibrant community of like-minded students.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our vision is to become the leading platform for student engagement, offering seamless access to
            extracurricular activities that help shape future leaders and innovators.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions, feel free to reach out at <a href="mailto:support@schoolclubs.com" className="text-blue-500">support@schoolclubs.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
