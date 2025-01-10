'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaArrowUp } from 'react-icons/fa';

const BookPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
    date: '',
    time: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    date: '',
    time: '',
  });

  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Basic validation
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setFormErrors((prev) => ({ ...prev, email: 'Please enter a valid email.' }));
    } else if (name === 'phone' && value && !/^\d{10}$/.test(value)) {
      setFormErrors((prev) => ({ ...prev, phone: 'Please enter a valid phone number.' }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    // Simple validation before submitting
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setFormStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Booking request submitted successfully!');
        setFormData({ name: '', email: '', phone: '', category: '', message: '', date: '', time: '' }); // Reset form
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

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-offwhite font-serif bg-cover bg-center" 
    style={{ backgroundImage: 'url(/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-24 sm:py-32 px-6">
        <h2 className="text-4xl sm:text-5xl text-yellow-400 font-serif uppercase tracking-widest mb-8 leading-tight">
          Check My Availability and Book a Session
        </h2>

        <div className="max-w-7xl mx-auto mb-12">
          
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FJohannesburg&showPrint=0&title=TLT%20media&src=bGVobG9nb25vbG9naXZlbjhAZ21haWwuY29t&src=ZW4uc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4tZ2Iuc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043&color=%230B8043" style={{ border: 'solid 1px #777' }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* Working Hours Section */}
        <h3 className="text-3xl sm:text-4xl text-yellow-400 font-serif uppercase tracking-widest mb-8">
          My Working Hours
        </h3>
        <section className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl mb-12 bg-black bg-opacity-95">
          <ul className="space-y-4 text-lg text-white">
            <li className="flex justify-between">
              <span>Monday</span>
              <span className="font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tuesday</span>
              <span className="font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Wednesday</span>
              <span className="font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thursday</span>
              <span className="font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Friday</span>
              <span className="font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="font-bold">10:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-bold">Closed</span>
            </li>
          </ul>
        </section>

        {/* Booking Form */}
        <h3 className="text-3xl text-yellow-400 font-serif uppercase tracking-widest mb-8">
          Request a Slot
        </h3>
        <p className="text-center text-lg text-white mb-12">
          Please note that this is a request form and not a confirmation of booking. We will get back to you to confirm your booking and more info.
        </p>

        <div className="max-w-7xl mx-auto border border-white p-8 rounded-xl shadow-xl bg-black bg-opacity-90">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                  required
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              <div>
                <label htmlFor="phone" className="block text-lg text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                />
                {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="category" className="block text-lg text-white mb-2">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                >
                  <option value="">Select a category</option>
                  <option value="Wedding">Wedding</option>
                  <option value="MatricDance">Matric Dance</option>
                  <option value="brandShoot">BrandShoot</option>
                  <option value="Lobola">Lobola</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-lg text-white mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-lg text-white mb-2">Start Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 text-white rounded-md border border-white bg-black"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-black font-bold bg-yellow-400 rounded-md hover:bg-yellow-500 transition"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>

          <p className="text-center text-white mt-4">{formStatus}</p>
        </div>
      </section>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BookPage;
