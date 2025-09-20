import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Bot } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'Strategic AI Implementation', path: '/strategic-ai-implementation' },
    { name: 'Custom Software Development', path: '/custom-software-development' },
    { name: 'Intelligent Email Marketing', path: '/intelligent-email-marketing' },
    { name: 'Business Intelligence & Analytics', path: '/business-intelligence-analytics' },
    { name: 'Advisory & Training', path: '/advisory-training' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-forest-green" />
            <span className="text-2xl font-bold text-forest-green">AdvisoryAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-forest-green ${
                isActive('/') ? 'text-forest-green' : 'text-text-primary'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/ai-tech-stack"
              className={`font-medium transition-colors hover:text-forest-green ${
                isActive('/ai-tech-stack') ? 'text-forest-green' : 'text-text-primary'
              }`}
            >
              AI Tech Stack
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 font-medium text-text-primary hover:text-forest-green transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>AI Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-light-green hover:text-forest-green transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-forest-green ${
                isActive('/about') ? 'text-forest-green' : 'text-text-primary'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/client-stories"
              className={`font-medium transition-colors hover:text-forest-green ${
                isActive('/client-stories') ? 'text-forest-green' : 'text-text-primary'
              }`}
            >
              Client Stories
            </Link>
            
            <Link
              to="/contact"
              className="btn-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-text-primary hover:text-forest-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/ai-tech-stack"
                className="font-medium text-text-primary hover:text-forest-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tech Stack
              </Link>

              <div>
                <button
                  className="flex items-center space-x-1 font-medium text-text-primary hover:text-forest-green transition-colors w-full text-left"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>AI Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block text-sm text-text-secondary hover:text-forest-green transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="font-medium text-text-primary hover:text-forest-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/client-stories"
                className="font-medium text-text-primary hover:text-forest-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Stories
              </Link>
              
              <Link
                to="/contact"
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;