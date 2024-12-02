// components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link to="/about-us" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <Link to="/careers" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul>
              <li>
                <p className="text-sm">Email: support@easygen.com</p>
              </li>
              <li>
                <p className="text-sm">Phone: +1 123-456-7890</p>
              </li>
              <li>
                <p className="text-sm">
                  Address: 1234 EasyGen St., City, Country
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p>&copy; 2024 EasyGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
