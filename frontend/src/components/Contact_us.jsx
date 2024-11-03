import  { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to an API or email
    console.log('Form submitted:', formData);
    alert('Your message has been submitted!');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            You can also reach out to us via email, phone.
          </p>
          <p className="text-lg">
            <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-600 dark:text-blue-400">CampusConnect@gmail.com</a>
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400">999999999</a>
          </p>
          <p className="text-lg">
            <strong>Address:</strong> Nitte, Karkala
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
