import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, Target, BookOpen, TrendingUp, Shield, CheckCircle, Calendar } from 'lucide-react';

const AdvisoryTraining: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Advisory Retainer',
      description: 'Monthly strategic sessions with our AI experts, functioning like a fractional Chief AI Officer for your business.'
    },
    {
      icon: Target,
      title: 'Technology Strategy Consulting',
      description: 'Navigate AI trends, evaluate technologies, and create long-term roadmaps that align with your business goals.'
    },
    {
      icon: BookOpen,
      title: 'Custom AI Training Programs',
      description: 'Hands-on training for your team on specific AI implementations, tools, and best practices.'
    },
    {
      icon: Users,
      title: 'AI Literacy Workshops',
      description: 'Organization-wide education to build AI understanding and comfort across all departments.'
    },
    {
      icon: Shield,
      title: 'Change Management Guidance',
      description: 'Support for the human side of AI adoption, ensuring smooth transitions and team buy-in.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization Reviews',
      description: 'Regular assessment and improvement of existing AI implementations for maximum ROI.'
    }
  ];

  const retainerBenefits = [
    'Monthly strategic AI planning sessions',
    'Priority support for urgent AI questions',
    'Technology evaluation and recommendations',
    'Access to latest AI trends and opportunities',
    'Custom training materials for your team',
    'Performance monitoring and optimization'
  ];

  const trainingModules = [
    {
      title: 'AI Fundamentals for Business Leaders',
      duration: '4 hours',
      audience: 'Executives & Managers',
      topics: ['AI basics and business applications', 'ROI evaluation frameworks', 'Strategic planning with AI', 'Risk management and ethics']
    },
    {
      title: 'Hands-On AI Tool Training',
      duration: '8 hours',
      audience: 'End Users',
      topics: ['Specific tool implementations', 'Workflow integration', 'Best practices and tips', 'Troubleshooting and support']
    },
    {
      title: 'AI Implementation Management',
      duration: '6 hours',
      audience: 'Project Managers',
      topics: ['Implementation methodologies', 'Change management', 'Performance measurement', 'Scaling strategies']
    }
  ];

  const consultingAreas = [
    'AI readiness assessment and gap analysis',
    'Technology stack evaluation and selection',
    'Implementation roadmap development',
    'Vendor evaluation and procurement strategy',
    'Risk assessment and mitigation planning',
    'Performance measurement and optimization'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Advisory & Training</h1>
            <p className="text-xl text-gray-200 mb-8">
              Build internal AI expertise and strategic guidance for your Tulsa business. Our advisory and training 
              services ensure your team is equipped to maximize AI investments and drive continuous improvement.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get AI Advisory Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Advisory & Training Solutions</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From strategic guidance to hands-on training, we provide comprehensive support for your 
              AI journey and long-term success.
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

      {/* AI Advisory Retainer */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">AI Advisory Retainer</h2>
              <p className="text-xl text-text-secondary mb-8">
                Get ongoing AI strategic guidance without the cost of a full-time Chief AI Officer. 
                Our retainer model provides consistent support and expertise for your AI initiatives.
              </p>
              
              <div className="space-y-4">
                {retainerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-center">Monthly Retainer Includes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                  <span>Strategic Planning Sessions</span>
                  <span className="font-bold text-forest-green">4 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                  <span>Priority Email Support</span>
                  <span className="font-bold text-forest-green">Unlimited</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                  <span>Technology Evaluations</span>
                  <span className="font-bold text-forest-green">2 per month</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-light-gray rounded-lg">
                  <span>Performance Reviews</span>
                  <span className="font-bold text-forest-green">Quarterly</span>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <Link to="/contact" className="btn-primary w-full text-center py-3">
                    Start Advisory Retainer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Custom AI Training Programs</h2>
            <p className="text-xl text-text-secondary">
              Tailored training modules designed for different roles and skill levels in your organization
            </p>
          </div>

          <div className="space-y-8">
            {trainingModules.map((module, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <p className="text-forest-green font-medium mb-1">{module.duration}</p>
                    <p className="text-text-secondary text-sm">{module.audience}</p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h4 className="font-semibold mb-3">Training Topics:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
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

      {/* Technology Strategy Consulting */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technology Strategy Consulting</h2>
              <p className="text-xl text-text-secondary">
                Navigate the complex AI landscape with expert guidance tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {consultingAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Typical Consulting Engagement</h3>
                <p className="text-text-secondary mb-8">
                  Our structured approach ensures comprehensive coverage of your AI strategy needs
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
                    <h4 className="font-semibold mb-2">Discovery</h4>
                    <p className="text-sm text-text-secondary">Current state assessment</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
                    <h4 className="font-semibold mb-2">Strategy</h4>
                    <p className="text-sm text-text-secondary">Roadmap development</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
                    <h4 className="font-semibold mb-2">Planning</h4>
                    <p className="text-sm text-text-secondary">Implementation planning</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-forest-green text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <p className="text-sm text-text-secondary">Ongoing guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Advisory Success Story</h2>
              <p className="text-xl text-text-secondary">
                How ongoing AI advisory helped a Tulsa company avoid costly mistakes and accelerate success
              </p>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-text-secondary mb-6">
                    A growing professional services firm wanted to implement AI but was overwhelmed by 
                    options and concerned about making expensive mistakes. Previous technology investments hadn't paid off.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Our Advisory Approach</h3>
                  <p className="text-text-secondary">
                    We provided monthly strategic guidance, evaluated multiple AI solutions, created a phased 
                    implementation plan, and trained their team throughout the process.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Avoided Bad Investments</span>
                      <span className="font-bold text-forest-green">$75,000</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Implementation Success Rate</span>
                      <span className="font-bold text-forest-green">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Team AI Confidence</span>
                      <span className="font-bold text-forest-green">+300%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Time to Value</span>
                      <span className="font-bold text-forest-green">3 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advisory & Training Options</h2>
            <p className="text-xl text-text-secondary">
              Choose the level of support that's right for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-center">One-Time Consulting</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Strategic assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Implementation roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Technology recommendations</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary w-full text-center py-2 text-sm">
                Get One-Time Consulting
              </Link>
            </div>

            <div className="card border-2 border-forest-green">
              <div className="text-center mb-4">
                <div className="bg-forest-green text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold">Monthly Retainer</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Ongoing strategic guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Performance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Team training included</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full text-center py-2 text-sm">
                Start Monthly Retainer
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-center">Custom Training</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Tailored curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Hands-on workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Custom materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span className="text-sm">Ongoing support</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary w-full text-center py-2 text-sm">
                Design Custom Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build AI Expertise?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Don't navigate the AI landscape alone. Get expert guidance and training that ensures 
            your investments deliver maximum value for your Tulsa business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get AI Advisory Services
            </Link>
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <Calendar className="h-5 w-5" />
              <span>Free consultation available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryTraining;