import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4 max-w-xl">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" required />
        <input type="email" name="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" required />
        <textarea name="message" rows="5" placeholder="Your Message" className="p-3 rounded bg-gray-800 text-white" required></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white">Send</button>
      </form>
    </section>
  );
}
