import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data
  const faqs = [
    {
      question: 'What is this platform about?',
      answer:
        'This platform is designed to help students engage in various clubs, track events, and earn certificates for their participation.',
    },
    {
      question: 'How do I join a club?',
      answer:
        'You can join a club by navigating to the Clubs section and clicking on the club you are interested in. There will be a join button available if the club is accepting members.',
    },
    {
      question: 'Can I create my own club?',
      answer:
        'Yes! Students have the option to create their own clubs if they meet the necessary requirements set by the institution. Check the guidelines in the Clubs section for more details.',
    },
    {
      question: 'How do I track my event participation?',
      answer:
        'Your event participation is tracked automatically. You can view your attended events and earned certificates in the Dashboard section.',
    },
  ];

  // Function to toggle the dropdown for each FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-lightPurple-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions (FAQ)</h1>
        
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <span className="text-2xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
            </button>

            {/* Answer (only shows if activeIndex matches the index) */}
            {activeIndex === index && (
              <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
