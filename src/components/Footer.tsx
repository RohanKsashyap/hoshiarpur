import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hoshiarpur.com</h3>
            <p className="text-gray-300 mb-4">
              Your comprehensive business directory for Hoshiarpur district, connecting local businesses with customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/sectors" className="text-gray-300 hover:text-white transition-colors">Business Sectors</Link></li>
              <li><Link to="/advertising" className="text-gray-300 hover:text-white transition-colors">Advertise With Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cities</h3>
            <ul className="space-y-2">
              <li><Link to="/city/hoshiarpur" className="text-gray-300 hover:text-white transition-colors">Hoshiarpur</Link></li>
              <li><Link to="/city/garhshankar" className="text-gray-300 hover:text-white transition-colors">Garhshankar</Link></li>
              <li><Link to="/city/dasuya" className="text-gray-300 hover:text-white transition-colors">Dasuya</Link></li>
              <li><Link to="/city/mukerian" className="text-gray-300 hover:text-white transition-colors">Mukerian</Link></li>
              <li><Link to="/city/tanda" className="text-gray-300 hover:text-white transition-colors">Tanda</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@hoshiarpur.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hoshiarpur.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;