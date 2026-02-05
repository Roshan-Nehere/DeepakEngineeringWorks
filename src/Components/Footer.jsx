import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');
        
        .footer-container {
          font-family: 'Rajdhani', sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }
        
        .footer-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.5) 25%,
            rgba(249, 115, 22, 0.5) 50%,
            rgba(59, 130, 246, 0.5) 75%,
            transparent 100%
          );
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #f97316);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          color: #3b82f6;
          transform: translateX(4px);
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .social-icon {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icon:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
          transform: translateY(-4px) rotate(5deg);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
        }
        
        .contact-item:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateX(4px);
        }
        
        .contact-icon {
          background: linear-gradient(135deg, #3b82f6, #f97316);
          padding: 0.5rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .footer-title {
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .copyright-bar {
          background: rgba(0, 0, 0, 0.3);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem 0;
        }
      `}</style>

      <footer className="footer-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company Info */}
            <div>
              <h3 className="footer-title">Deepak Engineering Works</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Expert in heavy lathe job works, machining solutions, and precision engineering from 10 KG to 5 TON capacity.
              </p>
              <div className="flex gap-3">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="footer-link text-gray-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link text-gray-300">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link text-gray-300">Services</Link>
                </li>
                <li>
                  <Link to="/products" className="footer-link text-gray-300">Products</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link text-gray-300">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="footer-title">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400">
                    +91 8669828175
                  </a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:info@deepakengineering.com" className="text-gray-300 hover:text-blue-400">
                    deepaknehereeng@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={16} />
                  </div>
                  <span className="text-gray-300">
                    Gat No: 277, NanekarWadi,MIDC Area chakan, backside of IAI Industries, Pune-Nashik Highway, Tal-Khed, Dist-Pune 410501
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-bar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Deepak Engineering Works. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;