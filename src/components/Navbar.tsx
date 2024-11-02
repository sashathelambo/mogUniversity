import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MogUniversity</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Programs</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Community</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Programs</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
              <button className="w-full text-left px-3 py-2 text-indigo-600 font-medium hover:bg-indigo-50">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;