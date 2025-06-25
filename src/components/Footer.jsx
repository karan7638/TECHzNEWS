import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo_tech from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start">
          <img className="h-24" src={logo_tech} alt="Techznews Logo" />
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +91 7814763945</p>
          <p>Email: karan@gmail.com</p>
          <p>Address: Mohali, Punjab</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* News Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">News</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tech" className="hover:underline transition">Technology</Link>
            </li>
            <li>
              <Link to="/ai" className="hover:underline transition">Artificial Intelligence</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-300 border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} <span className="font-semibold text-white">TECHzNEWS</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
