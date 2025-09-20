import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Smartphone, Shield, Zap, BarChart3, CheckCircle, Globe } from 'lucide-react';

const CustomSoftware: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'AI-Powered Web Applications',
      description: 'Modern, responsive web applications built with Next.js, React, and cutting-edge AI integration.'
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Scalable PostgreSQL and Supabase implementations with real-time capabilities and AI-powered insights.'
    },
    {
      icon: Code,
      title: 'API Development & Integration',
      description: 'Secure, efficient APIs that connect your existing tools and enable seamless data flow.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Cross-platform iOS and Android applications with native performance and AI features.'
    },
    {
      icon: BarChart3,
      title: 'Custom AI Dashboards',
      description: 'Real-time business intelligence interfaces with predictive analytics and automated insights.'
    },
    {
      icon: Zap,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, AI-enhanced applications without losing critical data.'
    }
  ];

  const features = [
    'HIPAA-compliant infrastructure for healthcare applications',
    'Enterprise-grade security with multi-factor authentication',
    'Rapid deployment with proven technology stacks',
    'Scalable architecture that grows with your business',
    'Real-time data synchronization across all devices',
    'AI-powered automation built into every application'
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'Supabase', 'PostgreSQL'] },
    { category: 'Mobile', technologies: ['React Native', 'Expo', 'iOS', 'Android'] },
    { category: 'AI/ML', technologies: ['OpenAI', 'Anthropic', 'TensorFlow', 'Custom Models'] },
    { category: 'Cloud', technologies: ['Vercel', 'AWS', 'Google Cloud', 'Azure'] },
    { category: 'Security', technologies: ['OAuth', 'JWT', 'SSL/TLS', 'RBAC'] }
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Planning',
      duration: '1-2 weeks',
      description: 'Requirements gathering, technical architecture design, and project roadmap creation.'
    },
    {
      phase: 'UI/UX Design',
      duration: '1-2 weeks',
      description: 'User experience design, wireframing, and interactive prototype development.'
    },
    {
      phase: 'Development',
      duration: '4-8 weeks',
      description: 'Agile development with weekly demos and continuous feedback integration.'
    },
    {
      phase: 'Testing & Deployment',
      duration: '1-2 weeks',
      description: 'Comprehensive testing, performance optimization, and production deployment.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Custom Software Development</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your business operations with custom AI-powered applications built specifically for your needs. 
              Modern, secure, and scalable solutions that integrate seamlessly with your existing systems.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Start Your Custom Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Custom Development Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From concept to deployment, we build software solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card group">
                  <div className="bg-light-green p-3 rounded-lg w-fit mb-4 group-hover:bg-forest-green group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Learn More About This Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Features</h2>
              <p className="text-xl text-text-secondary mb-8">
                Every application we build includes industry-leading security, performance, 
                and scalability features as standard.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Why Choose Custom Development?</h3>
              <div className="space-y-4">
                <div className="bg-light-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Perfect Fit</h4>
                  <p className="text-sm text-text-secondary">Built specifically for your business processes and requirements.</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Competitive Advantage</h4>
                  <p className="text-sm text-text-secondary">Unique features that differentiate you from competitors.</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Full Control</h4>
                  <p className="text-sm text-text-secondary">You own the code, data, and can modify as your business grows.</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Integration</h4>
                  <p className="text-sm text-text-secondary">Seamlessly connects with your existing systems and workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-text-secondary">
              We use proven, cutting-edge technologies to ensure your application is fast, secure, and maintainable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold mb-4 text-forest-green">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-green rounded-full"></div>
                      <span className="text-text-secondary">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-text-secondary">
              Transparent, collaborative approach that keeps you involved every step of the way
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {developmentProcess.map((phase, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-6">
                    <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold">{phase.phase}</h3>
                        <span className="text-forest-green font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-text-secondary">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Recent Success Story</h2>
              <p className="text-xl text-text-secondary">
                How we built a custom patient management system for a Tulsa healthcare practice
              </p>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-text-secondary mb-6">
                    A growing medical practice needed a HIPAA-compliant patient management system 
                    that integrated with their existing billing software and provided real-time analytics.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-text-secondary">
                    We built a custom web application with patient portal, automated appointment scheduling, 
                    AI-powered triage system, and comprehensive reporting dashboard.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Development Time</span>
                      <span className="font-bold text-forest-green">8 weeks</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Admin Time Saved</span>
                      <span className="font-bold text-forest-green">25+ hours/week</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Patient Satisfaction</span>
                      <span className="font-bold text-forest-green">+45%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>ROI Achievement</span>
                      <span className="font-bold text-forest-green">6 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-forest-green text-white p-4 rounded-lg w-fit mx-auto mb-6">
                <Shield className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Security & Compliance First</h2>
              <p className="text-xl text-text-secondary">
                Every application is built with enterprise-grade security and industry compliance in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>Multi-factor authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>Role-based access control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>Automated security monitoring</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Compliance Standards</h3>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>HIPAA compliance for healthcare</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>SOC 2 Type II standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>GDPR data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green" />
                  <span>Regular security audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Custom Solution?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transform your business with a custom application built specifically for your needs. 
            Get a detailed project proposal and timeline for your requirements.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Start Your Custom Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;