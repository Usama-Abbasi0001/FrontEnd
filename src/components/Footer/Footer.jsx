import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        {/* Left Side */}
        <div className="mb-4 sm:mb-0">
          © Frontend Mentor 2019 - 2025
        </div>

        {/* Right Side Links */}
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">License</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
