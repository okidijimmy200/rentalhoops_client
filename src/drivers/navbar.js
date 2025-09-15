import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Logo */}
          <div className="flex items-center order-1 md:order-1">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">R</div>
              <span className="sr-only">RentalHoops</span>
              <span className="hidden sm:inline-block text-gray-800 dark:text-gray-100 font-semibold">Rentalhoops</span>
            </a>
          </div>

          {/* MOBILE: Hamburger button on the right (visible on mobile) */}
          <div className="flex md:hidden order-2">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className={`h-6 w-6 transition-transform ${open ? 'transform rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* RIGHT: desktop nav links (About, Contacts) */}
          <nav className="hidden md:flex md:items-center md:space-x-6 order-2">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              About
            </a>
            <a
              href="#contacts"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              Contacts
            </a>
          </nav>
        </div>
      </div>

      {/* MOBILE: slide-down menu (priority mobile responsiveness) */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-max-height duration-300 ease-in-out ${
          open ? 'max-h-40' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            About
          </a>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Contacts
          </a>
        </div>
      </div>

      {/* DESKTOP: sticky top menu on small scroll (optional) */}
      <style jsx>{`
        /* Smooth max-height transition for mobile menu */
        .transition-max-height { transition-property: max-height; }
      `}</style>
    </header>
  );
}
