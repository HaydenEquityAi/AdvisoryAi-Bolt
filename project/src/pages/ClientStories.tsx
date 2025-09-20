import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';

const ClientStories: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Local Businesses Automated', icon: Users },
    { number: '500+', label: 'Hours Saved Weekly', icon: Clock },
    { number: '$2M+', label: 'Total Cost Savings', icon: DollarSign },
    { number: '340%', label: 'Average Efficiency Increase', icon: TrendingUp }
  ];

  const caseStudies = [
    {
      industry: 'Healthcare Practice',
      title: 'Medical Office Saves 35+ Hours Weekly',
      challenge: 'Manual patient intake, insurance verification, and appointment scheduling consuming 8+ hours daily.',
      solution: 'AI-powered document processing, automated insurance verification, intelligent scheduling system.',
      results: [
        '35+ hours saved weekly',
        '99.2% processing accuracy',
        '$15,000 monthly savings',
        '40% increase in patient satisfaction'
      ]
    },
    {
      industry: 'Construction Company',
      title: 'Project Management Automation',
      challenge: 'Complex project tracking, resource allocation, and client communication taking 20+ hours weekly.',
      solution: 'Automated project dashboards, resource optimization AI, client communication workflows.',
      results: [
        '60% faster project completion',
        '$50,000 monthly savings',
        '95% reduction in scheduling conflicts',
        '25% increase in project profitability'
      ]
    },
    {
      industry: 'Restaurant Chain',
      title: 'Order Processing & Customer Service',
      challenge: 'High-volume order processing, inventory management, and customer inquiries overwhelming staff.',
      solution: '24/7 AI chatbot, automated inventory tracking, intelligent order routing system.',
      results: [
        '24/7 automated customer service',
        '80% reduction in order errors',
        '45% faster order processing',
        '$30,000 monthly labor savings'
      ]
    }
  ];

  const tulsaCompanies = [
    { name: 'QuikTrip', logo: '🏪' },
    { name: 'ONEOK', logo: '⚡' },
    { name: 'Williams Companies', logo: '🔧' },
    { name: 'Saint Francis Health System', logo: '🏥' },
    { name: 'Bank of Oklahoma', logo: '🏦' },
    { name: 'Cherokee Nation Businesses', logo: '🏢' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Real results from real Tulsa businesses. See how our AI automation solutions have transformed 
            operations and delivered measurable ROI for companies just like yours.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Get Your Success Story Started
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The Numbers Don't Lie</h2>
            <p className="text-xl text-text-secondary">Measurable results across all our client implementations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <IconComponent className="h-8 w-8 text-forest-green mx-auto mb-2" />
                    <div className="text-4xl font-bold text-forest-green">{stat.number}</div>
                  </div>
                  <div className="text-lg font-medium text-text-secondary">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Detailed Success Stories</h2>
            <p className="text-xl text-text-secondary">
              Deep dive into how we've helped Tulsa businesses transform their operations
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="text-sm font-medium text-forest-green mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                      <p className="text-text-secondary">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Solution</h4>
                      <p className="text-text-secondary">{study.solution}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4">Results Achieved</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 p-4 bg-light-green rounded-lg">
                          <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                          <span className="font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Visualization */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Typical Implementation Timeline</h2>
              <p className="text-xl text-text-secondary">
                See the progression of results over our standard 90-day implementation
              </p>
            </div>

            <div className="card">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Week 1-2: Assessment & Planning</span>
                    <span className="text-forest-green font-bold">0% Automation</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-forest-green h-3 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Week 3-6: Initial Implementation</span>
                    <span className="text-forest-green font-bold">30% Automation</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-forest-green h-3 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Week 7-10: Advanced Features</span>
                    <span className="text-forest-green font-bold">70% Automation</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-forest-green h-3 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Week 11-12: Optimization & Training</span>
                    <span className="text-forest-green font-bold">90% Automation</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-forest-green h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-text-secondary">
              We've worked with some of Tulsa's most recognizable companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tulsaCompanies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <div className="text-sm font-medium text-text-secondary">{company.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-text-primary mb-8">
              "AdvisoryAI didn't just automate our processes - they transformed our entire business. 
              We've saved over $50,000 monthly and our team can finally focus on growth instead of paperwork."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <div className="font-semibold">Jennifer Martinez</div>
                <div className="text-text-secondary">CEO, Martinez Construction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Join these successful Tulsa businesses and start saving time and money with AI automation. 
            Get your free assessment today and see exactly what's possible.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Get Your Free Automation Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientStories;