import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Shield, Users, CheckCircle, BarChart3, Zap, Settings } from 'lucide-react';

const StrategicAI: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'AI Readiness Assessment',
      description: 'Comprehensive analysis of your current systems with detailed ROI projections and implementation roadmap.'
    },
    {
      icon: TrendingUp,
      title: 'Custom AI Roadmap',
      description: 'Step-by-step implementation plan with guaranteed milestones and clear success metrics.'
    },
    {
      icon: BarChart3,
      title: 'ROI Optimization Strategy',
      description: 'Maximize your return on investment in the shortest timeframe with proven methodologies.'
    },
    {
      icon: Zap,
      title: 'Pilot Program Development',
      description: 'Low-risk proof-of-concepts that demonstrate value before full-scale implementation.'
    },
    {
      icon: Shield,
      title: 'AI Governance Framework',
      description: 'Establish ethical AI policies, compliance protocols, and risk management strategies.'
    },
    {
      icon: Settings,
      title: 'Performance Monitoring Systems',
      description: 'Real-time tracking and optimization of AI implementations for continuous improvement.'
    }
  ];

  const results = [
    { metric: '200%', label: 'Average ROI Within 90 Days' },
    { metric: '100+', label: 'Successful Implementations' },
    { metric: '98%', label: 'Client Satisfaction Rate' }
  ];

  const roadmapSteps = [
    {
      phase: 'Phase 1: Discovery & Assessment',
      duration: '1-2 weeks',
      activities: [
        'Current state analysis and process mapping',
        'Technology stack evaluation',
        'ROI potential identification',
        'Risk assessment and mitigation planning'
      ]
    },
    {
      phase: 'Phase 2: Strategy Development',
      duration: '1-2 weeks',
      activities: [
        'Custom AI roadmap creation',
        'Priority use case selection',
        'Implementation timeline planning',
        'Resource requirement analysis'
      ]
    },
    {
      phase: 'Phase 3: Pilot Implementation',
      duration: '4-6 weeks',
      activities: [
        'Proof-of-concept development',
        'Initial system integration',
        'Performance metrics establishment',
        'Stakeholder training and onboarding'
      ]
    },
    {
      phase: 'Phase 4: Scale & Optimize',
      duration: '2-4 weeks',
      activities: [
        'Full system deployment',
        'Advanced feature implementation',
        'Performance optimization',
        'Ongoing monitoring setup'
      ]
    }
  ];

  const benefits = [
    'Minimize implementation risks',
    'Accelerate time to value',
    'Ensure sustainable adoption',
    'Optimize resource allocation',
    'Establish governance frameworks',
    'Drive measurable business outcomes'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Strategic AI Implementation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Don't just implement AI - implement it strategically. Our proven methodology ensures maximum ROI, 
              minimal risk, and sustainable adoption for your Tulsa business.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Your Strategic AI Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Strategic Implementation Delivers Results</h2>
            <p className="text-xl text-text-secondary">Proven outcomes from our strategic approach</p>
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive Strategic AI Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Every aspect of AI strategy and implementation, designed to ensure success from day one
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

      {/* Implementation Roadmap */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Proven Implementation Roadmap</h2>
            <p className="text-xl text-text-secondary">
              A structured approach that minimizes risk and maximizes success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="card">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-forest-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold">{step.phase}</h3>
                      </div>
                      <p className="text-text-secondary">{step.duration}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Strategic Implementation Matters</h2>
              <p className="text-xl text-text-secondary mb-8">
                Random AI implementations fail 70% of the time. Our strategic approach ensures you're 
                in the 30% that succeeds - and succeeds big.
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
              <h3 className="text-2xl font-bold mb-4 text-center">Get Your Strategic Assessment</h3>
              <p className="text-text-secondary text-center mb-6">
                Discover your AI readiness and get a custom roadmap for maximum ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>Comprehensive current state analysis</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>Custom AI implementation roadmap</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>ROI projections and timeline</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-forest-green" />
                  <span>Risk assessment and mitigation plan</span>
                </div>
                <Link to="/contact" className="btn-primary w-full text-center py-3">
                  Schedule Strategic Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Strategic Success Story</h2>
              <p className="text-xl text-text-secondary">
                How strategic planning delivered 300% ROI in 60 days
              </p>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-text-secondary mb-6">
                    A growing Tulsa professional services firm wanted to implement AI but didn't know where to start. 
                    Previous technology investments hadn't delivered expected returns, and leadership was skeptical.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Our Strategic Approach</h3>
                  <p className="text-text-secondary">
                    We conducted a comprehensive AI readiness assessment, identified high-impact use cases, 
                    and developed a phased implementation plan that started with a low-risk pilot program.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Results Achieved</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>ROI Achievement</span>
                      <span className="font-bold text-forest-green">300% in 60 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Process Efficiency</span>
                      <span className="font-bold text-forest-green">+250%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Time to Value</span>
                      <span className="font-bold text-forest-green">2 weeks</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Team Adoption Rate</span>
                      <span className="font-bold text-forest-green">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Strategic AI Success?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Don't leave your AI implementation to chance. Get a proven strategic roadmap 
            that guarantees results and maximizes your investment.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Get Your Strategic AI Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StrategicAI;