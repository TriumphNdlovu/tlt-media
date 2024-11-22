// pages/index.tsx (Contact Section)
import React from 'react';
// pages/index.tsx (Contact Section)
const ContactSection = () => (
  <div id="contact" className="py-16 px-6 bg-gray-900 text-white text-center">
    <h2 className="text-3xl md:text-5xl font-light mb-6 uppercase tracking-wider">
      Get in Touch
    </h2>
    <p className="text-xl mb-8">Let’s create something beautiful together.</p>
    <form className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="text-lg">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-4 border-2 border-white bg-transparent text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="text-lg">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-4 border-2 border-white bg-transparent text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="text-lg">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-4 border-2 border-white bg-transparent text-white"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-transparent border-2 border-white text-white py-3 mt-4 uppercase tracking-wider"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default ContactSection;

