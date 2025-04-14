import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Eventick</h2>
            <p className="mb-6">
              Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.
            </p>
          </div>

          {/* Plan Events */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Plan Events</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Create and Set Up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Tickets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online RSVP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Events</a></li>
            </ul>
          </div>

          {/* Eventick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Eventick</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Stay In The Loop</h3>
            <p className="mb-4">
              Join our mailing list to stay in the loop with our newest for Event and concert.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address." 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center md:text-left">
          <p>Copyright © {new Date().getFullYear()} Avi Yansoh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;