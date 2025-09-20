import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Clock, TrendingUp, CheckCircle, Building2 } from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Transform manual workflows into intelligent, self-running systems that work 24/7.',
      link: '/ai-automation'
    },
    {
      icon: Shield,
      title: 'Strategic AI Implementation',
      description: 'Custom AI roadmap with guaranteed milestones and ROI optimization.',
      link: '/strategic-ai-implementation'
    },
    {
      icon: Clock,
      title: 'Custom Software Development',
      description: 'AI-powered applications built with modern frameworks and enterprise security.',
      link: '/custom-software-development'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Real-time dashboards and predictive analytics for data-driven decisions.',
      link: '/business-intelligence-analytics'
    }
  ];

  const stats = [
    { number: '100+', label: 'Local Businesses Automated' },
    { number: '500+', label: 'Hours Saved Weekly' },
    { number: '340%', label: 'Average Efficiency Increase' },
    { number: '24/7', label: 'Automated Operations' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stop Doing Manual Work
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We help Tulsa business owners automate their biggest time-wasters so they can focus on growth, 
            not endless manual tasks that drain their energy and profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Free Automation Assessment
            </Link>
            <Link to="/client-stories" className="btn-secondary border-white text-white hover:bg-white hover:text-forest-green text-lg px-8 py-4">
              See How We Helped Local Tulsa Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-forest-green">{stat.number}</div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our AI Automation Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From workflow automation to intelligent analytics, we provide comprehensive 
              AI solutions tailored for Tulsa businesses.
            </p>
          </div>
          
          <div className="grid-2 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-light-green p-3 rounded-lg group-hover:bg-forest-green group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-text-secondary mb-4">{service.description}</p>
                      <Link 
                        to={service.link}
                        className="inline-flex items-center text-forest-green font-medium hover:text-dark-forest transition-colors"
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Your Free Automation Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Local Positioning */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Tulsa Business Owners Choose Local AI Experts</h2>
            <p className="text-xl text-text-secondary mb-8">
              We understand the unique challenges of running a business in Oklahoma. Unlike faceless corporations, 
              we're your neighbors, committed to your success and the growth of our local economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Building2 className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Local Understanding</h3>
                <p className="text-text-secondary">We know Tulsa businesses and understand local market dynamics.</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-text-secondary">100+ successful implementations with measurable ROI.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Oklahoma Values</h3>
                <p className="text-text-secondary">Honest, reliable service with transparent pricing and results.</p>
              </div>
            </div>

            <Link to="/about" className="btn-primary text-lg px-8 py-4">
              Learn About Our Tulsa Team
            </Link>
          </div>
        </div>
      </section>

      {/* Client Results Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Results for Real Tulsa Businesses</h2>
            <p className="text-xl text-text-secondary">
              Don't just take our word for it. See how we've helped local businesses save time and increase profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="text-3xl font-bold text-forest-green mb-2">90%</div>
              <div className="text-lg font-semibold mb-2">Reduction in Manual Processing</div>
              <div className="text-text-secondary">Local healthcare practice automated patient intake</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-forest-green mb-2">$50K</div>
              <div className="text-lg font-semibold mb-2">Monthly Savings</div>
              <div className="text-text-secondary">Construction company streamlined project management</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-forest-green mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Customer Service</div>
              <div className="text-text-secondary">Restaurant chain automated order processing</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/client-stories" className="btn-primary text-lg px-8 py-4">
              See All Client Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Wasting Time on Manual Work?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join 100+ Tulsa businesses that have already automated their biggest time-wasters. 
            Get your free assessment and see exactly how much time and money you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Free Automation Assessment
            </Link>
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <span>📞 (918) 899-1650</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;