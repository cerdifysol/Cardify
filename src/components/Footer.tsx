import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e]/20 border-t border-[#333333] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#512da8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="#512da8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#512da8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-xl font-semibold">Certify</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Blockchain-verified credentials for the future of education and professional development.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/issue" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Issue Certificate
                </Link>
              </li>
              <li>
                <Link to="/verify" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Verify Certificate
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  NFT Credentials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Learn More
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Certify. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built on</span>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
