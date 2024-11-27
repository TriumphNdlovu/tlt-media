'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Booking request submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '', date: '' }); // Reset form
    }, 2000);
  };

  return (
    <div className="bg-black text-offwhite font-serif">
      {/* Navbar */}
      <Navbar />

      {/* Book a Session Section */}
      <section className="py-24 sm:py-32 px-6">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400 font-serif uppercase tracking-widest"
        >
          Check My Availability and Book a Session
        </motion.h2>

        <div className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=teeekshop%40gmail.com&ctz=Africa%2FJohannesburg"
            style={{ border: '0', width: '100%', height: '600px' }}
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          />
        </div>

        {/* Booking Form */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-serif uppercase tracking-widest mb-4 text-center">
            Book a Session
          </h3>
          
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          // className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-7xl text-center"
          className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12"
        >

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-lg text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3  text-white rounded-md border border-white bg-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-lg text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3  text-white rounded-md border border-white bg-black"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-lg text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3  text-white rounded-md border border-white bg-black"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm sm:text-lg text-white mb-2">Preferred Session Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3  text-white rounded-md border border-white bg-black"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm sm:text-lg text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className="w-full p-3  text-white rounded-md border border-white bg-black"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-400 text-black py-3 px-8 rounded-md text-lg font-semibold uppercase hover:bg-yellow-500 transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>

          {formStatus && (
            <div className="mt-6 text-center text-xl text-yellow">
              {formStatus}
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p>&copy; 2024 TLT Media. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookPage;