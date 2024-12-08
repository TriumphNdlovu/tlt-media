'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

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

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Booking request submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '', date: '', time: '' }); // Reset form
      } else {
        setFormStatus('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error connecting to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-black text-offwhite font-serif">
      {/* Navbar */}
      <Navbar />

      {/* Book a Session Section */}
      <section className="py-24 sm:py-32 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400 font-serif uppercase tracking-widest">
          Check My Availability and Book a Session
        </h2>

        <div className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FJohannesburg&showPrint=0&title=TLT%20BOOKING%20SLOTS&src=dGVlZWtzaG9wQGdtYWlsLmNvbQ&src=ZW4uc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
            style={{ border: '0', width: '100%', height: '600px', borderRadius: '20px' }}
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          />
        </div>

        {/* Price List */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-serif uppercase tracking-widest mb-8 text-center">
            Price List
          </h3>
          <p className="text-center text-lg text-white mb-12">
            These are the standard rates for different types of photography sessions. Please note that these are starting prices and may vary based on the scope of work.
          </p>
        <section className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12">

          <ul className="space-y-6 text-lg text-white">
            <li className="flex justify-between border-b pb-4">
              <span>Graduations Photography</span>
              <span className="font-bold text-yellow-400">R500 / Hour</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span>Event Photography</span>
              <span className="font-bold text-yellow-400">R500 / Hour</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span>Brand Photography</span>
              <span className="font-bold text-yellow-400">R800 / Hour</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span>Wedding Photography</span>
              <span className="font-bold text-yellow-400">R10 000 / Day</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span>Other</span>
              <span className="font-bold text-yellow-400">Contact for Quote</span>
            </li>
          </ul>
        </section>

        {/* Booking Form */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-serif uppercase tracking-widest mb-4 text-center" id='request'>
          Request a Slot 
        </h3>
        <p className="text-center text-lg text-white mb-12">
          Please note that this is a request form and not a confirmation of booking. We will get back to you to confirm your booking and more info.
        </p>

        <div className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields here */}
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
              <label htmlFor="time" className="block text-sm sm:text-lg text-white mb-2">Preferred Session Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-3  text-white rounded-md border border-white bg-black"
                required
              />
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
            <div className="mt-6 text-center text-xl text-yellow text-white">
              {formStatus}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p>&copy; 2024 TLT Media. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookPage;
