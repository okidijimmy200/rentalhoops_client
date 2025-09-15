import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">RentalHoops</h4>
          <p className="text-sm">Connecting you with reliable transport drivers across the city.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">About</a></li>
            <li><a href="/" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white">Twitter</a>
            <a href="/" className="hover:text-white">Facebook</a>
            <a href="/" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400">&copy; 2025 RentalHoops. All rights reserved.</div>
    </footer>
  );
}