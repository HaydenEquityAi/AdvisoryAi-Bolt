import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-forest text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8" />
              <span className="text-2xl font-bold">AdvisoryAI</span>
            </div>
            <p className="text-gray-300 mb-6">
              Tulsa's premier AI automation consulting company. We help local businesses 
              stop doing manual work and start growing with intelligent automation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(918) 899-1650</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hayden@advisoryai.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tulsa, Oklahoma</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-automation" className="text-gray-300 hover:text-white transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/strategic-ai-implementation" className="text-gray-300 hover:text-white transition-colors">
                  Strategic AI Implementation
                </Link>
              </li>
              <li>
                <Link to="/custom-software-development" className="text-gray-300 hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/intelligent-email-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Intelligent Email Marketing
                </Link>
              </li>
              <li>
                <Link to="/business-intelligence-analytics" className="text-gray-300 hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/advisory-training" className="text-gray-300 hover:text-white transition-colors">
                  Advisory & Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ai-tech-stack" className="text-gray-300 hover:text-white transition-colors">
                  AI Tech Stack
                </Link>
              </li>
              <li>
                <Link to="/client-stories" className="text-gray-300 hover:text-white transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} AdvisoryAI. All rights reserved. 
            Proudly serving Tulsa businesses with cutting-edge AI automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;