import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, FileText, MessageSquare, Mail, Mic, Eye, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AIAutomation: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Transform manual workflows into intelligent, self-running systems that operate 24/7 without human intervention.'
    },
    {
      icon: FileText,
      title: 'Document Processing & Data Extraction',
      description: 'Achieve 99%+ accuracy for invoices, contracts, and forms with AI-powered document intelligence.'
    },
    {
      icon: MessageSquare,
      title: 'Customer Service Automation',
      description: 'Deploy AI-powered chatbots and virtual assistants that handle customer inquiries intelligently.'
    },
    {
      icon: Mail,
      title: 'Email & Communication Automation',
      description: 'Smart email sorting, automated responses, and intelligent scheduling that learns your preferences.'
    },
    {
      icon: Mic,
      title: 'Voice-to-Action Systems',
      description: 'Execute complex business processes through simple voice commands and natural language.'
    },
    {
      icon: Eye,
      title: 'Real-Time Competitive Intelligence',
      description: 'Monitor competitors automatically with intelligent alerts and actionable insights.'
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing Optimization',
      description: 'AI adjusts your pricing automatically based on demand, competition, and market conditions.'
    }
  ];

  const results = [
    { metric: '90%', label: 'Reduction in Manual Processing Time' },
    { metric: '340%', label: 'Increase in Response Efficiency' },
    { metric: '24/7', label: 'Automated Operations' }
  ];

  const benefits = [
    'Eliminate repetitive manual tasks',
    'Reduce human error by 95%+',
    'Scale operations without hiring',
    'Instant response to customer inquiries',
    'Predictable, consistent processes',
    'Real-time business insights'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">AI Automation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Stop wasting time on repetitive tasks. Our AI automation solutions transform your manual workflows 
              into intelligent, self-running systems that operate 24/7, allowing you to focus on growth and strategy.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Free Automation Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results for Tulsa Businesses</h2>
            <p className="text-xl text-text-secondary">Real improvements our clients have achieved</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-forest-green mb-2">{result.metric}</div>
                <div className="text-lg font-medium text-text-secondary">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete AI Automation Solutions</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From simple task automation to complex workflow orchestration, we cover every aspect 
              of business process automation.
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

      {/* Benefits Section */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Tulsa Businesses Choose Our AI Automation</h2>
              <p className="text-xl text-text-secondary mb-8">
                Our automation solutions are designed specifically for growing businesses that want to 
                scale efficiently without the overhead of constant manual work.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-center">Ready to Automate?</h3>
              <p className="text-text-secondary text-center mb-6">
                Get a custom automation assessment showing exactly how much time and money you could save.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>Free 30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>Custom automation roadmap</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>ROI projections for your business</span>
                </div>
                <Link to="/contact" className="btn-primary w-full text-center py-3">
                  Get Your Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Real Automation Success Story</h2>
              <p className="text-xl text-text-secondary">
                See how a local Tulsa healthcare practice saved 35+ hours per week
              </p>
            </div>

            <div className="card">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-text-secondary mb-6">
                    A busy medical practice was spending 8+ hours daily on patient intake forms, 
                    insurance verification, and appointment scheduling. Staff were overwhelmed, 
                    and patients experienced long wait times.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
                  <p className="text-text-secondary">
                    We implemented AI-powered document processing, automated insurance verification, 
                    and intelligent appointment scheduling that integrates with their existing systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                      <span>Time Saved Weekly</span>
                      <span className="font-bold text-forest-green">35+ hours</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                      <span>Processing Accuracy</span>
                      <span className="font-bold text-forest-green">99.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                      <span>Patient Satisfaction</span>
                      <span className="font-bold text-forest-green">+40%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                      <span>Monthly Savings</span>
                      <span className="font-bold text-forest-green">$15,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/client-stories" className="inline-flex items-center text-forest-green font-medium hover:text-dark-forest transition-colors">
                See More Success Stories <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Doing Manual Work?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Join the 100+ Tulsa businesses that have already automated their biggest time-wasters. 
            Get your free assessment and discover exactly how much time you could save.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Get Your Free Automation Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;