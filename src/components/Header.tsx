import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Hoshiarpur.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/sectors" className="hover:text-blue-200 transition-colors">Business Sectors</Link>
            <Link to="/advertising" className="hover:text-blue-200 transition-colors">Ads</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search businesses..."
                className="px-4 py-1 rounded-l-md text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-r-md transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search businesses..."
                className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-r-md transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
              <Link to="/sectors" className="hover:text-blue-200 transition-colors">Business Sectors</Link>
              <Link to="/advertising" className="hover:text-blue-200 transition-colors">Ads</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;